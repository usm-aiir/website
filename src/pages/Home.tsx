import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Search, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { loadResearchAreas, loadRecentNews } from "@/lib/utils"

export default function Home() {
  const researchAreasData = loadResearchAreas()
  const recentNews = loadRecentNews()

  // Map icon names to actual icon components
  const iconMap = {
    Brain: Brain,
    Search: Search,
    Users: Users,
  }

  const researchAreas = researchAreasData.map(area => ({
    ...area,
    icon: iconMap[area.icon as keyof typeof iconMap] || Brain
  }))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-10 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-60"></div>
        <div className="absolute inset-0 hero-glow"></div>
        <div className="decoration-dots top-20 -left-20 rotate-12"></div>
        <div className="decoration-dots bottom-10 -right-20 -rotate-12"></div>
        <div className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-balance">
              The <span className="gradient-text">Artificial Intelligence</span> and <span className="gradient-text">Information Retrieval</span> Laboratory
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 text-balance">
              at the University of Southern Maine
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
              Pioneering AI research and innovative solutions in information retrieval, 
              natural language processing, and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-glow" asChild>
                <Link to="/projects">
                  Explore Our Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/people">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="decoration-dots top-10 right-10 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 section-accent-center">Research Focus Areas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
              Our interdisciplinary approach combines theoretical foundations with practical applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 bg-card/50 backdrop-blur-sm card-lift"
              >
                <CardContent className="p-8">
                  <div className="icon-gradient w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                    <area.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 section-accent-center">Recent News</h2>
            <p className="text-muted-foreground text-lg mt-6">
              Stay updated with our latest achievements and developments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentNews.map((news, index) => (
              <Card key={index} className="card-lift group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="group-hover:bg-primary/10 transition-colors">{news.badge}</Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-balance group-hover:text-primary transition-colors">{news.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground font-medium">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">16+</div>
              <div className="text-muted-foreground font-medium">Publications</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">7</div>
              <div className="text-muted-foreground font-medium">Team Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground font-medium">Years of Research</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
