import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Search, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { loadResearchAreas, loadRecentNews } from "@/lib/utils"

export default function HomePage() {
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
        <div className="absolute inset-0 hero-glow"></div>
        <div className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold text-balance">
              University of Southern Maine's
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-balance">
              <span className="gradient-text">Artificial Intelligence and Information Retrieval Laboratory</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
              Maine's first Information Retrieval Laboratory, pioneering AI research and innovative solutions 
              at the University of Southern Maine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Research Focus Areas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our interdisciplinary approach combines theoretical foundations with practical applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <area.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Recent News</h2>
              <p className="text-muted-foreground text-lg">
                Stay updated with our latest achievements and developments
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{news.badge}</Badge>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-balance">{news.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">13+</div>
              <div className="text-muted-foreground">Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">7</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years of Research</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
