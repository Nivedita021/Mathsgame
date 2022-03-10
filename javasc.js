//set score to zero when we start playing game 
//if we click on start/reset button
// if we play: button is RESET and we reload page
// if we do not play
//show countdown
//reduce time in loops(1sec)
//check if any time is left-continue otherwise > game over !
//change button text to reset
//generate a new question and multiple answers
//---------------------------------------------------
// click on answer box-if we play> check for correct answer>if yes>increase score by 1+show correct box for 1 sec+ generate new question ans
//answers, if answer is wrong show try again box for 1 sec
//____________________________________________________________________________________________________________________________________________
var play=false;
var scores;
var act;
var timere;
var ans;
document.getElementById("gamest").onclick=function(){ if(play==true) {location.reload();} 
else {play=true;
    scores=0;
    document.getElementById("value").innerHTML=scores;
    show("timed");
    timere=60;
    document.getElementById("times").innerHTML=timere;
    hide("gover");
    document.getElementById("gamest").innerHTML="Reset Game";
    countdown();
    generateQ();

}


}
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
    if(play==true)
    {
        if(this.innerHTML==ans)
        {
            scores++;
            document.getElementById("value").innerHTML=scores;
            hide("try");
            show("correct");
            setTimeout(function(){hide("correct");},1000);
            generateQ();
        }
        else
        {
            hide("correct");
            show("try");
            setTimeout(function(){hide("try");},1000);
            if(timere>10)
            timere-=10;
        }
    }
}}
function countdown()
{ act=setInterval(function(){ 
    timere--;
    document.getElementById("times").innerHTML=timere;
    if(timere==0)
    {
        //Game over
       stopcountdown();
      show("gover");
       document.getElementById("gover").innerHTML="<p>Game Over!</p><p>Your Score is "+scores+".</p>";
    hide("timed");
    hide("correct");
    hide("try");
    playing =false;
    document.getElementById("gamest").innerHTML="Start Game";
    }
},1000);}
function stopcountdown()
{ clearInterval(act);}

function hide(Id)
{
    document.getElementById(Id).style.display="none";
}
function show(Id)
{
    document.getElementById(Id).style.display="block";
}
function generateQ(){
    var x=1+Math.round(90*Math.random());
    var y=1+Math.round(90*Math.random());
  ans=x*y;
  document.getElementById("ques").innerHTML=x+"x"+y;
  var w=1+Math.round(3*Math.random());
  document.getElementById("box"+w).innerHTML=ans;
  var answers=[ans];
  for(i=1;i<5;i++){
      if(i!=w)
      {  var wr;
      do{
        
            wr=(1+Math.round(90*Math.random()))*(1+Math.round(90*Math.random()));
            
          
       }while(answers.indexOf(wr)>-1)
       document.getElementById("box"+i).innerHTML=wr;
       answers.push(wr);}
  }

}