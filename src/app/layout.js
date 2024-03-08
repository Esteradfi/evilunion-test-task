import {Raleway} from "next/font/google";
import "./globals.css";
import Head from "next/head";

const raleway = Raleway({
    weight: ['500', '600', '700'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

export const metadata = {
    title: "EvilUnion Test",
    description: "Test task",
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <Head>
            <title>EvilUnion Test</title>
            <description>Test task</description>
            <link rel="preconnect" href="https://pokeapi.co" crossOrigin />
        </Head>
        <body className={raleway.className}>{children}</body>
        </html>
    );
}
