import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uz"],
  defaultLocale: "en",
  localeDetection: false,
});

export const config = {
  matcher: ["/", "/(uz|en)/:path*"],
};
