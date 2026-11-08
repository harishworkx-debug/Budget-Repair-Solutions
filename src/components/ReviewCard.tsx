import { Star, ThumbsUp, Wrench } from 'lucide-react';
import type { Review } from '@/data/reviews';

export function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating
              ? 'fill-amber-400 text-amber-400'
              : star - 0.5 <= rating
              ? 'fill-amber-400/50 text-amber-400'
              : 'text-slate-300'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  const initial = review.author.charAt(0);
  const isPositive = review.sentiment === 'positive';

  // Dynamic avatar colors based on initial
  const avatarColors = [
    'bg-sky-600',
    'bg-navy-800',
    'bg-emerald-600',
    'bg-indigo-600',
    'bg-amber-600',
    'bg-rose-600',
  ];
  const charCode = review.author.charCodeAt(0) || 0;
  const avatarBg = avatarColors[charCode % avatarColors.length];

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      <div>
        {/* Author Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white ${avatarBg}`}
            >
              {initial}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-bold text-navy-900">{review.author}</h3>
              </div>
              {review.authorBadge && (
                <p className="text-xs text-slate-500">{review.authorBadge}</p>
              )}
            </div>
          </div>

          {/* Google badge icon */}
          <div className="flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
            <span className="font-bold text-blue-600">G</span>
            <span>Google</span>
          </div>
        </div>

        {/* Rating and Date */}
        <div className="mt-4 flex items-center gap-2">
          <StarRating rating={review.rating} />
          <span className="text-xs text-slate-500">{review.date}</span>
        </div>

        {/* Review Text */}
        <p className="mt-3 text-sm leading-relaxed text-slate-700">{review.content}</p>

        {/* Positive / Negative Attributes */}
        {review.tags && review.tags.length > 0 && (
          <div className="mt-4 border-t border-slate-100 pt-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {isPositive ? 'Positive Attributes' : 'Feedback'}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {review.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                    isPositive
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-rose-50 text-rose-700 border border-rose-200'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Services Mentioned */}
        {review.services && review.services.length > 0 && (
          <div className="mt-3 border-t border-slate-100 pt-3">
            <p className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <Wrench className="h-3 w-3" />
              Services Mentioned
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {review.services.map((svc) => (
                <span
                  key={svc}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer / Likes */}
      {review.likes !== undefined && review.likes > 0 && (
        <div className="mt-4 flex items-center gap-1 text-xs text-slate-400">
          <ThumbsUp className="h-3.5 w-3.5" />
          <span>{review.likes} helpful</span>
        </div>
      )}
    </article>
  );
}

