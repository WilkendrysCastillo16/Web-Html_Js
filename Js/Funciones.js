const para = document.querySelector('p');
para.addEventListener('click', updateName);
let A=2;
function updateName() {
  let name = prompt('Agregar nombre');
  let para = document.createElement('p');
   para.textContent = 'Player '+A+' :' + name;
   A++;
   document.body.appendChild(para);
}

