function changeToChecked(event)
{
    const container = event.currentTarget;
    
   
    const question = container.dataset.questionId;
    const choice = container.dataset.choiceId;
    opacity(question, choice);
    container.classList.add('sfond');
    const image = container.querySelector('.checkbox');
    image.src = './checked.png';
    image.parentNode.classList.remove('opacity');

    takenBoxes[question] = choice;
    let i = 0;
    i = cont();
    if( i === 3){    
        displayPers();  
    }
    //console.log(takenBoxes[question]);
}


function cont(){
    let val=0;
    for(let question in  takenBoxes){
		val++;
	}
	return val;
}


function displayPers()
{
   
    

    
    if(takenBoxes.one !== takenBoxes.two !== takenBoxes.three ){
        for(let name in RESULTS_MAP){
            
            if(takenBoxes.one === name)
            {
                
                const titolo = document.querySelector('.title');
                const content = document.querySelector('.contents');
               // console.log(RESULTS_MAP[name][title]);
                titolo.textContent = RESULTS_MAP[name][title];  
                content.textContent =RESULTS_MAP[name][contents]; 
            }
        }
    }

    if(takenBoxes.one === takenBoxes.two || takenBoxes.one === takenBoxes.three)
        {
            for(let name in RESULTS_MAP){
            
                if(takenBoxes.one === name)
                {
                    
                    const titolo = document.querySelector('.title');
                    const content = document.querySelector('.contents');
                //    console.log(RESULTS_MAP[name][title]);
                    titolo.textContent = RESULTS_MAP[name][title];  
                    content.textContent =RESULTS_MAP[name][contents]; 
                }
            }
        }
        if(takenBoxes.two === takenBoxes.three)
        {
            for(let name in RESULTS_MAP){
            
                if(takenBoxes.two === name)
                {
                    
                    const titolo = document.querySelector('.title');
                    const content = document.querySelector('.contents');
                 //   console.log(RESULTS_MAP[name][title]);
                    titolo.textContent = RESULTS_MAP[name][title];  
                    content.textContent =RESULTS_MAP[name][contents]; 
                }
            }
        }    
for (const box of freeBoxes)
    {
      box.removeEventListener('click', changeToChecked);
    }
  
}





function opacity(question, choice){

    for(const index of freeBoxes)
        if(index.dataset.questionId === question && index.dataset.choiceId !== choice){
            
            if(index.className === 'sfond'){
            index.classList.remove('sfond');
            const ch = index.querySelector('.checkbox');
            ch.src='./unchecked.png';
         
            }
            index.classList.add('opacity');
        }
}




function restartAll(event){

    event.preventDefault();
for(const box of freeBoxes)
{
    if(box.className === 'sfond'){
        box.classList.remove('sfond');
        const image = box.querySelector('.checkbox');
        image.src = './unchecked.png';
       
        
    }

    if(box.className === 'opacity'){
        box.classList.remove('opacity');
        
    }   
    box.addEventListener('click', changeToChecked);
    window.scrollTo({top: 0, behavior: 'smooth'});

}

    delete takenBoxes.one; 
    delete takenBoxes.two;
    delete takenBoxes.three;

    
   

    const titolo = document.querySelector('.title');
    const content = document.querySelector('.contents');
    
    titolo.innerHTML='';
   // console.log(titolo);
    content.innerHTML='';


}







// MAIN

const title = 'title';
const contents = 'contents';

const freeBoxes=[];
const takenBoxes ={};

const boxes = document.querySelectorAll('.choice-grid div');
const ricomincia = document.querySelector('.bottom'); 
ricomincia.addEventListener('click', restartAll);

for(const box of boxes){
    box.addEventListener('click', changeToChecked);
    freeBoxes.push(box); 
}
