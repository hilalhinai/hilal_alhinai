import { Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react';
import { socialLinks } from '@/lib/site';
import { cn } from '@/lib/utils';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
  mail: Mail,
} as const;

export function SocialIcons({ className, size = 17 }: { className?: string; size?: number }) {
  return (
    <ul className={cn('flex items-center gap-1.5', className)}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon as keyof typeof iconMap];
        const isMail = social.href.startsWith('mailto:');
        return (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground hover:shadow-soft"
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
