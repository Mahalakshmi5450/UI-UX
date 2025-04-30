// Script that makes buttons navigate to next screen

gsap.registerPlugin(ScrollTrigger);

let current = 1;
let path = "";

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function nextScreen() {
  if (current === 2) {
    if (path === "A") showScreen("screen3A");
    else if (path === "B") showScreen("screen3B");
    current = 3;
  } else if (current === 3) {
    if (path === "A") showScreen("screen4A");
    else if (path === "B") showScreen("screen4B");
    current = 4;
  } else {
    current++;
    showScreen(`screen${current}`);
  }
}

function choosePath(p) {
  path = p;
  nextScreen();
}

// ---------------------------------------------------------
// Simple ScrollTrigger on screen4B

// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);
//   ScrollTrigger.create({
//     trigger: ".scroll-trigger",
//     start: "top center",
//     onEnter: () => {
//       document.querySelector(".scroll-trigger").style.background = "red";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);
//   ScrollTrigger.create({
//     trigger: ".scroll-trigger",
//     start: "top center",
//     function: chooseColor() {
//       let dropdown = document.getElementById('dropdown4B');
//       rec1.style.color = dropdown.value;
//     }
//   });
// });

// gsap.from("#p2", {
//   x: 1500,
//   duration: 1,
//   scrollTrigger: {
//       trigger: " ",
//       start: "top top",
//       // markers: true,
//       toggleActions: "play pause resume reset"
//   }
// });

// 4B
let dropdown = document.getElementById('dropdown4B');
let rec1 = document.getElementById('rec1');

function chooseColor() {
  rec1.style.backgroundColor = dropdown.value;
  console.log(dropdown.value);
}

let unicorn = document.getElementById('unicorn');
let clouds = document.getElementById('clouds');
let glitter = document.getElementById('glitter');

let rec1Height = rec1.offsetHeight;

function chooseColor() {
  rec1.style.backgroundColor = dropdown.value;
  console.log(dropdown.value);
}

function handleScroll() {
  let scrollPosition = window.scrollY + rec1.getBoundingClientRect().top;

  // Move clouds from left to right
  if (scrollPosition > 0) {
    clouds.style.animationPlayState = 'running';
  }

  // Make unicorn appear and fly
  if (scrollPosition > rec1Height / 2) {
    unicorn.style.display = 'block';
    unicorn.style.animationPlayState = 'running';
  }

  

  // Trigger glitter effect when unicorn reaches the center
  // if (scrollPosition > rec1Height) {
  //   glitter.style.display = 'block';
  //   glitter.style.animationPlayState = 'running';
  // }

  let glitterContainer = document.getElementById('glitter-container');

  function triggerGlitterParticles() {
  // Clear old glitter
  glitterContainer.innerHTML = '';

  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('glitter-particle');

    // Random horizontal position
    sparkle.style.left = Math.random() * 100 + '%';

    // Optional: stagger animation
    sparkle.style.animationDelay = Math.random() + 's';

    glitterContainer.appendChild(sparkle);
  }
}
  if (offset < 50 && glitterContainer.childElementCount === 0) {
    triggerGlitterParticles();
  }
}



// 6

// Get elements
// const draggableImages = document.querySelectorAll('.draggable');
// const earthContainer = document.getElementById('earth-container');
// const evaluationOutput = document.getElementById('evaluation-output');
// let droppedValues = [];

// // Make images draggable
// draggableImages.forEach(image => {
//   image.addEventListener('dragstart', (e) => {
//     e.dataTransfer.setData('value', e.target.dataset.value);
//   });
// });

// // Allow the earth container to accept drops
// earthContainer.addEventListener('dragover', (e) => {
//   e.preventDefault(); // Allow the drop
// });

// // Handle drop event
// earthContainer.addEventListener('drop', (e) => {
//   e.preventDefault();
//   const value = e.dataTransfer.getData('value');
//   droppedValues.push(parseInt(value)); // Add the dropped image value

//   updateEvaluation();
// });

// // Function to calculate the average and evaluate the world type
// function updateEvaluation() {
//   const total = droppedValues.reduce((sum, value) => sum + value, 0);
//   const average = total / droppedValues.length;

//   // Display evaluation based on average
//   if (average > 0) {
//     evaluationOutput.textContent = 'You are building a Positive World!';
//   } else if (average < 0) {
//     evaluationOutput.textContent = 'You are building a Negative World!';
//   } else {
//     evaluationOutput.textContent = 'You are building a Neutral World!';
//   }
// }



