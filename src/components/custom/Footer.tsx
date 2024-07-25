import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import Logo from "@/assets/images/Logo.svg";

const Footer = () => {
  const t = useTranslations("Index.Footer");
  return (
    <footer className="mt-32 border-t pt-10">
      <div className="xl:w-[80%] sm:w-full mx-auto flex justify-between items-start max-md:flex-wrap gap-10 mb-7">
        <div className="md:w-[40%] flex items-start justify-between max-md:flex-col gap-10">
          <ul>
            <h5 className="font-WorkSans font-semibold text-xl mb-5">
              {t("firstCol.title")}
            </h5>
            {["list1", "list2", "list3", "list4"].map((el, index) => (
              <li key={index} className="mb-5 font-WorkSans">
                <a href="" className="hover:underline">
                  {t(`firstCol.${el}`)}
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <h5 className="font-WorkSans font-semibold text-xl mb-5">
              {t("secondCol.title")}
            </h5>
            {["list1"].map((el, index) => (
              <li key={index} className="mb-5 font-WorkSans">
                <a href="" className="hover:underline">
                  {t(`secondCol.${el}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Card className={cn(`h-min`)}>
          <CardHeader className={cn("flex flex-row items-start")}>
            <Avatar>
              <AvatarImage
                src="/images/suhbatchi_logo_circle.svg"
                alt="@suhbatchi"
              />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <CardTitle>Suhbatchi</CardTitle>
              <CardDescription>@suhbatchi</CardDescription>
            </div>
          </CardHeader>
          <CardContent className={cn(`text-lg`)}>
            Mijozlar bilan muloqotning yangi avlodi - <br /> Suhbatchi orqali
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;
