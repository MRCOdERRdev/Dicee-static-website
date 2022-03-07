    var randomNumber1= Math.floor(Math.random()*6)+1;
    var randomNumber2= Math.floor(Math.random()*6)+1;
    path1="./images/dice"+randomNumber1+".png";
    path2="./images/dice"+randomNumber2+".png";
    document.querySelectorAll("img")[0].setAttribute('src',path1);
    document.querySelectorAll("img")[1].setAttribute('src',path2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent="player1 wins"
    }

    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").textContent="player2 wins"
    }
    else{
        document.querySelector("h1").textContent="It was a tie!!"   
    }