import { Card, CardContent } from "@/components/ui/card"

export function SocialProof() {
  const logos = [
    { name: "Acme Corp", alt: "Acme Logo" },
    { name: "Globex", alt: "Globex Logo" },
    { name: "Umbrella", alt: "Umbrella Logo" },
    { name: "Soylent", alt: "Soylent Logo" },
    { name: "Initech", alt: "Initech Logo" },
  ]

  const studies = [
    {
      tone: "var(--color-chart-2)", // green-ish
      icon: "🏥",
      title: "HealthTech AI Scaling",
      metric: "From 500 → 50,000 Users",
      bullets: ["Reduced triage time 38%", "Stabilized P95 latency", "SOC2-aligned deployment"],
      link: "#case-study-health",
    },
    {
      tone: "var(--color-chart-3)", // blue
      icon: "🏦",
      title: "Digital Banking Chatbot",
      metric: "From 2,000 → 200,000 Users",
      bullets: ["CSAT up 22%", "Deflection +41%", "E2E observability"],
      link: "#case-study-bank",
    },
    {
      tone: "color-mix(in oklch, var(--color-chart-3) 40%, var(--color-chart-5))", // purple-ish
      icon: "🛡️",
      title: "Insurance Claims Automation",
      metric: "80% Manual → 80% Automated",
      bullets: ["Cycle time -58%", "Human-in-the-loop", "Audit-ready logs"],
      link: "#case-study-insurance",
    },
  ]

  return (
    <section aria-labelledby="case-studies-title" id="case-studies" className="border-t">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <h2 id="case-studies-title" className="text-2xl md:text-3xl font-semibold tracking-tight">
          Proven Results: 30+ Successful Deployments
        </h2>
        <p className="mt-3 text-muted-foreground">Real numbers. Real companies. Real impact.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((s) => (
            <Card key={s.title} className="h-full overflow-hidden">
              <div
                className="px-5 py-3"
                style={{
                  background: `linear-gradient(135deg, ${s.tone} 0%, color-mix(in oklch, ${s.tone} 60%, white) 100%)`,
                  color: "var(--color-primary-foreground)",
                }}
              >
                <p className="text-sm">
                  {s.icon} {s.title}
                </p>
                <p className="mt-1 text-lg font-semibold">{s.metric}</p>
              </div>
              <CardContent className="p-5">
                <ul className="grid gap-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <p className="mt-3 italic text-sm text-muted-foreground">
                  “DevKraft turned our pilot into a reliable, scalable product—fast.”
                </p>
                <a href={s.link} className="mt-4 inline-flex text-sm font-medium underline underline-offset-4">
                  Read Full Case Study
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-sm text-muted-foreground">Industries served: Fintech • Healthcare • Insurtech</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Schedule Assessment
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
