import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!["en", "uz"].includes(locale)) return notFound();
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
