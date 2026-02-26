import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Footer } from "@/components/footer"
import { loadCurrentProjects } from "@/lib/utils"

export default function Projects() {
  const currentProjects = loadCurrentProjects()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-16 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute inset-0 hero-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Explore our cutting-edge research initiatives that push the boundaries of artificial intelligence and
              information retrieval
            </p>
          </div>
        </div>
      </section>

      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Current Projects */}
          <section className="pt-12">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold section-accent-left">Current Projects</h2>
              <Badge variant="secondary" className="text-sm px-4 py-1">
                {currentProjects.length} Active
              </Badge>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 mt-6">
              {currentProjects.map((project, index) => (
                <Card key={index} className="card-lift group">
                  <CardHeader>
                    <CardTitle className="text-xl text-balance group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.paperUrl && project.paperUrl !== "#" && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Papers
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
