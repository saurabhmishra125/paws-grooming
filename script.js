let img=document.querySelectorAll(".slide");

img.forEach(
    (img,index) =>{
        img.style.left = `${index*100}%`;
      
    }
)
let i=0;
function move(){
    if(i>=img.length){
        i=0
        for(j=0; j<img.length;j++){
            img[j].style.transform= `translateX(${i*100}%)`;
        }
    }
    img[i].style.transform= `translateX(-${i*100}%)`;
    i++;
    
}
setInterval(move, 2000);
 let question=document.querySelectorAll(".q");
 let icon=document.querySelectorAll("i");
 let ans=document.querySelectorAll(".ans");
 
 for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click',()=>{
        if (ans[i].style.display === 'none') {
            ans[i].style.display='block';
            icon[i].classList.remove('fa-chevron-up');
            icon[i].classList.add('fa-chevron-down');
        }
         else{
            ans[i].style.display='none';
            icon[i].classList.remove('fa-chevron-down');
            icon[i].classList.add('fa-chevron-up');
            
         }
    })
   
    
 }
