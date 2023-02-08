let moon = document.querySelector('.moon');
let fortress = document.getElementById('fortress');
let mountain = document.getElementById('mountain');
let mountain2 = document.getElementById('mountain-2');
let title = document.getElementById('title');
let btn = document.querySelector('button');
let part1 = document.querySelector('.part1');
let section = document.querySelector('.section');
let sun = document.getElementById('nar')
let dragon = document.getElementById('dragon');
let rapunzel = document.getElementById('rapunzel');
let tolgod = document.getElementById('tolgod');

let prince = document.getElementById('prince');
let princess = document.getElementById('princess');
let mountain3 = document.getElementById('mountain3');

let prince3 = document.getElementById('prince3') 
let princessAndPrince = document.getElementById('princeAndPrincess')

let both = document.getElementById('both');
let castle = document.getElementById('castle')
let png = document.getElementById('png');



// let play = document.getElementById('play');

// function playMusic(){
//     let audio = new Audio("audio.mp3");
//     audio.play();
//     play.innerHTML = 'Stop';
    
// }
let audio = document.getElementById('audio');
let playPuaseBtn = document.getElementById('playPauseBtn');
let count = 0;
 
function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPuaseBtn.innerHTML ='Pause &#9208'
    }else{
        count = 0;
        audio.pause();
        playPuaseBtn.innerHTML ='play &#9658'
    }
}
// function stop(){
//     playPause()
//     audio.pause();
//     audio.currentTime = 0;
//     playPuaseBtn.innerHTML ='Pause &#9658'
// }
// play.addEventListener('click', playMusic)

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    moon.style.top = value * 1.05 + 'px';
    fortress.style.left = value * 0.25 + 'px';
    title.style.top = value * 0.5 + 'px';
    mountain.style.right = value *1 +'px';
    sun.style.bottom = (value-1000)*0.45 +'px';
    prince.style.right = (value-2000) * 0.5 + 'px';
    // princess.style.bottom = (value-1700)*0.1 + 'px';
    // mountain3.style.bottom = (value-4400)*0.05+ 'px';
    rapunzel.style.bottom = (value-1700)*0.4+ 'px';
    tolgod.style.right =(value-2260) * 0.1 + 'px';
    prince3.style.right =  (value-2600) *0.3+'px';
    princessAndPrince.style.right =  (value-3000) *0.4+'px';
    both.style.bottom =  (value-4900) *0.4+'px';
    castle.style.bottom = (value-4300) *0.3+'px';
    png.style.right = (value-4060) * 0.1 + 'px';
    // if(body ==  this.window){
    if(window.innerHeight <= value){
       moon.classList.add('hidden')
       moon.style.display = 'none'
       console.log('moon')
    }else{
        console.log('sun')
    }
});


function stars(){
    let count = 500;
    let body = document.querySelector('body');
    let i = 0;
    while(i< count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);
        let duration = Math.random()* 10;
        let size = Math.random()*2;
        star.style.left = x + 'px'
        star.style.top = y + 'px'
        star.style.width = 1 + size + 'px'
        star.style.height = 1+ size + 'px'
        star.style.animationDuration = 5+ duration + 's'
        star.style.animationDelay = duration + 's'
        body.appendChild(star);
        i++
    }
}
stars()
let scrollBtn = document.getElementById('scroll');
scrollBtn.addEventListener('click', ()=>{
    window.scrollBy(0, document.body.scrollHeight);

    
})



let input = document.getElementById('input');
let sub = document.getElementById('sub');


class books {
    constructor(input){
        this.input = input
    }
}

arr=[];

function saveLocal(arg){
    arr.push(arg);

    if(localStorage.getItem('books') == null){
        localStorage.setItem('books', JSON.stringify(arr));
    }else{
        let arr2 = JSON.parse(localStorage.getItem('books'))
        arr2.push(arg)
        localStorage.setItem('books', JSON.stringify(arr2))
    }
}

sub.addEventListener('click', ()=>{
    let book = new books (input.value);
    saveLocal(book);

    window.location.href = 'index.html';
});
// let autoScrollBtn = document.getElementById('scroll');

// autoScrollBtn.addEventListener('click', ()=>{
//     setTimeout(autoScroll, 1000)
 
// });
// function autoScroll(){
//     window.scrollBy(0, document.body.scrollHeight);
// }

// window.addEventListener('scroll', ()=>{
//     let value = window.scrollY;
    
// })