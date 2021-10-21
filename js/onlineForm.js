class OnlineForm{
    constructor(numberOfPlayers){
        this.numberOfPlayers=numberOfPlayers;
        this.key=null;
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.rank = 0;
        this.fuel = 185;
        this.life = 185;
        this.score = 0;

        this.nameLabel = createElement("Label","Enter your name :");
        this.nameInput = createInput();
        this.submitButton = createButton("Submit");
        this.greeting = createElement("h1");
    }

    positionElements(){
        this.nameLabel.position(width/2-100,height/2-100);
        this.nameInput.position(width/2-100,height/2-80);
        this.submitButton.position(width/2-100, height/2-50);
    }

    hide(){
        this.nameLabel.hide();
        this.nameInput.hide();
        this.submitButton.hide();

    }

    // handleMousePressed(){
    //     this.submitButton.mousePressed(()=>{
    //         database.ref("online/"+this.numberOfPlayers+"/lastKey").once("value",(data)=>{
    //             this.key = data.val();
    //             console.log(this.key);
    //         });

    //         database.ref("online/"+this.numberOfPlayers+"/"+this.key).once("value",(data)=>{
    //             var pCount = data.val();
    //         });

    //         if()


    //     });
    // }
    
    display(){
        this.positionElements();
        //this.handleMousePressed();
    }
}