import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useMemo } from 'react';
import { useTracker } from '@/state/tracker';
import { PROBLEMS } from '@/data/problems';

export default function DifficultyChart() {
  const { state } = useTracker();
  const data = useMemo(() => {
    const buckets = {
      Easy: { name: 'Easy', solved: 0, attempted: 0, total: 0 },
      Medium: { name: 'Medium', solved: 0, attempted: 0, total: 0 },
      Hard: { name: 'Hard', solved: 0, attempted: 0, total: 0 },
    } as Record<string, any>;
    PROBLEMS.forEach(p => {
      buckets[p.difficulty].total++;
      const entry = state.entries[p.id];
      if (entry?.status === 'solved') buckets[p.difficulty].solved++;
      if (entry?.status === 'attempted') buckets[p.difficulty].attempted++;
    });
    return Object.values(buckets);
  }, [state]);

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip />
          <Bar dataKey="solved" stackId="a" fill="hsl(var(--primary))" />
          <Bar dataKey="attempted" stackId="a" fill="hsl(var(--accent))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
