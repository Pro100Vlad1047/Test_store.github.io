
let rNum,userNum;
let textOne=document.getElementById("Text_1").innerHTML;
let textTwo=document.getElementById("Text_2").innerHTML;

randomNum=()=>{
  rNum=Math.random()*10;
  rNum=Math.round(rNum);
  console.log(rNum);
}

hello=()=>{
  document.getElementById("Text_1").innerHTML="Time to guess the number from 1 to 10, you have 3 tries";
  document.getElementById("Text_2").innerHTML="To start the game press button below!";
}


playArea=()=>{
  document.getElementById("Text_2").innerHTML="Your turn:";
  console.log("Wait till your choice");
  if(userNum>rNum){
    document.getElementById("Text_1").innerHTML="Number is smaller than yours, try again";
  }else if(userNum<rNum){
    document.getElementById("Text_1").innerHTML="Number is bigger than yours, try again";
  }else if(userNum==rNum){
    document.getElementById("Text_1").innerHTML="We have a winner!!!";
    document.getElementById("Text_2").innerHTML=`And my number is ${rNum}`;
  }
}


 let i=0;
gameLoop=()=>{
  document.getElementById("Text_2").innerHTML="And my number is ?";
  if(i<3){
    playArea();
    i++;
  }
  if(i==3){
    playArea();
    if(userNum!=rNum){
      document.getElementById("Text_1").innerHTML="Sorry man, you just lose all your tries,try again in a new game!!!";
      document.getElementById("Text_2").innerHTML=`And my number is ${rNum}`;
    }
    i=0;
    //hello();
  }
}


function start(){
  hello();
  randomNum();
  i=0;
}

function userNumber(){
  userNum=document.getElementById("usersNumber").value;
  console.log(userNum + " usersNumber");
  gameLoop();
}


// Color changing//////

document.getElementById("color_red_label").style.color="yellow";
function color_red_Changing(){
  document.getElementById("color_red").checked= true;
  if(document.getElementById("color_red").checked== true){
    document.getElementById("color_red_label").style.color="yellow";
    document.getElementById("color_green_label").style.color="black";
    document.getElementById("color_blue_label").style.color="black";
    document.getElementById("color_white_label").style.color="black";

    document.querySelector("header").style.backgroundColor="#CB4335";
    document.getElementById("play_area").style.backgroundColor="#CB4335";
    document.getElementById("play_zone_text").style.backgroundColor="#E74C3C";  
    document.getElementById("play_zone_write").style.backgroundColor="#E74C3C";
    document.getElementById("play_zone_text").style.border= "2px solid black";  
    document.getElementById("play_zone_write").style.border="2px solid black";
    document.querySelector("header").style.borderBottom= "3px solid #E74C3C";
    document.getElementById("play_area").style.border= "3px solid #E74C3C";
    document.getElementById("start_game").style.border="2px solid black";
    document.getElementById("start_game").style.backgroundColor="#EC7063";
    document.getElementById("button").style.border="2px solid black";
    document.getElementById("button").style.backgroundColor="#EC7063";
    document.getElementById("usersNumber").style.border="2px solid #E74C3C";

  }else if(document.getElementById("color_red").checked== false){
    document.getElementById("color_red_label").style.color="black";
  }
}

function color_green_Changing(){
  document.getElementById("color_green").checked= true;
  if(document.getElementById("color_green").checked== true){
    document.getElementById("color_red_label").style.color="black";
    document.getElementById("color_green_label").style.color="yellow";
    document.getElementById("color_blue_label").style.color="black";
    document.getElementById("color_white_label").style.color="black";

    document.querySelector("header").style.backgroundColor="#28B463";
    document.getElementById("play_area").style.backgroundColor="#28B463";
    document.getElementById("play_zone_text").style.backgroundColor="#2ECC71";  
    document.getElementById("play_zone_write").style.backgroundColor="#2ECC71";
    document.getElementById("play_zone_text").style.border= "2px solid #117A65";  
    document.getElementById("play_zone_write").style.border="2px solid #117A65";
    document.querySelector("header").style.borderBottom= "3px solid #117A65";
    document.getElementById("play_area").style.border= "3px solid #117A65";
    document.getElementById("start_game").style.border="2px solid #117A65";
    document.getElementById("start_game").style.backgroundColor="#28B463";
    document.getElementById("button").style.border="2px solid #117A65";
    document.getElementById("button").style.backgroundColor="#28B463";
    document.getElementById("usersNumber").style.border="2px solid #117A65";

  }else if(document.getElementById("color_green").checked== false){
    document.getElementById("color_green_label").style.color="black";
  }
}

function color_blue_Changing(){
  document.getElementById("color_blue").checked= true;
  if(document.getElementById("color_blue").checked== true){
    document.getElementById("color_red_label").style.color="black";
    document.getElementById("color_green_label").style.color="black";
    document.getElementById("color_blue_label").style.color="yellow";
    document.getElementById("color_white_label").style.color="black";

    document.querySelector("header").style.backgroundColor="#3498DB";
    document.getElementById("play_area").style.backgroundColor="#3498DB";
    document.getElementById("play_zone_text").style.backgroundColor="#85C1E9";  
    document.getElementById("play_zone_write").style.backgroundColor="#85C1E9";
    document.getElementById("play_zone_text").style.border= "2px solid #2874A6";  
    document.getElementById("play_zone_write").style.border="2px solid #2874A6";
    document.querySelector("header").style.borderBottom= "3px solid #2874A6";
    document.getElementById("play_area").style.border= "3px solid #2874A6";
    document.getElementById("start_game").style.border="2px solid #2874A6";
    document.getElementById("start_game").style.backgroundColor="#3498DB";
    document.getElementById("button").style.border="2px solid #2874A6";
    document.getElementById("button").style.backgroundColor="#3498DB";
    document.getElementById("usersNumber").style.border="2px solid #2874A6";

  }else if(document.getElementById("color_green").checked== false){
    document.getElementById("color_blue_label").style.color="black";
  }
}

function color_white_Changing(){
  document.getElementById("color_white").checked= true;
  if(document.getElementById("color_white").checked== true){
    document.getElementById("color_red_label").style.color="black";
    document.getElementById("color_green_label").style.color="black";
    document.getElementById("color_blue_label").style.color="black";
    document.getElementById("color_white_label").style.color="red";

    document.querySelector("header").style.backgroundColor="#F1C40F";
    document.getElementById("play_area").style.backgroundColor="#F1C40F";
    document.getElementById("play_zone_text").style.backgroundColor="#F9E79F";  
    document.getElementById("play_zone_write").style.backgroundColor="#F9E79F";
    document.getElementById("play_zone_text").style.border= "2px solid #F39C12";  
    document.getElementById("play_zone_write").style.border="2px solid #F39C12";
    document.querySelector("header").style.borderBottom= "3px solid #F39C12";
    document.getElementById("play_area").style.border= "3px solid #F39C12";
    document.getElementById("start_game").style.border="2px solid #F39C12";
    document.getElementById("start_game").style.backgroundColor="#F1C40F";
    document.getElementById("button").style.border="2px solid #F39C12";
    document.getElementById("button").style.backgroundColor="#F1C40F";
    document.getElementById("usersNumber").style.border="2px solid #F39C12";

  }else if(document.getElementById("color_green").checked== false){
    document.getElementById("color_white_label").style.color="black";
  }
}



//////////