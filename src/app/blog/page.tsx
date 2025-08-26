"use client";

import { useState } from "react";
import { posts } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedOnScroll } from "@/components/animated-on-scroll";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';
import { FaqSection } from "@/components/common/faq-section";

// export const metadata: Metadata = {
//   title: 'Blog',
//   description: 'Insights, trends, and thoughts from the BrainTech team.',
// };

const allCategories = ["All", ...Array.from(new Set(posts.map(p => p.category)))];

const blogFaqs = [
  {
    question: "Who writes the articles on the BrainTech blog?",
    answer: "Our articles are written by our in-house team of expert engineers, designers, and strategists who are passionate about sharing their knowledge and insights on the latest industry trends."
  },
  {
    question: "How often do you publish new content?",
    answer: "We aim to publish new articles a few times a month. You can subscribe to our newsletter to get notified whenever a new post is published."
  },
  {
    question: "Can I suggest a topic for a future blog post?",
    answer: "Absolutely! We love hearing from our readers. If you have a topic you'd like us to cover, please feel free to reach out to us through our contact page."
  },
  {
    question: "Can I share your articles on my own website or social media?",
    answer: "Yes, you are welcome to share our articles. We just ask that you please provide a clear attribution and a link back to the original post on our website."
  },
  {
    question: "Do you accept guest posts?",
    answer: "Currently, we do not accept guest posts. All of our content is created by our internal team to ensure the highest quality and consistency for our readers."
  }
];


export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = posts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(post => 
      selectedCategory === "All" || post.category === selectedCategory
    ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <section className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedOnScroll animation="fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">BrainTech Blog</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Insights on AI, Development, Design, and the Future of Technology.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {allCategories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Post Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimatedOnScroll key={post.slug} animation="fadeInUp" delay={index * 0.1}>
                  <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                    <div className="overflow-hidden">
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={600}
                          height={400}
                          data-ai-hint={post.imageHint}
                          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                      <CardTitle className="text-xl h-14 line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground pt-2">{post.date}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground line-clamp-4">{post.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button asChild variant="link" className="p-0 h-auto">
                          <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </Card>
                </AnimatedOnScroll>
              ))}
            </div>
          ) : (
             <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No articles found.</p>
                <p className="mt-2">Try adjusting your search or filter.</p>
             </div>
          )}
        </div>
      </section>
      <FaqSection items={blogFaqs} />
    </>
  );
}
