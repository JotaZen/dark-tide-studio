
export const dynamic = 'force-dynamic'; // Para asegurarnos de que esto se renderice en SSR

import { createTranslator, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import seoKeywords from "@/constants/text/keywords";
import { Provider } from "@/components/ui/provider";

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string }
}) {
    const { locale } = params;
    const messages = await getMessages({ locale });
    const t = createTranslator({ locale, messages });

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <title>{t('metadata.title')}</title>
                <meta name="description" content={t('metadata.description')} />
                <meta name="keywords" content={
                    seoKeywords
                } />
                <link rel="icon" href="/logo.png" />
            </head>
            <body>
                <NextIntlClientProvider
                    messages={messages}
                >
                    <Provider>
                        {children}
                    </Provider>
                </NextIntlClientProvider>
            </body>
        </html >
    );
}