score=0
cross=true
document.onkeydown=function(e){
    console.log("Key Code is:",e.keyCode)
    if(e.keyCode==32 || e.keyCode==38){
        bike=document.querySelector('.bike')
        bike.classList.add('animateBike')
        setTimeout(()=>{
            bike.classList.remove('animateBike')
        },700)
    }
    if(e.keyCode==39){
        bike=document.querySelector('.bike')
        bikeX=parseInt(window.getComputedStyle(bike,null).getPropertyValue('left'))
        bike.style.left=bikeX+112+"px"        
        setTimeout(()=>{
            bike.classList.remove('animateBike')
        },700)
    }
    if(e.keyCode==37){
        bike=document.querySelector('.bike')
        bikeX=parseInt(window.getComputedStyle(bike,null).getPropertyValue('left'))
        bike.style.left=bikeX-112+"px"
        
        setTimeout(()=>{
            bike.classList.remove('animateBike')
        },700)
    }
}
setInterval(()=>{
    bike=document.querySelector('.bike')
    gameOver=document.querySelector('.gameOver')
    ghost=document.querySelector('.ghost')
    dx=parseInt(window.getComputedStyle(bike,null).getPropertyValue('left'))
    dy=parseInt(window.getComputedStyle(bike,null).getPropertyValue('top'))
    ox=parseInt(window.getComputedStyle(ghost,null).getPropertyValue('left'))
    oy=parseInt(window.getComputedStyle(ghost,null).getPropertyValue('top'))
    offsetX=Math.abs(dx-ox)
    offsetY=Math.abs(dy-oy)
    if(offsetX<73 && offsetY<52){
        gameOver.style.visibility='visible'
        ghost.classList.remove('obstAnim')
    }
    else if(offsetX<145 && cross){
        score+=10
        updateScore(score)
        cross=false
        setTimeout(()=>{
            cross=true
        },1000)
        setTimeout(() => {
            aniDur=parseInt(window.getComputedStyle(ghost,null).getPropertyValue('animation-duration'))
            newDur=aniDur-0.1
            ghost.style.animationDuration=newDur + 's'   
        }, 1000);

    }
},10)
function updateScore(score) {
scoreCount.innerHTML="YOUR SCORE "+score
}