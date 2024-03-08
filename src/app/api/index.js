import axios from "axios";

export const FIRST_POKEMON = 'https://pokeapi.co/api/v2/pokemon/1' //Ссылка для запроса первого покемона

//Запрос на получение списка покемонов
export const getPokemonList = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        return response.data.results;
    } catch (error) {
        throw error;
    }
}


//Запрос на получение данных о покемоне
export const getPokemon = async (url) => {
    try {
        const response = await axios.get(`${url}`);

        // Таким образом доставалась картинка, похожая на картинку из макета, но она была гораздо худшего качества, поэтому была взята другая
        // Также стоит отметить, что показатель производительности в Lighthouse при использовании этой картинки падал до 56,
        // в то время как с текущей картинкой поднимался до 75
        //const sprites = response.data.sprites.versions['generation-v']['black-white'].front_shiny;

        return {
            name: response.data.name,
            id: response.data.id,
            height: response.data.height,
            moves: response.data.moves.length,
            attack: response.data.stats.find(item => item.stat.name === 'attack').base_stat,
            image: response.data.sprites.other.dream_world.front_default,
        }
    } catch (error) {
        throw error;
    }
}