export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/how-i-work', label: 'How I work' },
];

export const socialLinks: NavLink[] = [
  { href: 'https://www.linkedin.com/in/karin-tomazic', label: 'LinkedIn' },
  { href: 'https://github.com/karintomazic', label: 'GitHub' },
  { href: 'mailto:tomazickarin@gmail.com', label: 'Email' },
];
