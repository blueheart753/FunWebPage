const DarkMode = document.querySelector('#Dark');
const Main = document.querySelector('.maincontainer');
const All = document.querySelector('*');
const Score = document.querySelectorAll('.ScoreBorad');
console.log(Score)
function Dark_mode() {
    const checkbox = document.querySelector('#Dark');
    const is_checked = checkbox.checked;
    console.log(is_checked)
    if (is_checked == true) {
        Main.style.backgroundColor = '#333';
        DarkMode.style.backgroundColor = "#eee";
        DarkMode.style.color = "#000";
        All.style.color = "#ddd";
        for(let i = 0; i<Score.length; i++) {
            Score[i].style.backgroundColor = "#fff";
            Score[i].style.color = "#000";
        }
    }
    else {
        Main.style.backgroundColor = '#fff';
        DarkMode.style.color = "#000";
        All.style.color = "#000"
    }
}