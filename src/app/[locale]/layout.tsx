
"use strict";

import { createTranslator, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import seoKeywords from "@/constants/text/keywords";
import { Provider } from "@/components/ui/provider";
import MainLayout from "@/components/layout/main-layout";

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string }
}) {
    const { locale } = await params;
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
                <Provider>
                    <NextIntlClientProvider
                        messages={messages}
                    >
                        <MainLayout>
                            {children}
                        </MainLayout>
                    </NextIntlClientProvider>
                </Provider>
            </body>
        </html >
    );
}