import {atom, selector} from 'recoil';
import $api from "@/app/api";

// Атом для хранения списка покемонов
export const pokemonListState = atom({
    key: 'pokemonListState',
    default: [],
});

export const currentPokemon = atom({
    key: 'currentPokemon',
    default: null
})
