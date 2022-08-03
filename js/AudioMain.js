const buttonAudio = document.querySelector(".js-gup-audio-button");

const miho = document.querySelector('.' + constructorInfo[0].classList),
      saori = document.querySelector('.' + constructorInfo[1].classList),
      hana = document.querySelector('.' + constructorInfo[2].classList),
      yukari = document.querySelector('.' + constructorInfo[3].classList),
      mako = document.querySelector('.' + constructorInfo[4].classList);

const jsSubsMiho = document.querySelector('.' + constructorInfo[0].subsName),
      jsSubsSaori = document.querySelector('.' + constructorInfo[1].subsName),
      jsSubsHana = document.querySelector('.' + constructorInfo[2].subsName),
      jsSubsYukari = document.querySelector('.' + constructorInfo[3].subsName),
      jsSubsMako = document.querySelector('.' + constructorInfo[4].subsName);


const blocks = [miho, saori, hana, yukari, mako];
const names = ['miho', 'saori', 'hana', 'yukari', 'mako'];
const jsSubsText = [jsSubsMiho, jsSubsSaori, jsSubsHana, jsSubsYukari, jsSubsMako];
const id = conductorGirlCharacter;

let girlSubsText = null
let audios = null 
let number = null


function random(min, max) {
    if (min > max || min < 0) return 0
    return Math.floor(Math.random() * (max - min + 1) + min)
}

buttonAudio.addEventListener("click", () => {
    audios?.pause?.()
    
    const index = random(0, id.length -1) 
    const url = 'media' + '/' + `${id[index].wav}` + '.wav';

    audios = new Audio(url); 
    audios.play();

    jsSubsText.forEach(subsGirl => subsGirl.textContent = '');
    girlSubsText?.classList?.remove?.(characterActive[0].active)

    number = names.findIndex(num => num == id[index].name)

    if (names[number]) {
        girlSubsText = blocks[number]
        girlSubsText.classList.add(characterActive[0].active)
        jsSubsText[number].textContent = `${id[index].subsText}`
    }
});