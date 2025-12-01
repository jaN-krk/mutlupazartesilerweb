import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from "next-themes";

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.PNG"
        alt="logo"
        width={110}
        height={50}
        style={{  height: 'auto' }}
        quality={100}
        className='dark:hidden md:w-[110px] w-[80px]'
      />
      <Image
        src="/images/logo/logo-beyaz.png"
        alt="logo"
        width={110}
        height={50}
        style={{ height: 'auto' }}
        quality={100}
        className='dark:block hidden md:w-[110px] w-[80px]'
      />
    </Link>
  );
};

export default Logo;
