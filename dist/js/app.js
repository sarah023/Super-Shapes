// function to duplicate HMTL elements
const duplicateHtml = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('');
  element.innerHTML = newContent;
};

//Rotating Crosses Animation
duplicateHtml(document.querySelector('#crosses'), 10);
anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

//Circle Animation
anime({
  // css selector
  targets: '#tunnel circle',
  scale: 1.1,
  // alternates it to run from the end back to the beginning
  direction: 'alternate',
  // makes animation loop infinitely
  loop: true,
  duration: 250,
  easing: 'easeInOutSine',
  delay: (el, index) => index * 50
});

//Conveyor belt animation
anime({
  targets: '.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  easing: 'linear',
  autoplay: true
});

//ZigZag Animation
const zigZagPath = document.querySelector('#zigzag path');
//setDashoffset figures out how long our path is
const zigZagOffset = anime.setDashoffset(zigZagPath);
//then we set that back onto our element
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);
anime({
  targets: zigZagPath,
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
  autoplay: true
});

//Wave Animaton
const wavePath = document.querySelector('#wave path');
const waveOffset = anime.setDashoffset(wavePath);
wavePath.setAttribute('stroke-dashoffset', waveOffset);
anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

// Rotating Dots Animation
//using the duplicateHtml function to duplicate dots by 40
duplicateHtml(document.querySelector('#dots'), 40);

const allDots = document.querySelectorAll('#dots .dot');
allDots.forEach(dot => {
  anime({
    targets: dot,
    //gives a random rotation
    rotate: (el, i) => anime.random(90, 360),
    //gives a random duration
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });
});

//Flashing Circles Animation
duplicateHtml(document.querySelector('#circles'), 20);

anime({
  targets: '#circles .dot',
  //when an array is used, it runs through a property in order
  scale: [0, 1.2],
  delay: (el, i) => i * 100,
  duration: 250,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
});

// Flashing Rectangles Animation
anime({
  targets: '#flashes .flash',
  //colors put into an array and then grab each one by it's index
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  //applys a random delay to each one
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

// Rotating Squares Animation
anime({
  targets: '#squares rect',
  //translate needs to be forced to center the squares(not actually animating them)
  translateX: ['-50%', '-50%'],
  translateY: ['-50%', '-50%'],
  //animate rotation from 45 to 0 to -45
  rotate: [45, 0, -45],
  delay: (el, i) => 100 * i,
  duration: 750,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});
