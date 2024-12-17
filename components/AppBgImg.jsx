import Image from "next/image";
import bgImage from '@/public/images/Mountain.svg';

export default function AppBgImg() {
  return <Image 
    src={bgImage}
    alt='Background Image'
    width={1920}
    style={{
      objectFit: 'cover',
      zIndex: -1,
      opacity: 0.5,
      position: 'fixed',
      bottom: 0,
      right: 0,
    }}
  />
}