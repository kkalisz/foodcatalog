import { Link as NavLinkMain } from '@radix-ui/themes';
import Link from 'next/link';

const FooterNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <NavLinkMain asChild>
      <Link href={href}>{children}</Link>
    </NavLinkMain>
  );
};

export default FooterNavLink;
