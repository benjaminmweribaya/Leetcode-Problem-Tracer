import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { setPageMetadata } from '@/lib/seo';

export default function Auth() {
  useEffect(() => setPageMetadata('LeetTracker – Sign In', 'Sign in or create your LeetTracker account.', '/auth'), []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    // Mock sign in until Supabase is connected
    await new Promise(r => setTimeout(r, 400));
    localStorage.setItem('mock-user-email', email);
    setLoading(false);
    toast.success('Signed in (mock). Connect Supabase to enable real auth.');
  };
  const signUp = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 500));
    localStorage.setItem('mock-user-email', email);
    setLoading(false);
    toast.success('Account created (mock). Connect Supabase for real auth.');
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="container max-w-lg py-16">
        <h1 className="text-3xl font-bold mb-2">Welcome to LeetTracker</h1>
        <p className="text-muted-foreground mb-8">Track, analyze, and level up your coding skills.</p>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin" className="mt-6 space-y-4">
            <Input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
            <Button onClick={signIn} disabled={loading}>{loading ? 'Signing in…' : 'Sign In'}</Button>
            <p className="text-xs text-muted-foreground">To enable real email/password and OAuth, connect Supabase.</p>
          </TabsContent>
          <TabsContent value="signup" className="mt-6 space-y-4">
            <Input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <Input type="password" placeholder="Password (min 6 chars)" value={password} onChange={e=>setPassword(e.target.value)} />
            <Button variant="hero" onClick={signUp} disabled={loading}>{loading ? 'Creating…' : 'Create Account'}</Button>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
