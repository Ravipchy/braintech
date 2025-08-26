
import { posts } from '@/lib/blog-data';
import type { BlogPost } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { Button } from '@/components/ui/button';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-8">
            <Button asChild variant="ghost" className="pl-0">
                <Link href="/blog" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
        </div>
        
        <header className="mb-8">
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
            <span>{post.date}</span>
            <span>&bull;</span>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={post.imageHint}
          />
        </div>

        <div 
            className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-headline prose-headings:tracking-tighter prose-headings:font-bold
                       prose-a:text-primary hover:prose-a:text-primary/80 prose-a:transition-colors"
            dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </article>
  );
}

// This function is needed for Next.js to know which slugs are available at build time
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
