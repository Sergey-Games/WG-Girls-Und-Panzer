const gupCharacters = document.querySelector(".gup-characters");


const createCharacters = (dataCharacters) => {
    const character = document.createElement('div');
    character.classList.add('gup-audio_girl', dataCharacters.classList)

    character.innerHTML = `
        <div class="gup-audio_name">${dataCharacters.name}</div>
        <img src="${dataCharacters.girlPic}" alt="" class="gup-audio_girl-pic" />
        <div class="gup-audio-tootlip">
            <div class="gup-audio-tootlip_top">
                <img src="${dataCharacters.tootlipAvatar}" alt="" class="gup-audio-tootlip_avatar" />
                <div class="gup-audio-tootlip_right">
                    <div class="gup-audio-tootlip_name">${dataCharacters.tootlipName}</div>
                    <div class="gup-audio-tootlip_type">${dataCharacters.tootlipType}</div>
                </div>
            </div>
            <div class="gup-audio-tootlip_text">${dataCharacters.tootlipText}</div>
        </div>
        <div class="gup-audio-subs gup-audio-subs__left">
            <div class="gup-audio-subs_text"></div>
        </div>
    `;

    return character
}

const createListCharacters = (wrapper, listCharacters) => {
    wrapper.textContent = '';
    listCharacters.forEach(item => wrapper.append(createCharacters(item)))
};


createListCharacters(gupCharacters, constructorInfo);

const jsGupStylesTank = document.querySelector(".js-gup-styles_tank");


const createStylesTank = (dataStylesTank) => {
    const stylesTank = document.createElement('img')
    stylesTank.setAttribute('src', `${dataStylesTank.imgEmblem || dataStylesTank.imgInscription || dataStylesTank.imgPaint}`);
    stylesTank.classList.add(`${dataStylesTank.classEmblem || dataStylesTank.classInscription || dataStylesTank.classPaint}`, `${dataStylesTank.class}`, `${dataStylesTank.noPrint || dataStylesTank.print}`, `${dataStylesTank.noActive || dataStylesTank.active}`)

    return stylesTank
}

const createListStylesTank = (wrapper, listStylesTank) => {
    wrapper.textContent = '';
    listStylesTank.forEach(item => wrapper.append(createStylesTank(item)))
};


createListStylesTank(jsGupStylesTank, stylesTank);

const jsGupControlsMenu = document.querySelector(".js-gup-controls_menu");


const createControlsMenu = (dataControlsMenu) => {
    const controlsMenu = document.createElement('div')
    controlsMenu.classList.add("gup-styles-controls_menu-item", `${dataControlsMenu.class}`, `${dataControlsMenu.noActive || dataControlsMenu.active}`)

    controlsMenu.innerHTML = `
            <img src="${dataControlsMenu.img}" alt="">
            <div class="gup-styles-controls_menu-title">${dataControlsMenu.name}</div>
    `;

    return controlsMenu
}

const createListControlsMenu = (wrapper, listControlsMenu) => {
    wrapper.textContent = '';
    listControlsMenu.forEach(item => wrapper.append(createControlsMenu(item)))
};


createListControlsMenu(jsGupControlsMenu, constructorControlsMenu);

const jsGuStylesControlsContainer = document.querySelector(".js-gup-styles-controls_container");


const createControlsItem = (dataControlsItem) => {
    const controlsItem = document.createElement('div')
    controlsItem.classList.add('gup-styles-controls_item', `${dataControlsItem.class}`, `${dataControlsItem.noActive || dataControlsItem.active}`)
    
    return controlsItem
}

const createListControlsItem = (wrapper, listControlsItem) => {
    wrapper.textContent = '';
    listControlsItem.forEach(item => wrapper.append(createControlsItem(item)))
};


createListControlsItem(jsGuStylesControlsContainer, conductorControlsItem);

const jsGuStylesControlsItemPaint = document.querySelector(".gup-styles-controls_item__paint");
const jsGuStylesControlsItemEmblem = document.querySelector(".gup-styles-controls_item__emblem");
const jsGuStylesControlsItemInscription = document.querySelector(".gup-styles-controls_item__inscription");



