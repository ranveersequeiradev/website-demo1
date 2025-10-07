import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Capabilities() {
  const caps = [
    {
      title: "Performance & Scalability",
      problem: "Latency spikes and degraded UX under load",
      bullets: ["Caching & batching", "Streaming & chunking", "Parallelism & workers", "Hot-path optimization"],
      result: "Sub-2s P95 latency at scale",
    },
    {
      title: "Cost Optimization",
      problem: "Unpredictable spend and runaway token costs",
      bullets: ["Prompt/token discipline", "Eval-driven pruning", "Smart routing", "Right-size infra"],
      result: "Up to 60% cost reduction",
    },
    {
      title: "MLOps & Model Management",
      problem: "Model drift and no reproducibility",
      bullets: ["CI/CD for models", "Lifecycle & versions", "Evals & guardrails", "Feature stores"],
      result: "Consistent, auditable releases",
    },
    {
      title: "Enterprise Integration",
      problem: "AI siloed from core systems",
      bullets: ["APIs & webhooks", "SSO/RBAC", "ERP/CRM integration", "Data governance"],
      result: "Secure, compliant workflows",
    },
    {
      title: "Reliability & Monitoring",
      problem: "Silent failures and poor visibility",
      bullets: ["Tracing & logs", "SLOs & alerts", "Fallbacks & retries", "Chaos testing"],
      result: "99.9%+ uptime targets",
    },
    {
      title: "Function-Specific AI",
      problem: "Unclear ownership and outcomes",
      bullets: ["Assistants for ops", "RAG for knowledge", "Agentic workflows", "Human-in-the-loop"],
      result: "Measurable business impact",
    },
  ]

  const tracks = [
    {
      key: "TAKEOFF",
      tone: "var(--color-chart-2)", // green-ish
      title: "TAKEOFF",
      subtitle: "For department heads starting their AI journey",
      timeline: "60–90 days",
      investment: "$100K–$300K",
    },
    {
      key: "ALTITUDE",
      tone: "var(--color-chart-3)", // blue
      title: "ALTITUDE",
      subtitle: "For companies with successful pilots that need to scale",
      timeline: "90 days",
      investment: "$200K–$500K",
      standout: true,
    },
    {
      key: "CRUISE",
      tone: "color-mix(in oklch, var(--color-chart-3) 40%, var(--color-chart-5))", // purple-ish
      title: "CRUISE",
      subtitle: "For AI-mature companies needing ongoing deployment",
      timeline: "Ongoing",
      investment: "$40K–$60K/month",
    },
  ]

  return (
    <section aria-labelledby="capabilities-title" id="services" className="border-t">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <h2 id="capabilities-title" className="text-2xl md:text-3xl font-semibold tracking-tight">
          How We Solve It: Our AI Production Capabilities
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          From performance optimization to cost reduction to enterprise integration—we have the complete stack.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {caps.map((cap) => (
            <Card key={cap.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{cap.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-destructive">{cap.problem}</p>
                <ul className="mt-3 grid gap-2">
                  {cap.bullets.map((b) => (
                    <li key={b} className="text-sm text-muted-foreground">
                      • {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-semibold" style={{ color: "var(--color-chart-2)" }}>
                  {cap.result}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 id="solutions" className="mt-14 text-xl md:text-2xl font-semibold tracking-tight">
          Our Solutions
        </h3>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <div
              key={t.key}
              className={`rounded-lg border p-5 ${t.standout ? "ring-2" : ""}`}
              style={{ borderColor: t.tone, boxShadow: t.standout ? `0 0 0 2px ${t.tone}` : undefined }}
            >
              <div
                className="rounded-md px-3 py-2 text-sm font-semibold"
                style={{ background: t.tone, color: "var(--color-primary-foreground)" }}
              >
                {t.title}
              </div>
              <p className="mt-3 text-sm">{t.subtitle}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md border p-3">
                  <p className="text-muted-foreground">Timeline</p>
                  <p className="mt-1 font-medium">{t.timeline}</p>
                </div>
                <div className="rounded-md border p-3">
                  <p className="text-muted-foreground">Investment</p>
                  <p className="mt-1 font-medium">{t.investment}</p>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90"
                >
                  Schedule Assessment
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-sm">Not sure which solution fits?</p>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Talk to an Expert
            </a>
            <a
              href="#resources"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90"
            >
              Download Playbook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
