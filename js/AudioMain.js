// const buttonAudio = document.querySelector(".js-gup-audio-button");

// const miho = document.querySelector(".gup-audio-girl-miho");
// const saori = document.querySelector(".gup-audio-girl-saori");
// const mako = document.querySelector(".gup-audio-girl-mako");
// const hana = document.querySelector(".gup-audio-girl-hana");
// const yukari = document.querySelector(".gup-audio-girl-yukari");

// const blocks = [saori, miho, mako, hana, yukari]
// const names = ['start_battle_02.d25645'];
// let active = null
// let audio = null 


// function randint(min, max) {
//     if (min > max || min < 0) return 0
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }


// buttonAudio.addEventListener("click", () => {
//     audio?.stop?.()
//     const index = randint(0, names.length -1) 
//     const url = 'media' + '/' + `${names[index]}` + '.wav';

//     audio = new Audio(url); 
//     audio.play();

//     const blockIndex = randint(0, blocks.length -1) 
//     active?.classList?.remove?.('gup-audio_girl__active')

//     const target = blocks[blockIndex]
//     target.classList.add('gup-audio_girl__active')

//     active = target

//     console.log(index, audio)
// });