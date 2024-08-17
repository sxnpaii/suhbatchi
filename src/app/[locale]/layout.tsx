import { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "@/app/globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/custom/theme-provider";

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}
const inter = Inter({ subsets: ["latin"] });
const WorkSans = Work_Sans({ subsets: ["latin"], variable: "--work-sans" });

export const metadata: Metadata = {
  title: "Suhbatchi AI",
  description: "SI-Asosidagi Koll Markaz",
  icons: "images/suhbatchi_logo_circle.svg",
};
const LocaleLayout = async ({ children, params }: Props) => {
  const messages = await getMessages();
  return (
    <html lang={params.locale}>
      <body className={`${inter.className} ${WorkSans.variable} mx-5`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