const createControlsItemPaint = (dataControlsItemPaint) => {
    const controlsItemPaint = document.createElement('div')
    controlsItemPaint.classList.add('gup-styles-controls_control', `${dataControlsItemPaint.class}`, `${dataControlsItemPaint.noActive || dataControlsItemPaint.active}`, `${dataControlsItemPaint.null || "none"}`)

    controlsItemPaint.innerHTML = `
        <img src="${dataControlsItemPaint.img}" alt="" />
        <div class="gup-styles-controls_title">${dataControlsItemPaint.name}</div>
    `

    return controlsItemPaint
}

const createListControlsItemPaint = (wrapper, listControlsItemPaint) => {
    wrapper.textContent = '';
    listControlsItemPaint.forEach(item => wrapper.append(createControlsItemPaint(item)))
};


const createControlsItemEmblem = (dataControlsItemEmblem) => {
    const controlsItemEmblem = document.createElement('div')
    controlsItemEmblem.classList.add('gup-styles-controls_control', `${dataControlsItemEmblem.class}`, `${dataControlsItemEmblem.noActive || dataControlsItemEmblem.active}`)

    controlsItemEmblem.innerHTML = `
        <img src="${dataControlsItemEmblem.img}" alt="" />
        <div class="gup-styles-controls_title">${dataControlsItemEmblem.name}</div>    
    `

    return controlsItemEmblem
}

const createListControlsItemEmblem = (wrapper, listControlsItemEmblem) => {
    wrapper.textContent = '';
    listControlsItemEmblem.forEach(item => wrapper.append(createControlsItemEmblem(item)))
};


const createControlsItemInscription = (dataControlsItemInscription) => {
    const controlsItemInscription = document.createElement('div')
    controlsItemInscription.classList.add('gup-styles-controls_control', `${dataControlsItemInscription.class}`, `${dataControlsItemInscription.noActive || dataControlsItemInscription.active}`)

    controlsItemInscription.innerHTML = `
        <img src="${dataControlsItemInscription.img}" alt="" />
        <div class="gup-styles-controls_title">${dataControlsItemInscription.name}</div>    
    `

    return controlsItemInscription
}

const createListControlsItemInscription = (wrapper, listControlsItemInscription) => {
    wrapper.textContent = '';
    listControlsItemInscription.forEach(item => wrapper.append(createControlsItemInscription(item)))
};


createListControlsItemPaint(jsGuStylesControlsItemPaint, conductorControlsItemPaint);
createListControlsItemEmblem(jsGuStylesControlsItemEmblem, conductorControlsItemEmblem);
createListControlsItemInscription(jsGuStylesControlsItemInscription, conductorControlsItemInscription);

const gupMissionsItem = document.querySelector(".js-gup-missions_item");


const createMissions = (dataMissions) => {
    const mission = document.createElement('div');
    mission.classList.add('gup-missions_item')

    mission.innerHTML = `
        <img src="${dataMissions.img}" alt="" />
        <div class="gup-missions_x-num">${dataMissions.xNum || dataMissions.xNumZero}</div>
        <div class="gup-missions_tooltip">${dataMissions.tooltip}</div>
    `;

    return mission
}

const createListMissions = (wrapper, listMissions) => {
    wrapper.textContent = '';
    listMissions.forEach(item => wrapper.append(createMissions(item)))
    // listMissions.forEach(item => {
    //     const character = createMissions(item)
    //     wrapper.append(character)
    // });
};


createListMissions(gupMissionsItem, constructorMissions);

const gupAvaibleTop = document.querySelector(".js-gup-avaible-top");


const constructorAvaible = [{
    completed: ["Событие успешно завершено&nbsp;"], 
    april: ["Доступны с&nbsp;27&nbsp;апреля (09:00&nbsp;МСК)"], 
    may: ["Доступен до&nbsp;7&nbsp;мая (09:00&nbsp;МСК)"]
}];

const createAvaible = (dataAvaible) => {
    const avaible = document.createElement('span');
    avaible.innerHTML = `${dataAvaible.completed}`;

    return avaible
}

const createListAvaible = (wrapper, listAvaible) => {
    wrapper.textContent = '';
    listAvaible.forEach(item => wrapper.append(createAvaible(item)))
};


createListAvaible(gupAvaibleTop, constructorAvaible);