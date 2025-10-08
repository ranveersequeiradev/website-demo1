export function Problem() {
  return (
    <section aria-labelledby="problem-title">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 id="problem-title" className="text-balance text-2xl md:text-3xl font-semibold tracking-tight">
            The AI Journey from Concept to Production? It's Rarely a Straight Line.          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
          We've walked this path 30+ times. Performance bottlenecks. Cost overruns. Integration nightmares. We know where the obstacles are—and exactly how to navigate them.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-5 bg-card">
            <p className="text-sm font-medium text-muted-foreground">Performance Crashes</p>
            <p className="mt-2 text-2xl font-semibold text-destructive">2s → 45s</p>
            <p className="mt-2 text-sm">Latency balloons as usage scales and inference stacks aren’t optimized.</p>
          </div>
          <div className="rounded-lg border p-5 bg-card">
            <p className="text-sm font-medium text-muted-foreground">Costs Explode</p>
            <p className="mt-2 text-2xl font-semibold text-destructive">50x Increase</p>
            <p className="mt-2 text-sm">Uncapped tokens, redundant calls, and inefficient infra erase ROI.</p>
          </div>
          <div className="rounded-lg border p-5 bg-card">
            <p className="text-sm font-medium text-muted-foreground">Reliability Issues</p>
            <p className="mt-2 text-2xl font-semibold text-destructive">85% Uptime</p>
            <p className="mt-2 text-sm">No guardrails, flaky pipelines, and missing observability break prod.</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-base font-semibold">This is where 70% of AI transformations die.</p>
          <p className="mt-2 text-sm text-muted-foreground">We’ve bridged this gap 30+ times.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              See Solutions
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:opacity-90"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
