import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Blog } from '@/data/blogdata';

interface BlogDetailProps {
  blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Split content into paragraphs using \n
  const paragraphs = blog.content.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <article className="max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
      >
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          {blog.title}
        </h1>
        
        <div className="flex items-center space-x-6 text-muted-foreground mb-8">
          <div className="flex items-center space-x-2">
            <User className="h-5 w-5" />
            <span className="font-medium">{blog.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {blog.image && (
          <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 leading-relaxed text-foreground/90">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}