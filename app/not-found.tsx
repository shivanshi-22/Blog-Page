import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <Search className="h-20 w-20 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Blog Post Not Found
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sorry, we couldn't find the blog post you're looking for. 
            It might have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>
        
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <Home className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}