import {Card} from "@mui/material";
import {useRecoilValueLoadable} from "recoil";
import {pokemonQuery} from "@/app/reсoil";
import {FIRST_POKEMON} from "@/app/api";

const PokemonCard = () => {
    const pokemon = useRecoilValueLoadable(pokemonQuery(FIRST_POKEMON));

    return (
        <Card>

        </Card>
    )
};

export default PokemonCard;