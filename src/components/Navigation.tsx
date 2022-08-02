/*import Link from 'next/link';*/
/*import { useI18n } from 'next-localization';*/
/*import { getPublicUrl } from '@sitecore-jss/sitecore-jss-nextjs';*/

import Link from 'next/link';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
/*const publicUrl = getPublicUrl();*/

const Navigation = (): JSX.Element => {
  /*const { t } = useI18n(); */

  return (
    <div className="container mx-auto max-w-1440 flex flex-row justify-between items-center px-10 lg:px-40 py-8">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" fill="#030303" />
        <circle cx="32" cy="32" r="14" stroke="#FFF7F0" strokeWidth="4" />
      </svg>
      <Link href="mailto:frank@frankcostoya.com" passHref>
        <div className="flex cursor-pointer items-center justify-center h-14 w-56 rounded-full bg-black hover:bg-design-purple text-white">
          Free Consultation
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
