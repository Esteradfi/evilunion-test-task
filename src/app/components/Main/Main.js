import {useRecoilStateLoadable, useRecoilValueLoadable} from "recoil";
import {FIRST_POKEMON} from "@/app/api";
import {pokemonListState, pokemonQuery} from "@/app/reсoil";
import styles from "./Main.module.css";
import Header from "@/app/components/Header/Header";
import {Box, Container} from "@mui/material";

const Main = () => {
    const [pokemonList, setPokemonList] = useRecoilStateLoadable(pokemonListState);
    const pokemon = useRecoilValueLoadable(pokemonQuery(FIRST_POKEMON));

    return (
        <Container component={'main'} className={styles.main}>
            <Header />
            <Box component={'section'} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

            </Box>
        </Container>
    )
};

export default Main;