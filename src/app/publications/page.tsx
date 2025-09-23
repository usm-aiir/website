import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Calendar, Users, Search } from "lucide-react"
import Link from "next/link"
import { loadPublications, getPublicationsByYear, getPublicationYears } from "@/lib/utils"

export default function PublicationsPage() {
  const publications = loadPublications()

  const publicationsByYear = getPublicationsByYear(publications)
  const years = getPublicationYears(publications)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Discover our research contributions to the fields of artificial intelligence and information retrieval
            </p>
          </div>

          {/* Publications List */}
          <section>
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-balance leading-tight">{publication.title}</CardTitle>
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
                          <Badge variant="outline">{publication.venue}</Badge>                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{publication.abstract}</p>

                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={publication.pdfUrl  || "#"}>
                          <FileText className="h-4 w-4 mr-2" />
                          PDF
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`https://doi.org/${publication.doi}`} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          DOI
                        </Link>
                      </Button>
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
