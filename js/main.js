const unit = [{
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
    },
    {
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
    },
    {
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "weaknesses": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
    },
    {
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
            "Fire",
        ],
        "weaknesses": [
            "Water",
            "Ground",
            "Rock"
        ],
    },
    {
        "name": "Charmeleon",
        "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
        "type": [
            "Fire",
        ],
        "weaknesses": [
            "Water",
            "Ground",
            "Rock"
        ],
    }
]
const list = document.querySelector(".wrapper");
for (let i = 0; i < unit.length; i++) {
    const currentVar = unit[i];

    const unitItem = document.createElement("li");
    unitItem.className = "wrapper__item";

    const unitName = document.createElement("h2");
    unitName.className = "wrapper__title";
    unitName.textContent = currentVar.name;

    const unitImg = document.createElement("img");
    unitImg.className = "wrapper__img";
    unitImg.src = currentVar.img;

    const typeList = document.createElement("ul");
    typeList.className = "wrapper__type-list";

    const typeItem = document.createElement("li");
    typeItem.className = "wrapper__type-item";

    typeList.append(typeItem)


    const typeTitle = document.createElement('h3');
    typeTitle.className = "wrapper__type-title";
    typeTitle.textContent = "Type";

    typeItem.append(typeTitle);


    const weakList = document.createElement("ul");
    weakList.className = "wrapper__weak-list";

    const weakItem = document.createElement("li");
    weakItem.className = "wrapper__weak-item";

    weakList.append(weakItem);


    const weakTitle = document.createElement("h3");
    weakTitle.className = "wrapper__weak-title";
    weakTitle.textContent = "Weaknesses";

    weakItem.append(weakTitle);

    const wrapper=document.createElement("div");
    wrapper.className="wrapper__wrapper";

    wrapper.append(typeList);
    wrapper.append(weakList);


    unitItem.append(unitName);
    unitItem.append(unitImg);
    unitItem.append(wrapper);
    list.append(unitItem);

    for (let j = 0; j < 2; j++) {
        const typeText = document.createElement("p");
        typeText.className = "wrapper__type-text";
        if (false) {
            continue;
        } else {
            typeText.textContent = unit[i].type[j];
        }
        typeItem.append(typeText);
    }

    for (let k = 0; k < 4; k++) {
        const weakText = document.createElement("p");
        weakText.className = "wrapper__weak-text";
        if (false) {
            continue;
        } else {
            weakText.textContent = unit[i].weaknesses[k];
        }
        weakItem.append(weakText);
    }
}