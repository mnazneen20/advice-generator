const adviceId = document.querySelector('.idno');
const adviceText = document.querySelector('.advicetext')

window.onload = async () => {
    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();
    console.log(data.slip);
    adviceId.innerText = data.slip.id;
    adviceText.innerText = data.slip.advice;
}

const diceElement = document.querySelector('.dice');

diceElement.addEventListener('click', async()=>{
    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();
    console.log(data.slip);
    adviceId.innerText = data.slip.id;
    adviceText.innerText = data.slip.advice;
})