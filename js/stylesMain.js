const menuPaint = document.querySelector('.' + constructorControlsMenu[0].class),
      menuEmblem = document.querySelector('.' + constructorControlsMenu[1].class),
      menuInscription = document.querySelector('.' + constructorControlsMenu[2].class);

const listPaint = document.querySelector('.' + conductorControlsItem[0].class),
      listEmblem = document.querySelector('.' + conductorControlsItem[1].class),
      listInscription = document.querySelector('.' + conductorControlsItem[2].class);

const menu = [menuPaint, menuEmblem, menuInscription];
const list = [listPaint, listEmblem, listInscription];

menu[0].addEventListener("click", () => {
    menu.forEach(menu => menu?.classList?.remove?.(conductorActive[1].menuActive))
    list.forEach(list => list?.classList?.remove?.(conductorActive[1].listActive))

    menu[0].classList.add(conductorActive[1].menuActive);
    list[0].classList.add(conductorActive[1].listActive);
});

menu[1].addEventListener("click", () => {
    menu.forEach(menu => menu?.classList?.remove?.(conductorActive[1].menuActive))
    list.forEach(list => list?.classList?.remove?.(conductorActive[1].listActive))

    menu[1].classList.add(conductorActive[1].menuActive);
    list[1].classList.add(conductorActive[1].listActive);
});

menu[2].addEventListener("click", () => {
    menu.forEach(menu => menu?.classList?.remove?.(conductorActive[1].menuActive))
    list.forEach(list => list?.classList?.remove?.(conductorActive[1].listActive))

    menu[2].classList.add(conductorActive[1].menuActive);
    list[2].classList.add(conductorActive[1].listActive);
});


const paleBrown = document.querySelector('.' + conductorControlsItemPaint[0].class),
      sand = document.querySelector('.' + conductorControlsItemPaint[1].class),
      charcoal = document.querySelector('.' + conductorControlsItemPaint[2].class),
      swamp = document.querySelector('.' + conductorControlsItemPaint[3].class),
      olive = document.querySelector('.' + conductorControlsItemPaint[4].class);

const tankPaleBrown = document.querySelector('.' + stylesTank[12].classPaint),
      tankSand = document.querySelector('.' + stylesTank[13].classPaint),
      tankCharcoal = document.querySelector('.' + stylesTank[14].classPaint),
      tankSwamp = document.querySelector('.' + stylesTank[15].classPaint),
      tankOlive = document.querySelector('.' + stylesTank[16].classPaint);

const color = [paleBrown, sand, charcoal, swamp, olive];
const tankColor = [tankPaleBrown, tankSand, tankCharcoal, tankSwamp, tankOlive];

color[0].addEventListener("click", () => {
    color.forEach(paint => paint?.classList?.remove?.(conductorActive[0].active))
    tankColor.forEach(paint => paint?.classList?.remove?.(conductorActive[0].tankActive))

    color[0].classList.add(conductorActive[0].active);
    tankColor[0].classList.add(conductorActive[0].tankActive);
});

color[1].addEventListener("click", () => {
    color.forEach(paint => paint?.classList?.remove?.(conductorActive[0].active))
    tankColor.forEach(paint => paint?.classList?.remove?.(conductorActive[0].tankActive))

    color[1].classList.add(conductorActive[0].active);
    tankColor[1].classList.add(conductorActive[0].tankActive);
});

color[2].addEventListener("click", () => {
    color.forEach(paint => paint?.classList?.remove?.(conductorActive[0].active))
    tankColor.forEach(paint => paint?.classList?.remove?.(conductorActive[0].tankActive))

    color[2].classList.add(conductorActive[0].active);
    tankColor[2].classList.add(conductorActive[0].tankActive);
});

color[3].addEventListener("click", () => {
    color.forEach(paint => paint?.classList?.remove?.(conductorActive[0].active))
    tankColor.forEach(paint => paint?.classList?.remove?.(conductorActive[0].tankActive))

    color[3].classList.add(conductorActive[0].active);
    tankColor[3].classList.add(conductorActive[0].tankActive);
});

color[4].addEventListener("click", () => {
    color.forEach(paint => paint?.classList?.remove?.(conductorActive[0].active))
    tankColor.forEach(paint => paint?.classList?.remove?.(conductorActive[0].tankActive))

    color[4].classList.add(conductorActive[0].active);
    tankColor[4].classList.add(conductorActive[0].tankActive);
});


const anglerfish = document.querySelector('.' + conductorControlsItemEmblem[0].class),
      turtle = document.querySelector('.' + conductorControlsItemEmblem[1].class),
      hippopotamus = document.querySelector('.' + conductorControlsItemEmblem[2].class),
      rabbit = document.querySelector('.' + conductorControlsItemEmblem[3].class),
      duck = document.querySelector('.' + conductorControlsItemEmblem[4].class),
      bearBoko = document.querySelector('.' + conductorControlsItemEmblem[5].class);

