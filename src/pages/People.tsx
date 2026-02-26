import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, GraduationCap } from "lucide-react"
import { Link } from "react-router-dom"
import { loadDirector, loadCurrentStudents, loadAlumni } from "@/lib/utils"

export default function People() {
  const director = loadDirector()
  const currentStudents = loadCurrentStudents()
  const alumni = loadAlumni()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-16 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute inset-0 hero-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Meet the brilliant minds conducting research and producing results for our lab
            </p>
          </div>
        </div>
      </section>

      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Director Section */}
          <section className="mb-20 pt-12 text-center">
            <h2 className="text-3xl font-bold mb-10 section-accent-center">Lab Director</h2>
            <Card className="max-w-4xl mx-auto gradient-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="text-center">
                    <img
                      src={director.image || "/placeholder.svg"}
                      alt={director.name}
                      className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="space-y-2">
                      <Link
                        to={`mailto:${director.email}`}
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Link>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">{director.name}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{director.title}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{director.bio}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Research Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {director.interests.map((interest: string, index: number) => (
                          <Badge key={index} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Current Students */}
          <section className="mb-20 text-center">
            <h2 className="text-3xl font-bold mb-10 section-accent-center">Current Students</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {currentStudents.map((student, index) => (
                <Card key={index} className="card-lift group">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <img
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-lg font-semibold mb-1">{student.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Badge variant="outline">{student.level}</Badge>
                        <Badge variant="secondary">{student.year}</Badge>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {student.bio && (
                        <div>
                          <h4 className="font-medium text-sm mb-1">About</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{student.bio}</p>
                        </div>
                      )}
                      <Link
                        to={`mailto:${student.email}`}
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Alumni */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-10 section-accent-center">Alumni</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {alumni.map((alum, index) => (
                <Card key={index} className="card-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{alum.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          <Badge variant="outline">{alum.degree} {alum.graduationYear}</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{alum.work}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Interested in Joining?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              We're always looking for new opportunities. If you're interested in collaborating with us, or joining our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/people">Contact Our Team</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/publications">View Publications</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
