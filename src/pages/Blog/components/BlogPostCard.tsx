import { Clock, User, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card';
import type { BlogPost } from '@/types/blog';

export default function BlogPostCard({
  title,
  slug,
  excerpt,
  author,
  coverImage,
  publishedAt,
  readTime,
  tags
}: BlogPost) {
  const navigate = useNavigate();

  return (
    <Card 
      className="group cursor-pointer overflow-hidden"
      onClick={() => navigate(`/blog/${slug}`)}
      hover
    >
      {/* Image */}
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors">
          {title}
        </h2>

        <p className="text-gray-400 line-clamp-2">{excerpt}</p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div 
              key={tag}
              className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full text-sm text-gray-300"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}