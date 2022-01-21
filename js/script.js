console.log('hey');

const checkbox = document.getElementById(check);
checkbox.addEventListener('submit', function handleClick(evt) {
  checkbox.classList.add('hidden');
})