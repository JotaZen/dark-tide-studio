"use strict";

import "react-multi-carousel/lib/styles.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                {/* <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" /> */}

                <link rel="alternate" hrefLang="en" href="/en" />
                <link rel="alternate" hrefLang="es" href="/es" />
                <link rel="alternate" hrefLang="x-default" href="/" />
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