const tankAnglerfish = document.querySelector('.' + stylesTank[0].classEmblem),
      tankTurtle = document.querySelector('.' + stylesTank[1].classEmblem),
      tankHippopotamus = document.querySelector('.' + stylesTank[2].classEmblem),
      tankRabbit = document.querySelector('.' + stylesTank[3].classEmblem),
      tankDuck = document.querySelector('.' + stylesTank[4].classEmblem),
      tankBearBoko = document.querySelector('.' + stylesTank[5].classEmblem);

const emblem = [anglerfish, turtle, hippopotamus, rabbit, duck, bearBoko];
const tankEmblem = [tankAnglerfish, tankTurtle, tankHippopotamus, tankRabbit, tankDuck, tankBearBoko];

emblem[0].addEventListener("click", () => {
    emblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].active))
    tankEmblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].tankActive))

    emblem[0].classList.add(conductorActive[0].active);
    tankEmblem[0].classList.add(conductorActive[0].tankActive);
});

emblem[1].addEventListener("click", () => {
    emblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].active))
    tankEmblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].tankActive))

    emblem[1].classList.add(conductorActive[0].active);
    tankEmblem[1].classList.add(conductorActive[0].tankActive);
});

emblem[2].addEventListener("click", () => {
    emblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].active))
    tankEmblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].tankActive))

    emblem[2].classList.add(conductorActive[0].active);
    tankEmblem[2].classList.add(conductorActive[0].tankActive);
});

emblem[3].addEventListener("click", () => {
    emblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].active))
    tankEmblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].tankActive))

    emblem[3].classList.add(conductorActive[0].active);
    tankEmblem[3].classList.add(conductorActive[0].tankActive);
});

emblem[4].addEventListener("click", () => {
    emblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].active))
    tankEmblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].tankActive))

    emblem[4].classList.add(conductorActive[0].active);
    tankEmblem[4].classList.add(conductorActive[0].tankActive);
});

emblem[5].addEventListener("click", () => {
    emblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].active))
    tankEmblem.forEach(emblem => emblem?.classList?.remove?.(conductorActive[0].tankActive))

    emblem[5].classList.add(conductorActive[0].active);
    tankEmblem[5].classList.add(conductorActive[0].tankActive);
});


const unit = document.querySelector('.' + conductorControlsItemInscription[0].class),
      four = document.querySelector('.' + conductorControlsItemInscription[1].class),
      six = document.querySelector('.' + conductorControlsItemInscription[2].class),
      seven = document.querySelector('.' + conductorControlsItemInscription[3].class),
      eight = document.querySelector('.' + conductorControlsItemInscription[4].class),
      panzerVor = document.querySelector('.' + conductorControlsItemInscription[5].class);

const tankUnit = document.querySelector('.' + stylesTank[6].classInscription),
      tankFour = document.querySelector('.' + stylesTank[7].classInscription),
      tankSix = document.querySelector('.' + stylesTank[8].classInscription),
      tankSeven = document.querySelector('.' + stylesTank[9].classInscription),
      tankEight = document.querySelector('.' + stylesTank[10].classInscription),
      tankPanzerVor = document.querySelector('.' + stylesTank[11].classInscription);

const inscription = [unit, four, six, seven, eight, panzerVor];
const tankInscription = [tankUnit, tankFour, tankSix, tankSeven, tankEight, tankPanzerVor];

inscription[0].addEventListener("click", () => {
    inscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].active))
    tankInscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].tankActive))

    inscription[0].classList.add(conductorActive[0].active);
    tankInscription[0].classList.add(conductorActive[0].tankActive);
});

inscription[1].addEventListener("click", () => {
    inscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].active))
    tankInscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].tankActive))

    inscription[1].classList.add(conductorActive[0].active);
    tankInscription[1].classList.add(conductorActive[0].tankActive);
});

inscription[2].addEventListener("click", () => {
    inscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].active))
    tankInscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].tankActive))

    inscription[2].classList.add(conductorActive[0].active);
    tankInscription[2].classList.add(conductorActive[0].tankActive);
});

inscription[3].addEventListener("click", () => {
    inscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].active))
    tankInscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].tankActive))

    inscription[3].classList.add(conductorActive[0].active);
    tankInscription[3].classList.add(conductorActive[0].tankActive);
});

inscription[4].addEventListener("click", () => {
    inscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].active))
    tankInscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].tankActive))

    inscription[4].classList.add(conductorActive[0].active);
    tankInscription[4].classList.add(conductorActive[0].tankActive);
});

inscription[5].addEventListener("click", () => {
    inscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].active))
    tankInscription.forEach(inscription => inscription?.classList?.remove?.(conductorActive[0].tankActive))

    inscription[5].classList.add(conductorActive[0].active);
    tankInscription[5].classList.add(conductorActive[0].tankActive);
});
