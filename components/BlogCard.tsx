import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Blog } from '@/data/blogdata';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const truncatedExcerpt = blog.excerpt.length > 150 
    ? blog.excerpt.slice(0, 150) + '...' 
    : blog.excerpt;

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <article className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group-hover:border-primary/20">
        {blog.image && (
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {blog.title}
          </h2>
          
          <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
            {truncatedExcerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}