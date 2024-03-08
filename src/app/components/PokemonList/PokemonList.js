import {Box, Chip, useMediaQuery, useTheme} from "@mui/material";
import {useRecoilState, useRecoilValueLoadable} from "recoil";
import {curPokemonUrl, pokemonListQuery, pokemonListState, pokemonQuery} from "@/app/reсoil";
import {FIRST_POKEMON, getPokemon} from "@/app/api";
import {useState} from "react";

const PokemonList = () => {
    //Для настройки стилей при малых разрешениях экрана
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const pokemonList = useRecoilValueLoadable(pokemonListQuery); //Запрос на получение списка из 10 покемонов
    const [pokemonUrl, setPokemonUrl] = useRecoilState(curPokemonUrl); //Для смены выбранного покемона кликом по кнопке с url


    switch (pokemonList.state) {
        case 'hasValue': // Если получен ответ на запрос к API
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
        case 'loading':  //Ожидание ответа на запрос к API
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
        case 'hasError': // Если запрос к API вернул ошибку
            throw pokemonList.contents;
    }
};

export default PokemonList;