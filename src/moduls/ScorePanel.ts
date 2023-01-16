class ScorePanel{
    //分数
    score=0
    // 等级
    level=1
    scoreEle:HTMLElement
    levelEle:HTMLElement

    // // 设置一个变量限制等级
    maxLevel: number;
    // // 设置一个变量表示多少分时升级
    upScore: number;

    constructor(maxLevel:number=10,upScore:number=10) {
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!

        this.maxLevel=maxLevel
        this.upScore=upScore
    }
    init(){
        this.score=0;
        this.level=1;
    }
    //设置一个加分的方法
    addScore(){
        this.scoreEle.innerHTML=++this.score+''
        if (this.score%this.upScore===0){
            this.levelUp()
        }
    }
    // 提升等级的方法
    levelUp(){
        if (this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+''
        }
    }
}

export default ScorePanel;


