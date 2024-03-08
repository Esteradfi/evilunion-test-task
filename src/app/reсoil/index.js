import {atom, selector, selectorFamily} from 'recoil';
import $api, {getPokemon, getPokemonList} from "@/app/api";

export const pokemonListQuery = selector({
    key: 'pokemonListQuery',
    get: async ({ get }) => {
        try {
            const response = await getPokemonList();
            console.log(response);
            return response || [];
        } catch (error) {
            throw error;
        }
    }
});

// Атом для хранения списка покемонов
export const pokemonListState = atom({
    key: 'pokemonListState',
    default: pokemonListQuery,
});


//Данные о покемоне
export const pokemonQuery = selectorFamily({
    key: 'pokemonQuery',
    get: pokemonUrl => async ({ get }) => {
        try {
            const response = await getPokemon(pokemonUrl);
            return response;
        } catch (error) {
            throw error;
        }
    }
});
