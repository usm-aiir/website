import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/footer"
import { loadProducts } from "@/lib/utils"

export default function Products() {
  const products = loadProducts()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-16 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute inset-0 hero-glow"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Customer-ready applications developed in our lab.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold section-accent-left">Available Products</h2>
            <Badge variant="secondary" className="text-sm px-4 py-1">
              {products.length} {products.length === 1 ? 'Product' : 'Products'}
            </Badge>
          </div>

          <div className="grid gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden card-lift gradient-border">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    {product.githubUrl && (
                      <Button asChild>
                        <a href={product.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                    {product.docsUrl && (
                      <Button variant="outline" asChild>
                        <a href={product.docsUrl} target="_blank" rel="noopener noreferrer">
                          Documentation
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Our Products?</h2>
          <p className="text-muted-foreground mb-6">
            All our products are open source. Feel free to use them, contribute, or reach out 
            if you need custom solutions or enterprise support.
          </p>
          <Button variant="outline" asChild>
            <a href="mailto:behrooz.mansouri@maine.edu">
              Contact Us
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
