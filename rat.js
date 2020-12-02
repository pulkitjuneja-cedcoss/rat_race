var n;
var element2;
var click;
var count = 0;
var start_now;
var chances_left = 3;
var time_left = 60;
var ls;
var n_array = [];
var i=0;


function dispaly_rat(){

    var random;
    random = Math.floor(Math.random()*9) + 1;
    console.log(random);
    console.log("done");
    n = random;
    i=1;
    console.log("i is"+i);

    console.log(n);

    var element = document.getElementById(random);
    console.log(element);

    element.classList.remove("que");
    element.classList.add("rat");
    
    console.log("done");

}

 function hide_rat(){
    console.log(n)
    element2 = document.getElementById(n);
    console.log(element2);
   element2.classList.remove("rat");
   element2.classList.add("que");
  
   
   console.log("done");

 }

 function contd(){

    setTimeout(dispaly_rat,1000);
    setInterval(time_remained(),1000);
    setTimeout(hide_rat,2000);

 }

function start(){ 
    document.getElementById("final_score").style.display = "none";
    
   start_now = setInterval(contd,2000);
    setTimeout(quit,60000);
     
}

    
 function score(m){
    
    click = m ;
    console.log(click);
    console.log(n);

    if(i == 1){

        if(click == n){
            count++;
            console.log(count);
            }

        else{
            chances_left--;
            console.log("chance left"+ chances_left);
            document.getElementById("chancesleft").innerHTML =  chances_left;

            if(chances_left == 0){
                quit();
            }
        }
        i--;
        console.log("i is"+i);

    }

    document.getElementById("score").innerHTML = count;

    console.log(count);
    console.log(typeof(count));


    ls =  parseInt(localStorage.getItem("highestscore") )
    console.log(typeof(ls));

    if (ls >= count){

        console.log("if");

        document.getElementById("highestscore").innerHTML = ls;   
    }
    
    else{
        console.log("else");
        localStorage.removeItem("highestscore");
        localStorage.setItem("highestscore",count );
        document.getElementById("highestscore").innerHTML = count;
    }     

 }

document.getElementById("highestscore").innerHTML = localStorage.getItem("highestscore");

function pause(){  
    document.getElementById("resume").style.display = "inline-block";
    clearInterval(start_now);
    console.log("done");

    if (localStorage.getItem("highestscore") > document.getElementById("score").innerHTML){

        document.getElementById("highestscore").innerHTML = localStorage.getItem("highestscore");   
    }
    
    else{
        localStorage.removeItem("highestscore");
        localStorage.setItem("highestscore",document.getElementById("score").innerHTML );
        document.getElementById("highestscore").innerHTML = localStorage.getItem("highestscore");
    }    

}

function resume(){
    start();
}

function quit(){

    document.getElementById("score").innerHTML = count;
    console.log(count);
    document.getElementById("final_score").style.display = "block";
    document.getElementById("final_score").innerHTML = "Final Score is:" + count;
  
    document.getElementById("time_left").innerHTML = "60s";

    clearInterval(start_now);
    count = 0;
    
}

function time_remained(){
    time_left--;
    console.log(time_left)
    document.getElementById("time_left").innerHTML = time_left + "s";

}








