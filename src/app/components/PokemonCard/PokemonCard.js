import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useRecoilState, useRecoilValueLoadable} from "recoil";
import {curPokemonUrl, pokemonQuery} from "@/app/reсoil";
import {FIRST_POKEMON} from "@/app/api";
import {normalizeCountForm} from "@/app/utils/normalizeCountForm";
import Image from "next/image";

const PokemonCard = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [pokemonUrl, setPokemonUrl] = useRecoilState(curPokemonUrl);
    const pokemon = useRecoilValueLoadable(pokemonQuery(pokemonUrl));
    const wordForm = normalizeCountForm(pokemon.contents.moves, ['серии', 'сериях']);

    switch (pokemon.state) {
        case 'hasValue':
            return (
                <Box sx={{
                    width: isSmallScreen ? '100%' : '49.38%',
                    background: '#000000',
                    padding: isSmallScreen ? '1rem' : '2.75rem 2.75rem 1rem',
                    color: '#A0A0A0',
                    textTransform: 'capitalize',
                    boxSizing: 'border-box'
                }}>
                    <Typography variant={"h3"} fontWeight={'bold'} component={'h3'}>
                        {pokemon.contents.name}
                    </Typography>
                    <Box sx={{margin: '39px auto', maxWidth: '200px'}}>
                        <Image src={pokemon.contents.image} alt={'Покемон'} width={200} height={200} priority={false}/>
                    </Box>
                    <Typography variant={"body1"} component={"span"}
                                sx={{fontSize: '1.0625rem', display: 'block', textTransform: 'none'}}>
                        Снялся в {pokemon.contents.moves + ` ${wordForm}`}
                    </Typography>
                    <Typography variant={"body1"} component={"span"}
                                sx={{fontSize: '1.0625rem', display: 'block', textTransform: 'none'}}>
                        id: {pokemon.contents.id}
                    </Typography>
                    <Typography variant={"body1"} component={"span"}
                                sx={{fontSize: '1.0625rem', display: 'block', textTransform: 'none'}}>
                        height: {pokemon.contents.height}
                    </Typography>
                    <Typography variant={"body1"} component={"span"}
                                sx={{fontSize: '1.0625rem', display: 'block', textTransform: 'none'}}>
                        attack: {pokemon.contents.attack}
                    </Typography>
                </Box>
            );
        case 'loading':
            return (
                <Box suppressHydrationWarning
                     sx={{
                         width: '49.38%',
                         height: '500px',
                         background: '#000000',
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center'
                     }}>
                    Загрузка покемона...
                </Box>);
        case 'hasError':
            throw pokemon.contents;
    }
};

export default PokemonCard;