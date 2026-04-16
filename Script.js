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
