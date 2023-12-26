
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonList = document.getElementById('pokemonList')
const carregarPokemons = document.getElementById('carregarPokemons')

const limit = 10;
let offset = 0;

const maxRecords = 151


 




function loadPokemonItens (offset, limit) {
        pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
                <span class="number" id="number">${pokemon.Pnumber}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    <button onclick="carregarPaginaPokemon(${pokemon.Pnumber})" style="background-color: green; color: white; border-radius:5px;" >ver</button>
        
                </div>
           </li>`
           
           ).join('')
           
        
        pokemonList.innerHTML += newHtml
        

        
    
     
        
        
        
        
       })

}

loadPokemonItens(offset, limit)
//carrega a página do pokemon, recuperar o id do pokemon para enviar para a página de detalhes

function carregarPaginaPokemon (number) {
    let numero = number
    console.log(numero)
    console.log('funcionando')
    window.location.href = `detalhes.html?id=${numero}` 


}



loadMoreButton.addEventListener("click", () => {

    offset += limit
    const qtdRecordNexPage = offset + limit
    if (qtdRecordNexPage >= maxRecords) {
        const newLimit = maxRecords - offset 
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
        
    } else {
        loadPokemonItens(offset, limit)

    }
    
    


})







    
    

       
