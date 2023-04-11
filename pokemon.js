function pegarPokemon(quantidade) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10'+quantidade)
    .then(response => response.json())
    .then(allpokemon => {
        var pokemons = [];
        // mapea todos os nomes do pokemons e lista todos eles no console do nav
        allpokemon.results.map((val) => {

            fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle => {
                    pokemons.push({ nome: val.name, imagem: pokemonSingle.sprites.front_default })

                    if (pokemons.length == quantidade) {

                        var pokemonBoxes = document.querySelector('.pokemon-boxes');
                        pokemonBoxes.innerHTML = "";

                        //console.log(pokemons);
                        pokemons.map(function(val){
                            pokemonBoxes.innerHTML += `
                            
                                <div class="pokemon-box">
                                    <img src="`+val.imagem+`" />
                                    <p>`+val.nome+`</p>
                                </div>
                            
                            `;
                        })
                    }
                });

        });

    });
}

var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', ()=>{
    pegarPokemon(quantidade.value);
})

pegarPokemon(20);