// <!-- Drag and Drop Logic -->
    
      // Enable drag functionality
      document.querySelectorAll('.draggable').forEach(img => {
        img.setAttribute('draggable', true);
        img.addEventListener('dragstart', e => {
          e.dataTransfer.setData('text/plain', e.target.dataset.value);
          e.dataTransfer.setData('text/id', e.target.src);
        });
      });
    
      const earthContainer = document.getElementById('earth-container');
      const output = document.getElementById('evaluation-output');
      let values = [];
    
      earthContainer.addEventListener('dragover', e => e.preventDefault());
    
      earthContainer.addEventListener('drop', e => {
        e.preventDefault();
        const value = parseInt(e.dataTransfer.getData('text/plain'));
        const src = e.dataTransfer.getData('text/id');
    
        // Prevent duplicates
        if (!values.some(item => item.src === src)) {
          values.push({ value, src });
    
          const img = document.createElement('img');
          img.src = src;
          img.classList.add('dropped');
          img.style.width = '60px';
          img.style.margin = '5px';
          earthContainer.appendChild(img);
    
          evaluateWorld();
        }
      });
    
      function evaluateWorld() {
        if (values.length === 0) {
          output.textContent = 'Analyzing...';
          return;
        }
    
        const avg = values.reduce((acc, item) => acc + item.value, 0) / values.length;
    
        if (avg > 0.3) {
          output.textContent = "You're creating a good world ";
        } else if (avg < -0.3) {
          output.textContent = "You're creating a negative world ";
        } else {
          output.textContent = "You're creating a neutral world ";
        }
      }
   











// html script 

// Script that makes buttons navigate to next screen

//rd 3a and 4a

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  // Trigger the ad invasion effect when screen4A is shown
  if (id === "screen4A") {
    const ads = document.querySelectorAll("#screen4A .popup-ad");

    ads.forEach((ad, i) => {
      const randX = Math.floor(Math.random() * 80);
      const randY = Math.floor(Math.random() * 70);
      ad.style.left = `${randX}%`;
      ad.style.top = `${randY}%`;
      ad.style.zIndex = 10 + i;

      setTimeout(() => {
        ad.classList.add("active");
      }, i * 500); // stagger each ad appearance
    });
  }
}

function nextScreen() {
  if (current === 2) {
    if (path === "A") showScreen("screen3A");
    else if (path === "B") showScreen("screen3B");
    current = 3;
  } else if (current === 3) {
    if (path === "A") showScreen("screen4A");
    else if (path === "B") showScreen("screen4B");
    current = 4;
  } else {
    current++;
    showScreen(`screen${current}`);
  }
}

function choosePath(p) {
  path = p;
  nextScreen();
}

// ---------------------------------------------------------
// Simple ScrollTrigger on screen4B

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: ".scroll-trigger",
    start: "top center",
    onEnter: () => {
      document.querySelector(".scroll-trigger").style.background = "white";
    }
  });

  // Change background color based on slider
  document.getElementById("slider3A").addEventListener("input", function () {
    const val = this.value;
    const color = `hsl(${val}, 70%, 30%)`;
    document.getElementById("screen3A").style.transition = "background-color 0.3s ease";
    document.getElementById("screen3A").style.backgroundColor = color;
  });

  // Dropdown interaction
  document.getElementById("dropdown3A").addEventListener("change", function () {
    const selected = this.value;

    document.querySelectorAll("#screen3A img").forEach(img => {
      img.classList.remove("selected");
    });

    if (selected.startsWith("n")) {
      const selectedImg = document.getElementById(selected);
      if (selectedImg) selectedImg.classList.add("selected");
    }
  });
});

// Optional image dismiss (if intended as a global click-to-close)
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    img.style.display = "none";
  });
});

if (id === "screen4A") {
  const ads = document.querySelectorAll("#screen4A .popup-ad");

  ads.forEach((ad, i) => {
    const randX = Math.floor(Math.random() * 80);
    const randY = Math.floor(Math.random() * 70);
    ad.style.left = `${randX}%`;
    ad.style.top = `${randY}%`;
    ad.style.zIndex = 10 + i;

    setTimeout(() => {
      ad.classList.add("active");
      ad.classList.add("glitchy"); // 🎉 Glitch added here
    }, i * 500);
  });
}

if (id === "screen4A") {
  const ads = document.querySelectorAll("#screen4A .popup-ad");
  const screen = document.getElementById("screen4A");

  // Get bounding boxes of protected elements
  const headerBox = screen.querySelector("h2").getBoundingClientRect();
  const buttonBox = screen.querySelector("button").getBoundingClientRect();

  // Get screen container dimensions
  const screenBox = screen.getBoundingClientRect();

  ads.forEach((ad, i) => {
    const adWidth = 100; // Estimate or get real size
    const adHeight = 100;

    let randX, randY, adBox;

    let attempts = 0;
    do {
      randX = Math.floor(Math.random() * (screenBox.width - adWidth));
      randY = Math.floor(Math.random() * (screenBox.height - adHeight));

      adBox = {
        left: randX,
        right: randX + adWidth,
        top: randY,
        bottom: randY + adHeight
      };

      attempts++;
      if (attempts > 20) break; // fail-safe
    } while (
      isOverlapping(adBox, headerBox) ||
      isOverlapping(adBox, buttonBox)
    );

    ad.style.position = "absolute";
    ad.style.left = `${randX}px`;
    ad.style.top = `${randY}px`;
    ad.style.zIndex = 10 + i;

    setTimeout(() => {
      ad.classList.add("active", "glitchy");
    }, i * 500);
  });

  function isOverlapping(boxA, boxB) {
    return !(
      boxA.right < boxB.left ||
      boxA.left > boxB.right ||
      boxA.bottom < boxB.top ||
      boxA.top > boxB.bottom
    );
  }
}

