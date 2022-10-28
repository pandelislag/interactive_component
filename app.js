//general variables
const answer= document.querySelector('.container-answer');
const choiceElement= document.querySelector('.choice-elements');
const button= document.querySelector('button');
let choices= document.querySelectorAll('.rate-btn');
let spanAnswer='';//for the span tag of the answer
let selected; //each choice activated individually


//remove the main answer container from start 
answer.remove();

//option button value 
choices.forEach ((choice)=>{
   
    choice.addEventListener('click', pick)
    
    //for every choice option activate pick
    function pick(e){
        //for only one button target
        if(selected!== undefined){
            choices[selected - 1].classList.remove("active")
        }
      
      e.target.classList.add("active");
      selected=Number(e.target.innerText)
      
      
        //add the span element
        const span= document.createElement('span');
        span.innerText=`You selected ${choice.textContent} out of 5`
        spanAnswer=span;
        
      spanAnswer.classList.add('.option');
      
       }
      
})
//add the answerContainer
function show(){
    const question= document.querySelector('.container');
    question.remove();
    document.body.append(answer);
    const option=document.querySelector('.option');
   const pick= option.appendChild(spanAnswer);

}

//event Listeners
button.addEventListener('click', show);

