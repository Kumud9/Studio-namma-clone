// const menu = document.querySelector('.menu');
// const closeBtn = document.querySelector('.close-btn');
// const hero = document.querySelector('.hero');
// const newSection = document.querySelector('.bod1');
// let isOpen = false;

// menu.addEventListener("mouseover", () => { if (!isOpen) menu.textContent = "OPEN"; });
// menu.addEventListener("mouseout", () => { if (!isOpen) menu.textContent = "MENU"; });

// menu.addEventListener("click", () => {
//   hero.classList.add("movedown");
//   newSection.classList.add("active");
//   isOpen = true;
// });

// closeBtn.addEventListener("click", () => {
//   hero.classList.remove("movedown");
//   newSection.classList.remove("active");
//   menu.textContent = "MENU";
//   isOpen = false;
// });

// console.log("JS loaded, menu el:", document.querySelector('.menu'));


const menuWrapper = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const hero = document.querySelector('.hero');
const newSection = document.querySelector('.bod1');
let isOpen = false;

menuWrapper.innerHTML = `
  <span class="menu-default">MENU</span>
  <span class="menu-hover">OPEN</span>
`;

const menuDefault = document.querySelector('.menu-default');
const menuHover = document.querySelector('.menu-hover');

menuDefault.style.cssText = "display:block; transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);";
menuHover.style.cssText = "display:block; transform: translateY(100%); transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);";

menuWrapper.addEventListener("mouseover", () => {
    if (!isOpen) {
        menuDefault.style.transform = "translateY(-100%) translateX(-100%)";
        menuHover.style.transform = "translateY(-100%)";
    }
});

menuWrapper.addEventListener("mouseout", () => {
    if (!isOpen) {
        menuDefault.style.transform = "translateY(0%) translateX(0%)";
        menuHover.style.transform = "translateY(100%)";
    }
});

menuWrapper.addEventListener("click", () => {
    hero.classList.add("movedown");
    newSection.classList.add("active");
    isOpen = true;
});

closeBtn.addEventListener("click", () => {
    hero.classList.remove("movedown");
    newSection.classList.remove("active");
    menuDefault.style.transform = "translateY(0%)";
    menuHover.style.transform = "translateY(100%)";
    isOpen = false;
});

const topNav = document.querySelector('.top-nav');
menuWrapper.addEventListener("click", () => {
    hero.classList.add("movedown");
    newSection.classList.add("active");
    topNav.style.display = "none"; // ← add this
    isOpen = true;
});


closeBtn.addEventListener("click", () => {
    hero.classList.remove("movedown");
    newSection.classList.remove("active");
    menuDefault.style.transform = "translateY(0%)";
    menuHover.style.transform = "translateY(100%)";
    isOpen = false;

    // Delay matches the 1.5s transition in .bod1
    setTimeout(() => {
        topNav.style.display = "flex";
    }, 1500);
});


const cursor = document.querySelector(".custom-cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.opacity = "1";

});

function animate() {

    // smooth movement
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    // movement difference
    const deltaX = mouseX - currentX;
    const deltaY = mouseY - currentY;

    // rotation
    const rotateY = deltaX * 0.15;
    const rotateX = -deltaY * 0.15;

    // apply movement + 3D rotation
    cursor.style.transform = `
        translate3d(
            ${currentX - 150}px,
            ${currentY - (-80)}px,
            0
        )
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
    `;

    requestAnimationFrame(animate);
}

animate();


const title = document.querySelector(".title");
const images = document.querySelectorAll(".images1 img");

let current = 0;
let interval;

// title.addEventListener("mouseenter", () => {
//     interval = setInterval(() => {
        
// //  images.forEach(img => {img.style.opacity = 0; img.style.transform = "translateY(100px)";});
// if (current === 0) {
//             images.forEach(img => {
//                 img.style.opacity = 0;
//                 img.style.transform = "translateY(100px)";
//             });
//         }

//         images[current].style.opacity = 1;
//         images[current].style.transform = "translateY(0px)"
//         current = (current + 1) % images.length;
//     }, 500);
// });

