console.log("js is running");
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// if( userNum==isNaN || userNum<0 || userNum>100||userNum==""){
//     alert('Please Enter a number 0-100!');
// } else {

const guessNUm=Math.floor((Math.random() * 100) + 1);
console.log(guessNUm);
let play=true;
let gameOver=false;
let tries=10;
let triesTaken=0;
function compareNum(){
    if(play){
   let input=document.querySelector('input'); 
    const userNum=input.value;//parseInt
    // console.log(typeof userNum);
//    userNum.style.color="red";
    document.querySelector('h2').innerHTML=`Your number is ${userNum}`;
  
    let result="";
        
            if( userNum!==isNaN || userNum<=0 || userNum>100||userNum===" "){
            alert('Please Enter a number 0-100!');
            // input.value="";
            }
            if(guessNUm < userNum){
                tries-=1;
                triesTaken+=1;
                result=`SORRY!! Your guess is higher than the number`;
                input.value="";
            }else if(guessNUm > userNum){
                tries-=1;
                triesTaken+=1;
                result=`SORRY!! Your guess is less than the number`;
               input.innerHTML='';
               input.value="";
            }else {
                tries-=1;
                triesTaken+=1;
                result=`CONGRATS!!! You found the number in ${triesTaken}. times`;
                input.value="";
                play=gameOver;
                src="https://www.icegif.com/wp-content/uploads/icegif-504.gif";
                img=document.createElement('img');
                img.src=src;
                document.body.appendChild(img);
                
                
            }
         
            if(tries === 0 && guessNUm!=userNum){
                alert("So Sorry!!! your game is over");
                input.value="";
                play=gameOver;

            }
        
            document.querySelector('h3').innerHTML=result;
        
        
        
     

    }
   
}//    console.log(result);

document.querySelector('button').addEventListener("click",compareNum);

