const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

const changeColor = function() {
  h1.style.color = "red";
}

const changeBackgroundColor = function() {
  h1.style.backgroundColor = "green";
}

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBackgroundColor);

// btn.onclick = changeColor;
// btn.onclick = changeBackgroundColor;