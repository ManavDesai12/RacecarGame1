class Player{
    constructor(){

    }

    getCount(){
    var countRef =  database.ref("playerCount");
    countRef.on("value", function(data){
        playerCount = data.val();
        console.log(playerCount)
    })



    }

    updateCount(count){
    database.ref("/").update({
        playerCount:count
    });


    }

    update(name){
    var playerIndex = "player" + playerCount
    database.ref(playerIndex).set({
        name:name
    })
        
    }
}