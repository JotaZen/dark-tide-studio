import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locales.includes(locale as string)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./src/languages/${locale}.json`)).default,
  };
});
