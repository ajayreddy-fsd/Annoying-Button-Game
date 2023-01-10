
let btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
  
  let h = Math.random() * (window.innerHeight) * 0.5;
  let w = Math.random() * (window.innerWidth) * 0.5;

  btn.style.position = 'relative';
  btn.style.top = `${h}px`;
  btn.style.left = `${w}px`;

});


btn.addEventListener('click', function () {
  btn.innerText = "You've WON !!!"
  btn.style.backgroundColor = 'yellow';
  document.body.style.backgroundColor = 'green';
});

