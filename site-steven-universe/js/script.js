const root = document.createElement('div');
root.classList.add('root');
document.body.appendChild(root);

const h1 = document.createElement('h1');
h1.innerHTML = 'API Steven Universe';
root.appendChild(h1);

const container = document.createElement('div');
container.classList.add('container');
root.appendChild(container);


fetch('http://localhost:3000/')
.then((response) => {
    return response.json();
})
.then((data) => {
    data.results.forEach((personagem) => {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const name = document.createElement('h2');
        name.innerHTML = `Name: ${personagem.name}`;
        card.appendChild(name);

        const nick = document.createElement('p');
        nick.innerHTML = `Nickname: ${personagem.nickname}`;
        card.appendChild(nick);

        const specie = document.createElement('p');
        specie.innerHTML = `Specie: ${personagem.species}`;
        card.appendChild(specie);

        const weapons = document.createElement('p');
        weapons.innerHTML = `Weapons: ${personagem.weapons}`;
        card.appendChild(weapons);

        const gender = document.createElement('p');
        gender.innerHTML = `Gender: ${personagem.gender}`;
        card.appendChild(gender);

        const img = document.createElement('img');
        img.setAttribute('src', personagem.img.url);
        card.appendChild(img);
    })
})