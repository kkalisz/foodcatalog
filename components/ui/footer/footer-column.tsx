import { Link } from '@radix-ui/themes';
import { ArrowUpRight } from 'lucide-react';
type ColumnLink = { href: string; label: string; external?: boolean };
function FooterColumns({ label, links }: { label: string; links: ColumnLink[] }) {
  return (
    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
      <h3 className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
        {label}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-sm text-foreground/85 hover:text-primary transition-colors"
            >
              <span className="border-b border-transparent group-hover:border-primary transition-colors">
                {link.label}
              </span>
              {link.external && (
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 -translate-x-0.5 group-hover:opacity-70 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FooterColumns;
