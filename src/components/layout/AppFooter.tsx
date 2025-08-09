import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin } from 'lucide-react'

const AppFooter = () => {
    return (
        <footer className="border-t bg-background text-muted-foreground">
            <div className="container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                {/* Brand & Tagline */}
                <div>
                    <Link to="/" className="text-lg font-bold text-foreground hover:text-primary transition">
                        LeetTracker
                    </Link>
                    <p className="mt-2 text-sm">
                        Crack LeetCode with AI-powered tracking & smart practice. Stay consistent, solve smarter.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Navigation</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/problems" className="hover:text-primary transition">Problems</Link></li>
                        <li><Link to="/leaderboard" className="hover:text-primary transition">Leaderboard</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
                        <li><Link to="/auth" className="hover:text-primary transition">Get Started</Link></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/your-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com/your-handle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/your-handle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t py-4 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} LeetTracker. All rights reserved.
            </div>
        </footer>
    )
}

export default AppFooter
