import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel
    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor(maxLevel:number=10,upScore:number=2) {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(maxLevel,upScore)
        this.init()
    }

    // 初始化
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run()
    }

    //键盘事件
    keydownHandler(event: KeyboardEvent) {
        /**
         * ArrowUp      Ww
         * ArrowLeft    Aa
         * ArrowDown    Ss
         * ArrowRight   Dd
         */
        // console.log(event.key)
        this.direction = event.key
    }

    //炒作snake移动
    run() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case 'w':
            case 'W':
            case 'ArrowUp':
                Y -= 10
                break;
            case 's':
            case 'S':
            case 'ArrowDown':
                Y += 10
                break;
            case 'a':
            case 'A':
            case 'ArrowLeft':
                X -= 10
                break;
            case 'd':
            case 'D':
            case 'ArrowRight':
                X += 10
                break;
        }
        this.checkEat(X, Y)
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e) {
            // alert(e.message);
            alert((e as Error).message+'GAME OVER!')
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    //来检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (this.food.X === X && this.food.Y === Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl
