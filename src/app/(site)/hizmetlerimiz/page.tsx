import HizmetlerComponent from "@/app/components/Home/hizmetlerimiz";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/hizmetlerimiz", text: "Hizmetlerimiz" },
  ];
  return (
    <>
      <HeroSub
        title="Hizmetlerimiz"
        description="Hizmetlerimizle işletmenizi bir adım öne taşımanıza yardımcı oluyoruz."
        breadcrumbLinks={breadcrumbLinks}
      />
      <HizmetlerComponent />
    </>
  );
};

export default page;
