import { useEffect } from 'react';
import { setPageMetadata } from '@/lib/seo';

export default function Friends() {
  useEffect(() => setPageMetadata('LeetTracker – Friends', 'Add friends and compare progress.', '/friends'), []);
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-2">Friends</h1>
      <p className="text-muted-foreground mb-6">Coming soon: friend requests, activity feed, and comparisons.</p>
      <div className="rounded-lg border p-6 bg-card">This social hub will light up after Supabase connection.</div>
    </main>
  );
}
