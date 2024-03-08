// sider script

const imgs = document.querySelectorAll(".slide_continer ul img");
const  next = document.querySelector('.c_next');
const  preview = document.querySelector('.c_preview');

let n = 0;

function changeSlide(){
    for (let i = 0; i< imgs.length; i++) {
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}
changeSlide();

preview.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
    n=imgs.length -1;
    }
    changeSlide();
})

next.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})