// title.addEventListener("mouseleave", () => {
//     clearInterval(interval);
//       images.forEach(img => {img.style.opacity = 0;img.style.transform = "translateY(100px)";});
// });

let zCounter = 1;

title.addEventListener("mouseenter", () => {
    interval = setInterval(() => {
        const img = images[current];

        // Snap reset instantly (no transition)+
        img.style.transition = "none";
        img.style.opacity = 0;
        img.style.transform = "translateY(100px)";
        img.style.zIndex = zCounter++;

        // Force browser to register the reset
        img.offsetHeight;

        // Re-enable transition and pop in
        img.style.transition = "opacity 0.2s ease, transform 0.2s ease";
        img.style.opacity = 1;
        img.style.transform = "translateY(0px)";

        current = (current + 1) % images.length;
    }, 300);
});

title.addEventListener("mouseleave", () => {
    clearInterval(interval);
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = "translateY(100px)";
    });
    current = 0;
    zCounter = 1;
});


// images2



const tits = document.querySelector(".title2");
const image = document.querySelectorAll(".images2 img");

let curr = 0;
let inter;


let zCount = 1;

tits.addEventListener("mouseenter", () => {
    inter = setInterval(() => {
        const img = image[curr];

        // Snap reset instantly (no transition)+
        img.style.transition = "none";
        img.style.opacity = 0;
        img.style.transform = "translateY(100px)";
        img.style.zIndex = zCount++;

        // Force browser to register the reset
        img.offsetHeight;

        // Re-enable transition and pop in
        img.style.transition = "opacity 0.2s ease, transform 0.2s ease";
        img.style.opacity = 1;
        img.style.transform = "translateY(0px)";

        curr = (curr + 1) % image.length;
    }, 300);
});

tits.addEventListener("mouseleave", () => {
    clearInterval(inter);
    image.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = "translateY(100px)";
    });
    curr = 0;
    zCount = 1;
});


// const portfolio = document.querySelector('.portfolio');
// const playground = document.querySelector('.port');
// const vi = document.querySelector('.vi');

// // Track on document so it always fires
// document.addEventListener('mousemove', (e) => {
//     const rect = vi.getBoundingClientRect();
//     portfolio.style.left = (e.clientX - rect.left) + 'px';
//     portfolio.style.top = (e.clientY - rect.top) + 'px';
// });

// playground.addEventListener('mouseenter', () => {
//     portfolio.style.opacity = '1';
// });

// playground.addEventListener('mouseleave', () => {
//     portfolio.style.opacity = '0';
// });

const portfolio = document.querySelector('.portfolio');
const playground = document.querySelector('.port h1');
const vi = document.querySelector('.vi'); // ← was missing!

let portMouseX = 0;
let portMouseY = 0;
let portCurrentX = 0;
let portCurrentY = 0;

document.addEventListener('mousemove', (e) => {
    const rect = vi.getBoundingClientRect();
    portMouseX = e.clientX - rect.left;
    portMouseY = e.clientY - rect.top;
});

function animatePortfolio() {
    portCurrentX += (portMouseX - portCurrentX) * 0.08;
    portCurrentY += (portMouseY - portCurrentY) * 0.08;

    portfolio.style.left = portCurrentX + 'px';
    portfolio.style.top = portCurrentY + 'px';

    requestAnimationFrame(animatePortfolio);
}

animatePortfolio();

playground.addEventListener('mouseenter', () => {
   portfolio.style.opacity = '1';
});

playground.addEventListener('mouseleave', () => {
    portfolio.style.opacity = '0';
});



 const boxes = document.querySelectorAll(".boxes");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{ threshold: 0.2 });

boxes.forEach(box=>{
    observer.observe(box);
});



const preloader = document.getElementById("preloader");
const video = document.getElementById("preloader-video");

video.addEventListener("ended", () => {
   preloader.style.opacity = "0";

setTimeout(() => {
    preloader.style.display = "none";
}, 500);
});
const modeBtn= document.getElementById('dark')
let isDark = false;
if (modeBtn) {
    modeBtn.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('dark', isDark);
        modeBtn.textContent = isDark ? 'LIGHT MODE' : 'DARK MODE';
    });
}
