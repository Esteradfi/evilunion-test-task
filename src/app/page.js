'use client'
import {RecoilRoot} from "recoil";
import Main from "@/app/components/Main/Main";


export default function Home() {

    return (
        <RecoilRoot>
            <Main/>
        </RecoilRoot>
    );
}