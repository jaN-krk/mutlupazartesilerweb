import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | SassCandy",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Anasayfa" },
    { href: "/pricing", text: "Fiyatlandırma" },
  ];
  return (
    <>
      <HeroSub
        title="Pricing"
        description="Choose the perfect plan that fits your needs. Whether you're just getting started or scaling up, we've got you covered."
        breadcrumbLinks={breadcrumbLinks}
      />
    </>
  );
};

export default page;
