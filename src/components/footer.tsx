import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3">
              <img src={`${import.meta.env.BASE_URL}images/Logo_NoBack_White.png`} alt="AIIR Lab Logo" width={80} height={40} />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 ml-2">
              The Artificial Intelligence and Information Retrieval Laboratory at the University of Southern Maine is dedicated
              to producing AI and information retrieval research that benefits communities across the world, starting with Maine.
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; 2025 AIIR Lab, University of Southern Maine. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/people"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                People
              </Link>
              <Link
                to="/projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/publications"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Publications
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>University of Southern Maine</p>
              <p>Science Building</p>
              <p>Portland, ME 04104</p>
              <a href="mailto:behrooz.mansouri@maine.edu" className="block hover:text-foreground transition-colors">
                behrooz.mansouri@maine.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
