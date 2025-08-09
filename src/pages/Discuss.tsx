import { useEffect } from 'react';
import { setPageMetadata } from '@/lib/seo';

export default function Discuss() {
  useEffect(() => setPageMetadata('LeetTracker – Discuss', 'Share solutions and strategies with the community.', '/discuss'), []);
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold mb-2">Discuss</h1>
      <p className="text-muted-foreground mb-6">Coming soon: threads, tags, and upvotes.</p>
      <div className="rounded-lg border p-6 bg-card">Join the conversation once discussions are enabled.</div>
    </main>
  );
}
