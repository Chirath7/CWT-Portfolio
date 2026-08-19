import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Creative Web Technology',
  description: 'Start a data engineering or analytics project with Creative Web Technology.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
