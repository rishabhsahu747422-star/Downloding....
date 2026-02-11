var h2 = document.querySelector('h2')
var btn = document.querySelector('button')
var growth = document.querySelector('#growth')
var a = 0

btn.addEventListener('click',function(){
var int =  setInterval(() => {
        a++
        h2.innerHTML = a +'%'
        btn.style.pointerEvents = 'none'
        growth.style.width = a +'%'
    }, 50);
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloded'
    }, 5000);
    
})