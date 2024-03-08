import {Raleway} from "next/font/google";
import "./globals.css";

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
        <body className={raleway.className}>{children}</body>
        </html>
    );
}
