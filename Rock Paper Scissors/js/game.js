const GameRSP = document.querySelectorAll('.GameRSP');
const RandomRSP = Math.floor(Math.random()*3);
console.log(GameRSP)
const game = ()=> {
    GameRSP[0].addEventListener(('click'),()=> {
        alert('성공!')
    })
}