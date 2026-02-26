import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, Users } from "lucide-react"
import { loadPublications } from "@/lib/utils"

export default function Publications() {
  const publications = loadPublications()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-16 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute inset-0 hero-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Discover our research contributions to the fields of artificial intelligence and information retrieval
            </p>
          </div>
        </div>
      </section>

      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Publications List */}
          <section className="pt-8">
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <Card key={index} className="card-lift group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-balance leading-tight group-hover:text-primary transition-colors">{publication.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{publication.authors.join(", ")}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{publication.year}</span>
                          </div>
                          <Badge variant="outline">{publication.venue}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{publication.abstract}</p>

                    {publication.doi && publication.doi !== "#" && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Publication
                        </a>
                      </Button>
                    )}
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
