const DarkMode = document.querySelector('#Dark');
const Main = document.querySelector('.maincontainer');
const All = document.querySelector('*');
function Dark_mode() {
    const checkbox = document.querySelector('#Dark');
    const is_checked = checkbox.checked;
    console.log(is_checked)
    if (is_checked == true) {
        Main.style.backgroundColor = '#333';
        DarkMode.style.backgroundColor = "#eee";
        DarkMode.style.color = "#000";
        All.style.color = "#ddd"
    }
    else {
        Main.style.backgroundColor = '#fff';
        DarkMode.style.color = "#000";
        All.style.color = "#000"
    }
}