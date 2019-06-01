let carts = document.querySelectorAll('.cart');
let users = document.querySelector('.users');
let memory = document.querySelector('.memory');
let speed = document.querySelector('.speed');

for (let i = 0; i < carts.length; i++) {
  const element = carts[i];
  element.addEventListener('mousemove', function() {
    let usersValue = element.getAttribute("data-users");
    let speedValue = element.getAttribute("data-speed");
    let memoryValue = element.getAttribute("data-memory");
    users.style.width = usersValue;
    speed.style.width = speedValue;
    memory.style.width = memoryValue;
  });
}