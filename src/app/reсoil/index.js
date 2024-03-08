import {atom, selector, selectorFamily} from 'recoil';
import $api, {FIRST_POKEMON, getPokemon, getPokemonList} from "@/app/api";

export const pokemonListQuery = selector({
    key: 'pokemonListQuery',
    get: async ({ get }) => {
        try {
            const response = await getPokemonList();
            return response || [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }
});

export const curPokemonUrl = atom({
    key: "curPokemonUrl",
    default: FIRST_POKEMON
})

//Данные о покемоне
export const pokemonQuery = selectorFamily({
    key: 'pokemonQuery',
    get: pokemonUrl => async ({ get }) => {
        try {
            const response = await getPokemon(pokemonUrl);
            return response;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
});
