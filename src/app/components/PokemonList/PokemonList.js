import {Box} from "@mui/material";
import {useRecoilStateLoadable} from "recoil";
import {pokemonListState} from "@/app/reсoil";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useRecoilStateLoadable(pokemonListState);
    
    return (
        <Box>

        </Box>
    )
};

export default PokemonList;