let el=document.querySelectorAll('.d1')
let turn=0;
let cmp=0;
let usr=0;
el.forEach(element => {
    element.addEventListener('click',()=>{
        
        if (element==el[0]){
            if (turn==0){
                console.log('draw')
                document.querySelector('.rslt').style.backgroundColor= 'pink';
                document.querySelector('.rslt').innerHTML=(`draw from ${el[turn].innerText}`);

            }
            else if(turn==1){
                document.querySelector('.rslt').style.backgroundColor='red';
                console.log('you loose')
                document.querySelector('.rslt').innerHTML=(`loose from ${el[turn].innerText}`);
                cmp+=1;
                document.querySelector('.c').innerText=cmp;
                // document.querySelector('.rslt').innerHTML
            }
            else{
                console.log('you win'); 
                document.querySelector('.rslt').style.backgroundColor='green';   
                document.querySelector('.rslt').innerHTML=(`win from ${el[turn].innerText}`);
                usr+=1;
                document.querySelector('.u').innerText=usr;
            }
            turn+=1;
            if(turn>2){
                turn=0;
            }
            
        }
        else if (element==el[1]){
            if (turn==0){
                console.log('win')
                document.querySelector('.rslt').style.backgroundColor='green';
                document.querySelector('.rslt').innerHTML=(`win from ${el[turn].innerText}`);
                usr+=1;
                document.querySelector('.u').innerText=usr;
            }
            else if(turn==1){
                console.log('draw')
                document.querySelector('.rslt').style.backgroundColor= 'pink';
                document.querySelector('.rslt').innerHTML=(`draw from ${el[turn].innerText}`);
            }
            else{
                console.log('loss');
                document.querySelector('.rslt').style.backgroundColor='red';
                document.querySelector('.rslt').innerHTML=(`loss from ${el[turn].innerText}`);
                cmp+=1;
                document.querySelector('.c').innerText=cmp;
            }
           
            turn+=1;
            if(turn>2){
                turn=0;
        }
            }
            
        else if(element==el[2]){
            if (turn==0){
                console.log('loose')
                document.querySelector('.rslt').style.backgroundColor='red';
                document.querySelector('.rslt').innerHTML=(`loose from ${el[turn].innerText}`);
                cmp+=1;
                document.querySelector('.c').innerText=cmp;
            }
            else if(turn==1){
               console.log('win')
               document.querySelector('.rslt').style.backgroundColor='green';
               document.querySelector('.rslt').innerHTML=(`win from ${el[turn].innerText}`);
               usr+=1;
                document.querySelector('.u').innerText=usr;
            }
            else{
                document.querySelector('.rslt').style.backgroundColor= 'pink';
                console.log('draw');
                document.querySelector('.rslt').innerHTML=(`draw from ${el[turn].innerText}`);
            }
            turn+=1; 
            if(turn>2){
                turn=0;
            }
        }
        
        
    })  
    
    })
