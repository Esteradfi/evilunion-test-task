'use client'
import {RecoilRoot, useRecoilState} from "recoil";
import {pokemonListState} from "@/app/reсoil";
import Main from "@/app/components/Main";


export default function Home() {

    return (
        <RecoilRoot>
            <Main />
        </RecoilRoot>
    );
}