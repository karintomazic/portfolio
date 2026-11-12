export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/how-i-work', label: 'How I work' },
];

export interface SocialLink extends NavLink {
  icon: 'linkedin' | 'github' | 'mail';
}

export const socialLinks: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/karin-tomazic', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://github.com/karintomazic', label: 'GitHub', icon: 'github' },
  { href: 'mailto:tomazickarin@gmail.com', label: 'Email', icon: 'mail' },
];
