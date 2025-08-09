import { ALL_TOPICS, PROBLEMS } from '@/data/problems';
import { useTracker } from '@/state/tracker';

export default function TopicHeatmap() {
  const { state } = useTracker();

  const scores = ALL_TOPICS.map(topic => {
    const related = PROBLEMS.filter(p => p.topics.includes(topic));
    const solved = related.filter(p => state.entries[p.id]?.status === 'solved').length;
    const ratio = related.length ? solved / related.length : 0;
    return { topic, ratio, solved, total: related.length };
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {scores.map(({ topic, ratio, solved, total }) => (
        <div key={topic} className="rounded-md p-3 border bg-gradient-to-br from-secondary to-secondary/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">{topic}</span>
            <span className="text-xs text-muted-foreground">{solved}/{total}</span>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div className="h-full rounded-full" style={{ width: `${Math.round(ratio*100)}%`, backgroundColor: `hsl(var(--primary))` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
