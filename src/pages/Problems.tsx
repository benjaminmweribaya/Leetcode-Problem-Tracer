import { useEffect, useMemo, useState } from 'react';
import { PROBLEMS, ALL_TOPICS, ProblemRow } from '@/data/problems';
import { useTracker } from '@/state/tracker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { setPageMetadata } from '@/lib/seo';
import { toast } from 'sonner';

export default function Problems() {
  useEffect(() => setPageMetadata('LeetTracker – Problems', 'Search and track LeetCode problems by difficulty and topic.', '/problems'), []);
  const { state, markStatus, logAttempt, setNotes } = useTracker();
  const [query, setQuery] = useState('');
  const [difficulty, setDifficulty] = useState<string>('All');
  const [topic, setTopic] = useState<string>('All');
  const [time, setTime] = useState<number>(30);

  const list = useMemo(() => PROBLEMS.filter(p => {
    const okQ = !query || p.title.toLowerCase().includes(query.toLowerCase());
    const okD = difficulty === 'All' || p.difficulty === difficulty;
    const okT = topic === 'All' || p.topics.includes(topic);
    return okQ && okD && okT;
  }), [query, difficulty, topic]);

  const onSolved = (p: ProblemRow) => { markStatus(p.id, 'solved'); logAttempt(p.id, time); toast.success(`Marked "${p.title}" as solved`); };
  const onAttempted = (p: ProblemRow) => { markStatus(p.id, 'attempted'); logAttempt(p.id, time); toast("Logged an attempt"); };

  return (
    <main className="min-h-screen">
      <section className="container py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Problems</h1>
          <p className="text-muted-foreground">Search, filter, and log your progress</p>
        </header>
        <div className="grid gap-3 md:grid-cols-4 mb-6">
          <Input placeholder="Search by title…" value={query} onChange={e=>setQuery(e.target.value)} className="md:col-span-2" />
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger><SelectValue placeholder="Difficulty" /></SelectTrigger>
            <SelectContent>
              {['All','Easy','Medium','Hard'].map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={topic} onValueChange={setTopic}>
            <SelectTrigger><SelectValue placeholder="Topic" /></SelectTrigger>
            <SelectContent>
              {['All',...ALL_TOPICS].map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4 flex items-center gap-3">
          <label className="text-sm text-muted-foreground">Attempt time (min)</label>
          <Input type="number" value={time} onChange={e=>setTime(parseInt(e.target.value||'0'))} className="w-28" />
        </div>

        <ul className="space-y-3">
          {list.map(p => {
            const entry = state.entries[p.id];
            return (
              <li key={p.id} className="border rounded-lg p-4 bg-card">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <a href={p.url} target="_blank" rel="noreferrer" className="font-medium story-link">{p.title}</a>
                    <div className="text-xs text-muted-foreground mt-1">{p.difficulty} • {p.topics.join(', ')}</div>
                    {entry?.notes ? <p className="text-sm mt-2">{entry.notes}</p> : null}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button variant="secondary" onClick={() => onAttempted(p)}>Attempted</Button>
                    <Button variant="hero" onClick={() => onSolved(p)}>Solved</Button>
                  </div>
                </div>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  <Input placeholder="Add notes…" onBlur={(e)=>setNotes(p.id, e.target.value)} defaultValue={entry?.notes||''} />
                  <div className="text-sm text-muted-foreground self-center">Attempts: {entry?.attempts||0} • Last status: {entry?.status||'unsolved'}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
