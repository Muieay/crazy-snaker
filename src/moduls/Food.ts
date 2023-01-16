class Food{
    element: HTMLElement

    constructor() {
        this.element=document.getElementById('food')!
        this.change()
    }
    get X(){
        return this.element.offsetLeft
    }

    get Y(){
        return this.element.offsetTop
    }
    // 修改食物的位置
    change(){
        let left=Math.round(Math.random()*80)*10
        let top=Math.round(Math.random()*57)*10
        this.element.style.left=left+'px'
        this.element.style.top=top+'px'
    }
}

export default Food
