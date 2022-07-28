const gupCharacters = document.querySelector(".gup-characters");
const gupMissionsItem = document.querySelector(".js-gup-missions_item");
const gupAvaibleTop = document.querySelector(".js-gup-avaible-top");


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


createListCharacters(gupCharacters, constructorInfo);
createListMissions(gupMissionsItem, constructorMissions);
createListAvaible(gupAvaibleTop, constructorAvaible);