import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Clock, 
  MapPin, 
  Github, 
  UserCheck, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  ExternalLink,
  PenLine
} from "lucide-react"

const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL || ""

const steps = [
  { id: 1, title: "Logging Hours", icon: Clock },
  { id: 2, title: "Lab Presence", icon: MapPin },
  { id: 3, title: "Codebase", icon: Github },
  { id: 4, title: "Writing", icon: PenLine },
  { id: 5, title: "Getting Started", icon: UserCheck },
]

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative mt-16 pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute inset-0 hero-glow"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to the <span className="gradient-text">AIIR Lab</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're excited to have you join our team! Let's get you set up with everything you need to know.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-start">
                <button
                  onClick={() => goToStep(step.id)}
                  className={`flex flex-col items-center group transition-all duration-300 ${
                    currentStep >= step.id ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep > step.id
                        ? "bg-primary text-primary-foreground"
                        : currentStep === step.id
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium hidden sm:block transition-colors ${
                      currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 sm:w-24 h-1 mx-2 mt-[22px] rounded-full transition-colors duration-300 ${
                      currentStep > step.id ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Logging Hours */}
          {currentStep === 1 && (
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-xl animate-in fade-in slide-in-from-right-4 duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Logging Hours</h2>
                    <p className="text-muted-foreground">How to accurately track and report your work hours</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-foreground/90">
                  <p className="leading-relaxed">
                    Accurate time tracking is essential to comply with University standards. 
                    Here's what you need to know:
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                      <div>
                        <h3 className="font-semibold mb-1">Daily Submission</h3>
                        <p className="text-sm text-muted-foreground">
                          Submit your logged hours at the end of each day. This ensures accurate tracking 
                          and makes compliance much easier.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                      <div>
                        <h3 className="font-semibold mb-1">Friday Deadline</h3>
                        <p className="text-sm text-muted-foreground">
                          At the very latest, all times must be entered and submitted by <strong>noon every Friday</strong>. 
                          No exceptions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                      <div>
                        <h3 className="font-semibold mb-1">No Weekend Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          There should be no hours logged on weekend days (Saturday or Sunday).
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                    <p className="text-sm font-medium">
                      Log your time at the end of each work session rather than trying to remember at the end of the week. 
                      It's more accurate and takes less time overall!
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-8">
                  <Button onClick={nextStep} size="lg">
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Lab Presence */}
          {currentStep === 2 && (
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-xl animate-in fade-in slide-in-from-right-4 duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Physical Presence</h2>
                    <p className="text-muted-foreground">Building community through regular in-person collaboration</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-foreground/90">
                  <p className="leading-relaxed">
                    We strive to be flexible with scheduling, but maintaining a physical presence in the lab 
                    is a <strong>strict requirement</strong>. Regular in-person time is crucial for building relationships, 
                    fostering collaboration, and accelerating your research.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                      <h3 className="font-bold text-lg mb-3 text-primary">Minimum Expectation</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Be present in the lab <strong>two days per week</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Alternate arrangements must be discussed with <strong>Professor Mansouri</strong></span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-5 rounded-xl bg-muted/50 border border-border">
                      <h3 className="font-bold text-lg mb-3">Benefits of Lab Time</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary">→</span>
                          <span>Quick problem-solving with teammates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">→</span>
                          <span>Access to specialized equipment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">→</span>
                          <span>Spontaneous research discussions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary">→</span>
                          <span>Mentorship opportunities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg border-l-4 border-chart-2 bg-chart-2/5">
                    <p className="text-sm">
                      If you need to request alternate arrangements due to classes, appointments, or other commitments, 
                      please discuss this directly with Professor Mansouri in advance.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={prevStep} size="lg">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={nextStep} size="lg">
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Codebase Maintenance */}
          {currentStep === 3 && (
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-xl animate-in fade-in slide-in-from-right-4 duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Codebase Maintenance</h2>
                    <p className="text-muted-foreground">Keeping your GitHub repository up-to-date and tidy</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-foreground/90">
                  <p className="leading-relaxed">
                    We ask that each and every member maintains an <strong>up-to-date and tidy GitHub repository</strong>. 
                    Not only is this a good and professional practice, but it allows us to keep up with your work 
                    and have a good understanding of your progress.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-5 rounded-xl bg-muted/50 border border-border">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">!</span>
                        Best Practices
                      </h3>
                      <div className="grid gap-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <p className="font-medium">Commit Frequently</p>
                            <p className="text-sm text-muted-foreground">Make small, focused commits with clear messages. Aim for at least one commit per work session.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <p className="font-medium">Keep README Updated</p>
                            <p className="text-sm text-muted-foreground">Document setup instructions, dependencies, and usage examples. A good README is invaluable.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <p className="font-medium">Use Branches</p>
                            <p className="text-sm text-muted-foreground">Create feature branches for new work. Keep main/master stable and deployable.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                          <div>
                            <p className="font-medium">Never Commit Secrets</p>
                            <p className="text-sm text-muted-foreground">Use .env files and .gitignore. API keys and passwords should never appear in commits.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-chart-2/10 border border-chart-2/30">
                        <h4 className="font-semibold text-chart-2 mb-2">Good Commit Message</h4>
                        <code className="text-sm bg-background/50 px-2 py-1 rounded block">
                          "Add BERT tokenizer with custom vocab"
                        </code>
                      </div>
                      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                        <h4 className="font-semibold text-destructive mb-2">Bad Commit Message</h4>
                        <code className="text-sm bg-background/50 px-2 py-1 rounded block">
                          "fixed stuff"
                        </code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                    <p className="text-sm font-medium">
                      All lab projects should be in the organization's GitHub. 
                      This allows us to track your progress and maintain a consistent, professional organization codebase.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={prevStep} size="lg">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={nextStep} size="lg">
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Writing As You Go */}
          {currentStep === 4 && (
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-xl animate-in fade-in slide-in-from-right-4 duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <PenLine className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Writing As You Go</h2>
                    <p className="text-muted-foreground">Translating technical progress into paper production</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-foreground/90">
                  <p className="leading-relaxed">
                    To ensure technical progress translates to paper production, we emphasize a 
                    <strong> research-first approach</strong>. Planning your writing before diving into code 
                    leads to more focused experiments and stronger publications.
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                      <div>
                        <h3 className="font-semibold mb-1">Develop Your Research Question</h3>
                        <p className="text-sm text-muted-foreground">
                          Before writing any code, develop a robust research question and potential answer. 
                          This gives your experiments clear direction and purpose.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                      <div>
                        <h3 className="font-semibold mb-1">Draft Your Introduction First</h3>
                        <p className="text-sm text-muted-foreground">
                          Ideally, a draft of your Introduction should be completed <strong>before experiments begin</strong>. 
                          This helps clarify your motivation, contributions, and expected outcomes.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                      <div>
                        <h3 className="font-semibold mb-1">Iterate and Refine</h3>
                        <p className="text-sm text-muted-foreground">
                          As you run experiments, continuously update your paper draft. 
                          This ensures your writing stays aligned with your actual findings.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                    <p className="text-sm font-medium">
                      This approach may feel counterintuitive at first, but it leads to more impactful research 
                      and significantly smoother paper writing when results are ready.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={prevStep} size="lg">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button onClick={nextStep} size="lg">
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Getting Started (For New Members) */}
          {currentStep === 5 && (
            <Card className="border-0 bg-card/80 backdrop-blur-sm shadow-xl animate-in fade-in slide-in-from-right-4 duration-300">
              <CardContent className="p-8">
                <div className="text-center py-4">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                  <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                    As a new member, you'll need to be set up on payroll, assigned to a project, 
                    and added to the GitHub organization. If any of these haven't been addressed, 
                    please reach out to us ASAP.
                  </p>
                  
                  <div className="p-6 rounded-xl bg-muted/50 border border-border max-w-md mx-auto mb-8">
                    <h3 className="font-semibold mb-3">Request GitHub Access</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use the form below to request an invitation to the GitHub organization. 
                      You'll need to provide:
                    </p>
                    <ul className="text-sm text-left text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Your first and last name</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>Email associated with your GitHub account</span>
                      </li>
                    </ul>
                  </div>

                  <Button size="lg" asChild>
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Request GitHub Invitation <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <p className="mt-6 text-sm text-muted-foreground max-w-md mx-auto">
                    Once you're added, please take the time to carefully read through the GitHub Organization's README.
                  </p>
                </div>

                <div className="flex justify-start mt-8">
                  <Button variant="outline" onClick={prevStep} size="lg">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

