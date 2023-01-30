const cube = document.getElementById("cube");
let rotationX = 0;
let rotationY = 0;
let rotationSpeed = 1;

function rotate() {
  rotationX += rotationSpeed;
  rotationY += rotationSpeed;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  requestAnimationFrame(rotate);
}

rotate();
