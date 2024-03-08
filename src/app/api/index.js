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
        return {
            name: response.data.name,
            id: response.data.id,
            height: response.data.height,
            moves: response.data.moves.length,
            attack: response.data.stats.find(item => item.stat.name === 'attack').base_stat,
            image: response.data.sprites.front_default,
        }
    } catch (error) {
        throw error;
    }
}