
const body = document.querySelector('body');
const images = ['img1.jpg','img2.jpg'];
const randomImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement('img');
bgImage.src = `res/images/${randomImage}`
document.body.appendChild(bgImage);