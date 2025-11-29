import Card from "@/app/components/Hizmetler/ServiceCard";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hizmetler | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/hizmetlerimiz", text: "Hizmetler" },
  ];
  return (
    <>
      <HeroSub
        title="Hizmetler"
        description="Hizmetlerimizle işletmenizi bir adım öne taşımanıza yardımcı oluyoruz."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Card />
    </>
  );
};

export default page;
