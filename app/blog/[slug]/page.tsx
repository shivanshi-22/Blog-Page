import { notFound } from 'next/navigation';
import { blogData } from '@/data/blogdata';
import BlogDetail from '@/components/BlogDetail';
import type { Metadata } from 'next';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = blogData.find((blog) => blog.slug === params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${blog.title} | DevBlog`,
    description: blog.excerpt,
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
      images: blog.image ? [{ url: blog.image, alt: blog.title }] : [],
    },
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BlogDetail blog={blog} />
    </div>
  );
}