
const pokemonList = document.getElementById('topo')
//recuperar o id do pokemon na url
const idPokemon =  new URLSearchParams(window.location.search)
//armazena o Id do pokemon permitindo deixar a página dinamica
let nPokemon = idPokemon.get('id')


const limit = 1;
let offset = parseInt(nPokemon) - 1;



function loadPokemonItens (offset, limit) {
        pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) =>
            
            `
            <div class="pokemon ${pokemon.type}" id="content">
            
            <li class="pokemon ${pokemon.type}" onclick="carregarPaginaPokemon()">
                <span class="number">${pokemon.Pnumber}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    
        
                </div>
           </li>
           <div class="informacoes">
            <ul>
                <h2>About</h2>
                <li>Height: ${pokemon.height}</li>
                <li>weight: ${pokemon.weight}</li>
                <li>abilities: ${pokemon.ability}</li>
            </ul>
    
           

        </div>

        </div>
           `).join('')

        
        pokemonList.innerHTML += newHtml
        
        
        
        
       })

}

loadPokemonItens(offset, limit)








