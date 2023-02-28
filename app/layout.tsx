import '../styles/globals.css';
import Header from './Header';

export const metadata = {
    title: 'MD22 Next.js Recipes',
    description: 'Next.js Recipes CRUD',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang='en'>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
