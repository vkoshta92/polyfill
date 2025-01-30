function vishnu(){
    let timerClosed=true;
    function startTimer(){
        let sec=60;
        let timer= setInterval(function(){
            document.getElementsByClassName("timerRunning")[0].innerHTML="00:"+sec;
            sec--;
            if (sec<0){
                clearInterval(timer);
                document.getElementsByClassName("btnStartAgain")[0].classList.remove("hidden");
                document.getElementsByClassName("resultContainer")[0].innerHTML="";
            }
        },1000)
    }
let score=0;
let currentNumber=0;

function start(){
    document.getElementsByClassName("btnStart")[0].classList.add("hidden");
    document.getElementsByClassName("btnStartAgain")[0].
    classList.add("hidden");

    startTimer();
    timerClosed=false;

    document.getElementsByClassName("scoreRunning")[0].innerHTML="0";
    score=0;
    generateRandom();

}


document.getElementsByClassName("btnStart")[0].addEventListener("click",function(e){
    //start game
    start();
});

document.getElementsByClassName("btnStartAgain")[0].addEventListener("click",function(e){
    //start game again
    start();
})
   


















}
vishnu();
