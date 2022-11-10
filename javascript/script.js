"use strict"

for (let i = 0; i < pokemons.length; i++) {

    const div = document.createElement('div');
    div.classList.add('card', 'w-25', 'rounded-4', 'm-4', 'ps-3', 'pe-3');
    div.innerHTML = `<img src="${pokemons[i].img}" alt="img" width="100" class="mx-auto"> <hr class="mt-5"> <p" >${pokemons[i].name}</p> <p>${pokemons[i].candy} </p> ${pokemons[i].weight} ${pokemons[i].id + " age"}`

    $('.wrapper').append(div)
}

for (let i = 0; i < pokemons.length; i++) {

    const div = document.createElement('div');
    div.classList.add('card', 'w-100', 'rounded-4', 'mt-2', 'ps-3', 'pe-5');
    div.innerHTML = ` <img src="${pokemons[i].img}" alt="img" width="100"> <hr class="mt-5"> <p" >${pokemons[i].name}</p> <p>${pokemons[i].candy} </p> ${pokemons[i].weight} ${pokemons[i].id + " age"}`

    $('.save').append(div)
}

$('.like').addEventListener('click', () => {
    $('.save').classList.remove('swipe');
})

$('.arrow').addEventListener('click', ()=> {
    $('.save').classList.add('swipe')
})


