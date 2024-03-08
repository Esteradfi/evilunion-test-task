import {atom, selector, selectorFamily} from 'recoil';
import $api, {FIRST_POKEMON, getPokemon, getPokemonList} from "@/app/api";

//Селектор с запросом списка покемонов
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

//Атом, хранящий текущий url покемона
export const curPokemonUrl = atom({
    key: "curPokemonUrl",
    default: FIRST_POKEMON
})

//Селектор с запросом покемона по его url
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
