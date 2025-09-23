import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { loadCurrentProjects, loadCompletedProjects } from "@/lib/utils"

export default function ProjectsPage() {
  const currentProjects = loadCurrentProjects()
  const completedProjects = loadCompletedProjects()


  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Explore our cutting-edge research initiatives that push the boundaries of artificial intelligence and
              information retrieval
            </p>
          </div>

          {/* Current Projects */}
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Current Projects</h2>
              <Badge variant="secondary" className="text-sm">
                {currentProjects.length} Active
              </Badge>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-balance">{project.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Team Members</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{project.team.join(", ")}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.githubUrl || "#"}>
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.paperUrl  || "#"}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Papers
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Completed Projects */}
          {/* <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Completed Projects</h2>
              <Badge variant="outline" className="text-sm">
                {completedProjects.length} Completed
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-balance">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm mb-1">Outcome</h4>
                        <p className="text-sm text-muted-foreground">{project.outcome}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Team</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{project.team.join(", ")}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section> */}
        </div>
      </div>

      <Footer />
    </div>
  )
}
