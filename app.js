window.addEventListener('load',()=>
                       {
    const sounds=document.querySelectorAll(".Sounds");
    const pads= document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const barbutton=document.querySelector('.col1');
    const colors=['darkblue','pink','purple','black','darkgreen','#60d394']

    
    let i=0;
    
    console.log(sounds)
    pads.forEach((pads,index)=>{
       
        pads.addEventListener('click', function(){
            sounds[index].currentTime=0;
        sounds[index].play();    
            createbubbles(index);
        });
        
    });
    
    function createbubbles(index){
        console.log('hi')
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation='jump 1s ease';
        bubble.addEventListener('animationend',function(){visual.removeChild(this)})
    };
    
    barbutton.classList.add('buttonON')
});