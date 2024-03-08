import {Box, Chip, useMediaQuery, useTheme} from "@mui/material";
import {useRecoilState, useRecoilValueLoadable} from "recoil";
import {curPokemonUrl, pokemonListQuery, pokemonListState, pokemonQuery} from "@/app/reсoil";
import {FIRST_POKEMON, getPokemon} from "@/app/api";
import {useState} from "react";

const PokemonList = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const pokemonList = useRecoilValueLoadable(pokemonListQuery);
    const [pokemonUrl, setPokemonUrl] = useRecoilState(curPokemonUrl);


    switch (pokemonList.state) {
        case 'hasValue':
            const pokemonItems = pokemonList.contents.map(item => (
                <Chip
                    key={item.url}
                    label={item.name}
                    color={'info'}
                    onClick={() => setPokemonUrl(item.url)}
                    clickable
                    sx={{
                        background: '#1986EC',
                        margin: '0 6px 10px 0',
                        borderRadius: '44px',
                        padding: "30px 8.08px",
                        '& span': {
                            fontWeight: 500,
                            fontSize: '1.25rem',
                            fontFamily: "Raleway",
                        }
                    }}
                />
            ));
            return (
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    maxWidth: '480px',
                    width: '100%',
                    marginBottom: isSmallScreen ? '20px' : 0
                }}>
                    {pokemonItems}
                </Box>);
        case 'loading':
            return (
                <Box suppressHydrationWarning
                     sx={{
                         width: '49.38%',
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center'
                     }}>
                    Загрузка покемона...
                </Box>);
        case 'hasError':
            throw pokemonList.contents;
    }
};

export default PokemonList;