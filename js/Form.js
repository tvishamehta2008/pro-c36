class Form{
    constructor(){}

    display(){
        var title= createElement('h2');
        title.html("Car Racing Game");
        title.position(350,80);

        var input= createInput("Name");
        input.position(350,130);

        var button= createButton("Play");
        button.position(350,160);

        var greeting= createElement('h2');
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name= input.value();

            greeting.html("Hello "+name);
            greeting.position(350,110);

            playerCount= playerCount+1;
            player.update(name);
            player.updateCount(count);
        })
    }
}

