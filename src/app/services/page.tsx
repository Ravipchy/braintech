
import type { Metadata } from 'next';
import { ServicesClientPage } from '@/components/services-client-page';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the innovative services offered by BrainTech Technology, from AI Solutions to Web Development and Data Analytics.',
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
