var loveMe = document.querySelector('.loveMe')
var times = document.querySelector('#times')


let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
   if(clickTime === 0){
       clickTime = new Date().getTime()
       console.log(clickTime)
   }
   else{
       if((new Date().getTime() - clickTime) < 800){
           createHeart(e)
           clickTime = 0
       }
       else{
           clickTime = new Date().getTime()
       }
   }
})


var createHeart = (e) => {
    var heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    var x = e.clientX
    var y = e.clientY

    var leftOffset = e.target.offsetLeft
    var topOffset = e.target.offsetTop

    var xInside = x - leftOffset
    var yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)
   
    times.innerHTML = ++timesClicked
}