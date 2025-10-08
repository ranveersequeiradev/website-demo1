import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Hero carousel data
const heroSlides = [
  {
    id: 1,
    label: "",
    title: "Taking AI from Pilot to Production",
    subtitle: "We build and scale enterprise-grade AI systems that move KPIs.",
    description: "From strategy and data to models, apps, and MLOps — we deliver end to end.",
    statsBar: "90 Days | 95% Uptime | 60% Cost Reduction",
    primaryButton: { text: "Get your Free AI Readiness Assessment", href: "#assessment" },
    secondaryButton: null,
    image: "/abstract-network-connections.jpg",
    imageAlt: "Abstract network connections visualization",
    centerAligned: true,
    backgroundStyle: "gradient-blue",
    metrics: [
      { label: "Deployment Time", value: "90 Days" },
      { label: "System Uptime", value: "95%" },
      { label: "Cost Reduction", value: "60%" }
    ]
  },
  {
    id: 2,
    label: "30+ deployments",
    title: "Your AI Pilot Succeeded. Now Scale It.",
    subtitle: "70% of AI pilots never reach production. The gap isn't vision or technology—it's implementation expertise.",
    description: "",
    statsBar: null,
    primaryButton: { text: "Talk to Our Team", href: "#contact" },
    secondaryButton: { text: "See Case Studies", href: "#case-studies" },
    image: null,
    imageAlt: "",
    centerAligned: false,
    backgroundStyle: "split-grey-blue",
    splitLayout: true,
    problemBoxes: [
      {
        title: "Performance Crashes",
        metric: "2s → 45s",
        description: "Latency balloons as usage scales and inference stacks aren't optimized."
      },
      {
        title: "Costs Explode", 
        metric: "50x Increase",
        description: "Uncapped tokens, redundant calls, and inefficient infra erase ROI."
      },
      {
        title: "Reliability Issues",
        metric: "85% Uptime", 
        description: "No guardrails, flaky pipelines, and missing observability break prod."
      }
    ],
    metrics: []
  },
  {
    id: 3,
    label: "",
    title: "AI That Integrates With Your Systems. And Actually Gets Adopted.",
    subtitle: "We build custom AI solutions for Marketing, Customer Service, and Operations—integrated with your CRM, ERP, and workflows in 90 days.",
    description: "",
    statsBar: null,
    primaryButton: { text: "Explore Solutions by Function", href: "#solutions" },
    secondaryButton: { text: "See ROI Calculator", href: "#roi-calculator" },
    image: null,
    imageAlt: "",
    centerAligned: true,
    backgroundStyle: "light-tech",
    highlightedWords: ["Integrates", "Adopted"],
    featurePills: [
      { icon: "🎧", text: "Customer Service AI" },
      { icon: "📢", text: "Marketing Automation" },
      { icon: "⚙️", text: "Operations AI" }
    ],
    metrics: []
  },
  {
    id: 4,
    label: "30+ successful deployments",
    title: "62% AWS Cost Reduction. 95% Uptime. 70% Faster Deployment.",
    subtitle: "Real results from real deployments. We've scaled AI for 30+ companies across Fintech, Healthcare, and Insurtech—with guaranteed outcomes.",
    description: "",
    statsBar: null,
    primaryButton: { text: "Read Case Studies", href: "#case-studies" },
    secondaryButton: { text: "Schedule Free Assessment", href: "#assessment" },
    image: null,
    imageAlt: "",
    centerAligned: true,
    backgroundStyle: "dark-results",
    highlightMetrics: ["62%", "95%", "70%"],
    clientStats: [
      { industry: "HealthTech", result: "50K users scaled" },
      { industry: "Digital Bank", result: "80% automation" },
      { industry: "Insurtech", result: "60% cost savings" }
    ],
    clientLogos: [
      { name: "HealthCorp", src: "/client-logo-health.svg" },
      { name: "FinanceFlow", src: "/client-logo-finance.svg" },
      { name: "InsureTech", src: "/client-logo-insure.svg" },
      { name: "MedDevice Co", src: "/client-logo-med.svg" }
    ],
    metrics: []
  },
  {
    id: 5,
    label: "",
    title: "Enterprise Quality. Startup Speed.",
    subtitle: "We Start in 2 weeks, Deploy in 90 days. No 18-month timelines. No $5M fees.",
    description: "",
    statsBar: null,
    primaryButton: { text: "See Why DevKraft", href: "#why-devkraft" },
    secondaryButton: null,
    image: null,
    imageAlt: "",
    centerAligned: true,
    backgroundStyle: "geometric-gradient",
    highlightedPhrases: [
      { text: "2 weeks", color: "text-orange-400" },
      { text: "90 days", color: "text-green-400" },
      { text: "No 18-month", color: "text-red-400" },
      { text: "No $5M", color: "text-red-400" }
    ],
    comparisonPoints: [
      { traditional: "18-month timelines", devkraft: "90 days", savings: "1/4 the time" },
      { traditional: "$5M+ enterprise fees", devkraft: "Startup-friendly", savings: "Half the cost" }
    ],
    metrics: []
  }
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSlides.length)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const currentSlide = heroSlides[currentIndex]

  // Dynamic background styling based on slide
  const getBackgroundStyle = () => {
    if (currentSlide.backgroundStyle === "gradient-blue") {
      return {
        background: "linear-gradient(135deg, #1e40af 0%, #1e293b 100%)",
      }
    }
    if (currentSlide.backgroundStyle === "split-grey-blue") {
      return {
        background: "linear-gradient(90deg, #6b7280 0%, #6b7280 50%, #1e40af 50%, #1e293b 100%)",
      }
    }
    if (currentSlide.backgroundStyle === "light-tech") {
      return {
        background: "linear-gradient(135deg, #f8fafc 0%, gray 100%)",
      }
    }
    if (currentSlide.backgroundStyle === "dark-results") {
      return {
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }
    }
    if (currentSlide.backgroundStyle === "geometric-gradient") {
      return {
        background: "linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #ec4899 100%)",
      }
    }
    // Default background for other slides
    return {
      background: "linear-gradient(135deg, var(--color-chart-3) 0%, color-mix(in oklch, var(--color-chart-3) 70%, var(--color-chart-2)) 100%)",
    }
  }


  return (
    <section
      aria-labelledby="hero-title"
      className="border-b relative overflow-hidden min-h-screen pt-16 md:pt-20"
      style={{
        ...getBackgroundStyle(),
      }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {currentSlide.centerAligned ? (
          // Center-aligned layout for slides 1 and 3
          <div className="text-center relative">
            {/* Tech pattern overlay for slide 3 */}
            {currentSlide.backgroundStyle === "light-tech" && (
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>
            )}
            
            {/* Geometric pattern overlay for slide 5 */}
            {currentSlide.backgroundStyle === "geometric-gradient" && (
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '100px 100px'
                }}></div>
              </div>
            )}
            
            {/* Optional abstract network graphic on right side for slide 1 */}
            {currentSlide.backgroundStyle === "gradient-blue" && (
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 hidden lg:block">
                <div className="w-full h-full bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            )}
            
            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Badge for slide 4 */}
              {currentSlide.backgroundStyle === "dark-results" && currentSlide.label && (
                <div className="inline-block bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8">
                  <span className="text-green-400 text-sm font-semibold">{currentSlide.label}</span>
                </div>
              )}
              
              <h1
                id="hero-title"
                className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${
                  currentSlide.backgroundStyle === "light-tech" ? "text-gray-900" : "text-white"
                }`}
              >
                {currentSlide.highlightMetrics ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: currentSlide.title
                        .split(' ')
                        .map(word => {
                          // Check if word contains any highlight metric
                          const hasMetric = currentSlide.highlightMetrics!.some(metric => 
                            word.includes(metric.replace('%', ''))
                          )
                          return hasMetric 
                            ? `<span class="text-green-400">${word}</span>`
                            : word
                        })
                        .join(' ')
                    }}
                  />
                ) : currentSlide.highlightedWords ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: currentSlide.title
                        .split(' ')
                        .map(word => 
                          currentSlide.highlightedWords!.includes(word.replace(/[.,!?]/, ''))
                            ? `<span class="text-blue-600">${word}</span>`
                            : word
                        )
                        .join(' ')
                    }}
                  />
                ) : (
                  currentSlide.title
                )}
              </h1>
              
              {currentSlide.subtitle && (
                <h2 className={`mt-6 text-xl md:text-2xl font-medium max-w-3xl mx-auto ${
                  currentSlide.backgroundStyle === "light-tech" ? "text-gray-700" : "text-white/90"
                }`}>
                  {currentSlide.highlightedPhrases && currentSlide.highlightedPhrases.length > 0 ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: currentSlide.highlightedPhrases.reduce((text, phrase) => {
                          const regex = new RegExp(`\\b${phrase.text}\\b`, 'g')
                          return text.replace(regex, `<span class="${phrase.color} font-bold">${phrase.text}</span>`)
                        }, currentSlide.subtitle)
                      }}
                    />
                  ) : (
                    currentSlide.subtitle
                  )}
                </h2>
              )}
              
              {/* Client Stats for slide 4 */}
              {currentSlide.clientStats && (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {currentSlide.clientStats.map((stat, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-2">
                          {stat.industry}
                        </h3>
                        <p className="text-2xl font-bold text-green-400">
                          {stat.result}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Comparison Points for slide 5 */}
              {currentSlide.comparisonPoints && (
                <div className="mt-10 max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentSlide.comparisonPoints.map((comparison, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                        <div className="space-y-4">
                          {/* Traditional Approach */}
                          <div className="text-center">
                            <h4 className="text-sm font-semibold text-red-300 uppercase tracking-wide mb-1">
                              Traditional Enterprise
                            </h4>
                            <p className="text-lg text-red-200 line-through">
                              {comparison.traditional}
                            </p>
                          </div>
                          
                          {/* VS Divider */}
                          <div className="flex items-center justify-center">
                            <div className="border-t border-white/30 flex-1"></div>
                            <span className="px-4 text-white/60 text-sm font-medium">VS</span>
                            <div className="border-t border-white/30 flex-1"></div>
                          </div>
                          
                          {/* DevKraft Approach */}
                          <div className="text-center">
                            <h4 className="text-sm font-semibold text-green-300 uppercase tracking-wide mb-1">
                              DevKraft
                            </h4>
                            <p className="text-lg text-green-200 font-medium">
                              {comparison.devkraft}
                            </p>
                            <p className="text-2xl font-bold text-yellow-300 mt-2">
                              {comparison.savings}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {currentSlide.description && (
                <p className={`mt-4 text-lg md:text-xl max-w-3xl mx-auto ${
                  currentSlide.backgroundStyle === "light-tech" ? "text-gray-600" : "text-white/80"
                }`}>
                  {currentSlide.description}
                </p>
              )}
              
              {/* Feature Pills */}
              {currentSlide.featurePills && (
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {currentSlide.featurePills.map((pill, index) => (
                    <div
                      key={index}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                        currentSlide.backgroundStyle === "light-tech"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
                    >
                      <span className="text-green-500">✓</span>
                      <span>{pill.text}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Stats Bar */}
              {currentSlide.statsBar && (
                <div className="mt-8 inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
                  <p className="text-white font-semibold text-lg">
                    {currentSlide.statsBar}
                  </p>
                </div>
              )}
              
              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className={
                    currentSlide.backgroundStyle === "light-tech"
                      ? "bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-4 text-lg"
                      : "bg-white text-blue-900 hover:bg-white/90 font-semibold px-8 py-4 text-lg"
                  }
                  asChild
                >
                  <a href={currentSlide.primaryButton.href}>{currentSlide.primaryButton.text}</a>
                </Button>
                
                {currentSlide.secondaryButton && (
                  <Button 
                    size="lg" 
                    variant="outline"
                    className={
                      currentSlide.backgroundStyle === "light-tech"
                        ? "border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
                        : "border-white text-black hover:bg-white/10 hover:text-white font-semibold px-8 py-4 text-lg"
                    }
                    asChild
                  >
                    <a href={currentSlide.secondaryButton.href}>{currentSlide.secondaryButton.text}</a>
                  </Button>
                )}
              </div>
              
              {/* Function Icons for slide 3 */}
              {currentSlide.backgroundStyle === "light-tech" && (
                <div className="mt-12 flex justify-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-2xl">🎧</span>
                    </div>
                    <span className="text-sm text-gray-600">Customer Service</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-2xl">📢</span>
                    </div>
                    <span className="text-sm text-gray-600">Marketing</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <span className="text-sm text-gray-600">Operations</span>
                  </div>
                </div>
              )}
              
              {/* Client Logos for slide 4 */}
              {currentSlide.clientLogos && (
                <div className="mt-12">
                  <p className="text-sm text-white/60 mb-6">Trusted by leading companies</p>
                  <div className="flex justify-center items-center gap-8 opacity-60">
                    {currentSlide.clientLogos.map((logo, index) => (
                      <div 
                        key={index} 
                        className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/10"
                      >
                        <span className="text-white/80 text-xs font-medium">{logo.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : currentSlide.splitLayout ? (
          // Split layout for slide 2
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
            {/* Left side - Pilot (Grey section) */}
            <div className="relative p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-white">
                {/* Badge above title */}
                {currentSlide.label && (
                  <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <p className="text-xs font-semibold text-white">{currentSlide.label}</p>
                  </div>
                )}
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {currentSlide.title}
                </h1>
                <p className="text-lg text-white/90 mb-8 max-w-md">
                  {currentSlide.subtitle}
                </p>
                
                {/* Arrow progression symbol */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white/70">PILOT</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/50"></div>
                      <div className="w-2 h-2 rounded-full bg-white/30"></div>
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                  <div className="text-2xl text-white/60">→</div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                    </div>
                    <span className="text-sm text-white/70">PRODUCTION</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90" asChild>
                    <a href={currentSlide.primaryButton.href}>{currentSlide.primaryButton.text}</a>
                  </Button>
                  {currentSlide.secondaryButton && (
                    <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10" asChild>
                      <a href={currentSlide.secondaryButton.href}>{currentSlide.secondaryButton.text}</a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Right side - Production (Blue section) with problem boxes */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white/90 mb-6">Common Implementation Challenges:</h3>
                
                {currentSlide.problemBoxes?.map((problem, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm">{problem.title}</h4>
                      <span className="text-red-400 font-bold text-sm">{problem.metric}</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Side-by-side layout for other slides
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              {currentSlide.label && (
                <p className="text-sm font-medium text-primary-foreground/90">{currentSlide.label}</p>
              )}
              <h1
                id="hero-title"
                className="mt-3 text-pretty text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground"
              >
                {currentSlide.title}
              </h1>
              {currentSlide.subtitle && (
                <h2 className="mt-4 text-xl text-primary-foreground/90">{currentSlide.subtitle}</h2>
              )}
              <p className="mt-4 text-pretty text-base md:text-lg leading-relaxed text-primary-foreground/90">
                {currentSlide.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg" variant="secondary" asChild>
                  <a href={currentSlide.primaryButton.href}>{currentSlide.primaryButton.text}</a>
                </Button>
                {currentSlide.secondaryButton && (
                  <Button size="lg" variant="outline" asChild>
                    <a href={currentSlide.secondaryButton.href}>{currentSlide.secondaryButton.text}</a>
                  </Button>
                )}
              </div>
            </div>
            {currentSlide.image && (
              <div className="rounded-lg border bg-card p-4 md:p-6">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-md border bg-muted">
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.imageAlt}
                    className="h-full w-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {currentSlide.metrics.map((metric, index) => (
                    <div key={index} className="rounded-md border p-3 bg-card/60">
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Carousel Indicators - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)} 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/40 hover:bg-white/70 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
