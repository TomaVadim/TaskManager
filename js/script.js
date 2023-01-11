const del = document.querySelector('.del');
const out = document.querySelector('.out');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
const ul = document.querySelector('ul');

del.addEventListener('click', function() {
  out.style.display = "none";
});

out.addEventListener('click', function() {
  out.classList.add('checked')
})

button.addEventListener('click', function() {
  if (input.value !== '') {
    let newTask = document.createElement('li');
    let del = document.createElement('span');

    newTask.innerHTML = input.value
    del.innerHTML = 'x'
    input.value = ''

    ul.appendChild(newTask).classList.add('out')
    newTask.appendChild(del).classList.add('del')

    del.addEventListener('click', function() {
      newTask.style.display = 'none';
    })

    newTask.addEventListener('click', function() {
      newTask.classList.add('checked')
    })
  }
})
