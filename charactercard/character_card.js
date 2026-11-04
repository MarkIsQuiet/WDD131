const deathModal = document.getElementById("deathModal");
const closeModal = document.getElementById("closeModal");

const snortleblatCard = {
    img_src: 'snortleblat.webp',
    img_alt: 'snortleblat portrait',
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 8,
    health: 100,
    attacked: function () {
        if (this.health > 0) {
            this.health = this.health - 20;
        }
        else {
            deathModal.classList.remove("hidden");
        }
    },
    levelUp: function () {
        this.level += 1;
    } 
  };

function characterTemplate(card) {
    return `<img src="${card.img_src}" alt="${card.img_alt}" class = 'image'>

        <h1 class = 'name'>${card.name}</h1>

        <div class = 'stats'>
            <p>Class: ${card.class}</p>
            <p>Level: ${card.level}</p>
            <p>Health: ${card.health}</p>
        </div>

        <div class = 'buttons'>
            <button class = 'attacked'>Attacked</button>
            <button class = 'levelUp'>Level Up</button>
        </div>`
}

function renderCharacter(character) {
    document.querySelector(".card").innerHTML =
        characterTemplate(character);

     document.querySelector(".attacked").addEventListener("click", () => {
        character.attacked();
        renderCharacter(character);
    });

    document.querySelector(".levelUp").addEventListener("click", () => {
        character.levelUp();
        renderCharacter(character);
    });
}
renderCharacter(snortleblatCard);

closeModal.addEventListener("click", () => {
    deathModal.classList.add("hidden");
});