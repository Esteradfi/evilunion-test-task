'use client'
import {RecoilRoot} from "recoil";
import Header from "@/app/components/Header/Header";
import {Box, Container} from "@mui/material";
import PokemonList from "@/app/components/PokemonList/PokemonList";
import PokemonCard from "@/app/components/PokemonCard/PokemonCard";


export default function Home() {

    return (
        <RecoilRoot>
            <Container component={'main'} sx={{maxWidth: '980px', margin: '100px auto', p: 0}}>
                <Header />
                <Box component={'section'} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <PokemonList />
                    <PokemonCard />
                </Box>
            </Container>
        </RecoilRoot>
    );
}