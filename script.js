const mainDiv = document.querySelector('#showWord');
const section = document.querySelector('section');
const wordArr = ["red", "pink", "orange", "yellow", "purple", "green", "blue", "brown"]
const input = document.querySelector('input')
const move = document.getElementById('move')
let idx = Math.floor(Math.random() * wordArr.length);
console.log(wordArr[idx])
let winChar = null;

for (let j = 0; j < wordArr[idx].length; j++) {
    mainDiv.innerHTML += `<span>_</span>`
}
let num = wordArr[idx].length + 10
move.innerText = num

const arr = new Array(wordArr[idx].length).fill(false);
input.addEventListener('keyup', (e) => {

    const str = e.target.value.toLowerCase();
    if (str == '') return 
        
    num--
    move.innerText = num;
    const spans = document.querySelectorAll('#showWord span')
    if (num == 0) {
       alert("Game Over"); 
        for (let i = 0; i < wordArr[idx].length; i++) {
            spans[i].innerText = wordArr[idx][i];
        }
        setTimeout(() => {
            location.reload()
        }, 2000);
    }

    for (let j = 0; j < wordArr[idx].length; j++) {
        if (wordArr[idx][j] == str && arr[j] == false) {
            spans[j].innerText = str;
            arr[j] = true;
            input.value = '';
            break;
        }
    }

    const equal = arr.every(val => val == true);
    if (equal == true) {
        alert("win")
        setTimeout(() => {
            location.reload()
        }, 2000);
    }
    setTimeout(() => {
        input.value = ''
    }, 100);
})

