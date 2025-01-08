import '../styles/globals.css';
import '../styles/fonts.css';

export default async function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children
}

export const metadata = {
    icons: {
        icon: '/img/logo.png',
        shortcut: '/img/favicon.ico',
        apple: '/img/apple-touch-icon.png',
    }
}