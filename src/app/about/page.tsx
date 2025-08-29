import type { Metadata } from 'next';
import { AboutClientPage } from './client-page';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about BrainTech Technology\'s mission, vision, and the innovative team driving our success.',
};

export default function AboutPage() {
  return <AboutClientPage />;
}
