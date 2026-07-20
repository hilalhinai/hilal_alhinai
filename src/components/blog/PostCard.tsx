import { ArrowUpRight } from 'lucide-react';
import { categoryLabel, type Post } from '@/lib/blog-config';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';

export function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  return (
    <Reveal delay={index * 0.07} className="h-full">
      <Card href={`/blog/${post.slug}`} className="group h-full">
        <article className="flex h-full flex-col p-7">
          <div className="flex items-start justify-between gap-4">
            <Badge variant="accent">{categoryLabel(post.category)}</Badge>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            />
          </div>
          <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight">{post.title}</h3>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">{post.description}</p>
          <p className="mt-auto pt-6 text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden> · </span>
            {post.readingMinutes} min read
          </p>
        </article>
      </Card>
    </Reveal>
  );
}
