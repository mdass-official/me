const linkContainer = document.getElementById('linkContainer');
const name = document.getElementById('name')
const roll = document.getElementById('roll')
const profilePic = document.getElementById('profilePic')

const url = './data.json';


fetch(url).then(rawData => rawData.json()).then(data => {
    name.innerHTML = data.name;
    roll.innerHTML = data.roll;
    profilePic.innerHTML = `<img src=${data.profilePic} alt="profile picture ${data.name}"/>`;
    
    let linksDoc = '';

    data.links.forEach(element => {
        linksDoc += `<a href=${element.link}>${element.title}</a>`;
    });
    linkContainer.innerHTML = linksDoc;
})
