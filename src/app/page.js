'use client'
import {RecoilRoot} from "recoil";
import Header from "@/app/components/Header/Header";
import {Box, Container, ThemeProvider, useMediaQuery, useTheme} from "@mui/material";
import PokemonList from "@/app/components/PokemonList/PokemonList";
import PokemonCard from "@/app/components/PokemonCard/PokemonCard";
import themeConfig from "@/app/theme";


export default function Home() {
    const isSmallScreen = useMediaQuery(themeConfig.breakpoints.down('sm')); //Для настройки стилей при малых разрешениях экрана

    return (
        <ThemeProvider theme={themeConfig}>
            <RecoilRoot>
                <Container component={'main'} maxWidth={"md"} sx={{margin: isSmallScreen ? '16px auto' : '100px auto'}}>
                    <Header/>
                    <Box component={'section'}
                         sx={{
                             display: 'flex',
                             flexDirection: isSmallScreen ? 'column' : 'row',
                             justifyContent: 'space-between',
                             alignItems: 'center'}}>
                        <PokemonList/>
                        <PokemonCard/>
                    </Box>
                </Container>
            </RecoilRoot>
        </ThemeProvider>
    );
}