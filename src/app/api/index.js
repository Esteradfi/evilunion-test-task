import axios from "axios";

export const API_URL = 'https://pokeapi.co/api/v2/';

const $api = axios.create({
    baseURL: API_URL,
});


//Запрос на получение списка покемонов
export const getPokemonList = async () => {
    try {
        const response = await $api.get('pokemon?limit=5');
        return response.data.results;
    } catch (error) {
        throw error;
    }
}

export const getPokemon = async (id) => {
    try {
        const response = await $api.get(`pokemon/${id}/`);
        return {
            name: response.data.name,
            id: id,
            height: response.data.height,
            moves: response.data.moves.length,
            attack: response.data.stats.find(item => item.stat.name === 'attack').base_stat,
            image: response.data.sprites.front_default,
        }
    } catch (error) {
        throw error;
    }
}

export default $api;