import {useRecoilState, useRecoilValue} from "recoil";
import {useEffect} from "react";
import {getPokemon, getPokemonList} from "@/app/api";
import {currentPokemon, pokemonListState} from "@/app/reсoil";

const Main = () => {
    const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);
    const [pokemon, setPokemon] = useRecoilState(currentPokemon);

    useEffect(() => {
        const fetchPokemonList = async () => {
            const data = await getPokemonList();
            setPokemonList(data);
        };

        const fetchPokemon = async () => {
            const data = await getPokemon(1);
            setPokemon(data);
        }

        fetchPokemonList();
        fetchPokemon();
    }, []);

    return (
        <main>
            <h2>{pokemonList.map(item => item.name)}</h2>
        </main>
    )
};

export default Main;