"use client";
import Image from "next/image";
import LogoDark from "@/assets/images/LogoDark.svg";
import LogoLight from "@/assets/images/LogoLight.svg";
import { ModeToggle } from "./darkmode-toggler";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
const Header = () => {
  const t = useTranslations("Index");
  const { theme } = useTheme();
  return (
    <header className="flex p-5 justify-between items-center">
      <Image
        src={theme === "light" ? LogoLight.src : LogoDark.src}
        alt="Header Logo"
        width={45}
        // className="max-sm:w-[150px]"
        height={45}
      />
      <NavigationMenu className={cn(`max-md:hidden`)}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("Header.services")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("Header.benefits")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t("Header.aboutus")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="login flex items-center gap-3">
        <Button className={cn(`max-sm:hidden`)}>
          <Link href={""}>{t("Header.login")}</Link>
        </Button>
        <ModeToggle className="max-md:hidden" />
        <Sheet>
          <Button variant={`outline`} size={`icon`} className={cn(`md:hidden`)}>
            <SheetTrigger asChild>
              <HamburgerMenuIcon />
            </SheetTrigger>
          </Button>
          <SheetContent className="w-full">
            <SheetHeader className={cn(`mb-12`)}>
              <SheetTitle>
                <Image
                  src={theme === "light" ? LogoLight.src : LogoDark.src}
                  alt="Header Logo"
                  width={45}
                  height={45}
                />
              </SheetTitle>
            </SheetHeader>
            <div className="grid gap-y-5 mb-4">
              <Button variant={`ghost`} className={cn(`text-start w-full`)}>
                <Link href={""} className={cn(`text-xl text-start`)}>
                  {t("Header.services")}
                </Link>
              </Button>
              <Button variant={`ghost`} className={cn(`text-start w-full`)}>
                <Link href={""} className={cn(`text-xl text-start`)}>
                  {t("Header.benefits")}
                </Link>
              </Button>
              <Button variant={`ghost`} className={cn(`text-start w-full`)}>
                <Link href={""} className={cn(`text-xl text-start`)}>
                  {t("Header.aboutus")}
                </Link>
              </Button>
              <Button
                variant={`ghost`}
                className={cn(`text-start w-full gap-2`)}
              >
                <span>{t("Header.theme")}</span> <ModeToggle />
              </Button>
              <Button
                variant={"ghost"}
                className={cn(`text-start w-full gap-2`)}
              >
                <span>{t("Header.lang")} </span>
                <Button variant={"outline"}>
                  <Link href={`/en`}>ENG</Link>
                </Button>
                <Button variant={"outline"}>
                  <Link href={`/uz`}>UZ</Link>
                </Button>
              </Button>
              <Button className={cn(`min-w-[400px]:hidden`)}>
                <Link href={""}>{t("Header.login")}</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
