import { redirect } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locales.includes(locale as string)) {
    redirect("/es");
  }

  return {
    locale,
    messages: (await import(`../languages/${locale}.json`)).default,
  };
});
