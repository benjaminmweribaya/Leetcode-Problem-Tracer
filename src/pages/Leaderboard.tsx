import { useEffect } from 'react';
import { setPageMetadata } from '@/lib/seo';

export default function Leaderboard() {
  useEffect(() => setPageMetadata('LeetTracker – Leaderboard', 'Global ranking based on consistency and speed.', '/leaderboard'), []);
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
      <p className="text-muted-foreground mb-6">Coming soon: global rankings, seasons, and friend comparisons.</p>
      <div className="rounded-lg border p-6 bg-card">We will populate this with real data once Supabase is connected.</div>
    </main>
  );
}
