import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="border-b"
      style={{
        background:
          "linear-gradient(135deg, var(--color-chart-3) 0%, color-mix(in oklch, var(--color-chart-3) 70%, var(--color-chart-2)) 100%)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-medium text-primary-foreground/90">AI Implementation Partner</p>
            <h1
              id="hero-title"
              className="mt-3 text-pretty text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground"
            >
              Taking AI from Pilots to Production
            </h1>
            <p className="mt-4 text-pretty text-base md:text-lg leading-relaxed text-primary-foreground/90">
              90 days • 95% uptime • 60% cost reduction
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="secondary" asChild>
                <a href="#solutions">See How We Do It</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#resources">Download Playbook</a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-4 md:p-6">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-md border bg-muted">
              <img
                src="/ai-dashboard-charts-and-metrics.jpg"
                alt="AI dashboard mock with charts and metrics"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-md border p-3 bg-card/60">
                <p className="text-sm text-muted-foreground">Deployment timeline</p>
                <p className="mt-2 text-2xl font-semibold">90 days</p>
              </div>
              <div className="rounded-md border p-3 bg-card/60">
                <p className="text-sm text-muted-foreground">Production readiness</p>
                <p className="mt-2 text-2xl font-semibold">95% uptime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
