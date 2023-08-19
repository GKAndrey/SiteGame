class Sprite {
    constructor(x, y, typePlatform = 1){
        this.x = x;
        this.y = y;
        this.element = document.createElement("img")
        this.element.className = "platform"
        this.element.id = typePlatform
        this.element.alt="Monster"
        if (typePlatform == 1) {
            this.element.src = "/sprite/platforms/platform.png"
        }else if(typePlatform == 2) {
            this.element.src = "/sprite/platforms/platformFlow.png"
        }else if(typePlatform == 3) {
            this.element.src = "https://i.gifer.com/3OaiJ.gif"
        }
        this.div = document.querySelector(".platforms")
        this.div.appendChild(this.element)
        
    }
}



export default Sprite;