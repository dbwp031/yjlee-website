import { Link } from 'react-router-dom';
import type { BlogPost } from '../../types';
import { Card, CardContent } from '../common';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link to={`/blog/${post.slug}`}>
      <Card hover className="h-full">
        <CardContent>
          <div className="flex items-center gap-2 mb-2">
            <time className="text-sm text-gray-500">{formattedDate}</time>
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="text-gray-300">·</span>
                <div className="flex gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-blue-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
