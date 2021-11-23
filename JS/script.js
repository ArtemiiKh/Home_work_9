const userDataOfBirthday = prompt("Введите Ваш год рождения");
let showBirthdayAndCity,showSport, showCity;

if ((userDataOfBirthday !== null)) {
    userCity = prompt("В каком городе Вы проживаете? (для получения страны введите : Киев, Москва, Минск )");
} else if ((userDataOfBirthday === null) || (userDataOfBirthday.trim() === "")) {
    alert("Жаль, что Вы не захотели ввести свойю Дату рождения");
}

switch (userCity) {
    case "Киев" :
        showBirthdayAndCity = `Твой год рождения: ${userDataOfBirthday}, ты живешь в столице Украины - в г.Киев.`;
        break;
    
    case "Москва" :
        showBirthdayAndCity = `Твой год рождения: ${userDataOfBirthday}, ты живешь в столице РФ - в г.Москва.`;
        break;

    case "Минск" :
        showBirthdayAndCity = `Твой год рождения: ${userDataOfBirthday}, ты живешь в столице Беларуси - в г.Минск.`;
        break;
    
    default:
        showBirthdayAndCity =  `Твой год рождения: ${userDataOfBirthday}, ты живешь в городе ${userCity}.`;
}

 if ((userCity !== null)) {
    userSport = prompt("Какой твой любимый вид спорта: Бодибилдинг, Бокс или Футбол?");
} else if ((userCity === null) || (userCity.trim() === "")) {
    alert("Жаль, что Вы не захотели ввести свой город проживания");
} 

switch(userSport){
    case "Бодибилдинг" :
        showSport = `Любишь ${userSport}? Круто! Хочешь стать как "Железный Арни"?`;
        break;

    case "Бокс" :
        showSport = `Любишь ${userSport}? Круто! Хочешь стать как Мейвезер?`;
        break;

    case "Футбол" :
        showSport = `Любишь ${userSport}? Круто! Хочешь стать как Роналду?`;
        break;

    default: 
        showSport = `Любишь ${userSport}? Круто!`;
        break;    
}

if ((userSport === null) || (userSport.trim() === "")) {
    alert("Жаль, что Вы не захотели ввести свой вид спорта");
} else if ((userSport !== null)) {
    alert(`${showBirthdayAndCity} ${showSport}`);
}