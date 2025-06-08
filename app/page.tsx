import { blogData } from '@/data/blogdata';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to MyBlog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover the latest insights, tutorials, and trends in modern web development. 
          From cutting-edge frameworks to timeless best practices.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
}