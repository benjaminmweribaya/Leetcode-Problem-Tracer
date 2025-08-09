import { useEffect } from 'react';
import DifficultyChart from '@/components/analytics/DifficultyChart';
import TopicHeatmap from '@/components/analytics/TopicHeatmap';
import { useTracker } from '@/state/tracker';
import { setPageMetadata } from '@/lib/seo';

export default function Dashboard() {
  const { totalSolved, currentStreak } = useTracker();
  useEffect(() => setPageMetadata('LeetTracker – Dashboard', 'Your coding progress, streaks, and insights in one place.', '/dashboard'), []);

  return (
    <main>
      <section className="container py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your LeetCode journey</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6 bg-card">
            <div className="text-sm text-muted-foreground">Solved</div>
            <div className="text-3xl font-bold mt-1">{totalSolved}</div>
            <p className="text-sm text-muted-foreground mt-2">Keep it up!</p>
          </div>
          <div className="rounded-lg border p-6 bg-card">
            <div className="text-sm text-muted-foreground">Current Streak</div>
            <div className="text-3xl font-bold mt-1">{currentStreak} day{currentStreak===1?'':'s'}</div>
            <p className="text-sm text-muted-foreground mt-2">Aim for consistency</p>
          </div>
          <div className="rounded-lg border p-6 bg-card">
            <div className="text-sm text-muted-foreground">Next Goal</div>
            <div className="text-3xl font-bold mt-1">+5 solved</div>
            <p className="text-sm text-muted-foreground mt-2">Unlock a milestone badge</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <div className="rounded-lg border p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Difficulty Heatmap</h2>
            <DifficultyChart />
          </div>
          <div className="rounded-lg border p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Topic Strengths</h2>
            <TopicHeatmap />
          </div>
        </div>
      </section>
    </main>
  );
}
