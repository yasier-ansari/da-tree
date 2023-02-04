import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

export default function Document() {
    return (
        <Html className="scroll-smooth">
            <Head />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Quicksand:wght@300;400;500;600;700&family=Unbounded:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <body className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-100 via-teal-200/10 to-pink-100 font-quick overflow-x-hidden lg:transform-gpu">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
