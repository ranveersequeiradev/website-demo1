"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FinalCta() {
  return (
    <section aria-labelledby="contact" id="contact" className="border-t">
      <div
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklch, var(--color-chart-3) 30%, black) 0%, var(--color-primary) 100%)",
          color: "var(--color-primary-foreground)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 id="contact" className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
                Ready to Scale Your AI from Pilot to Production?
              </h2>
              <p className="mt-3 leading-relaxed opacity-90">
                Book a free 30-minute technical assessment. We’ll review your stack, identify quick wins, and map a
                pragmatic plan to ship value in weeks—not quarters.
              </p>

              <ul className="mt-6 grid gap-3 text-sm">
                <li>• Architecture and performance review</li>
                <li>• Cost analysis and reduction levers</li>
                <li>• Security, compliance, and governance</li>
                <li>• Integration roadmap with your systems</li>
                <li>• Delivery plan with milestones and SLOs</li>
              </ul>
            </div>

            <div className="rounded-lg border p-6 bg-card text-foreground">
              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Jane Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jane@company.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Corp" />
                </div>
                <div className="grid gap-2">
                  <Label>Current Stage</Label>
                  <Select>
                    <SelectTrigger aria-label="Current Stage">
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ideation">Ideation</SelectItem>
                      <SelectItem value="pilot">Pilot</SelectItem>
                      <SelectItem value="scale">Scaling pilot</SelectItem>
                      <SelectItem value="prod">In production</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Industry</Label>
                  <Select>
                    <SelectTrigger aria-label="Industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="insurtech">Insurtech</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Describe your AI pilot or goal</Label>
                  <Textarea id="message" placeholder="Briefly describe your goals and timelines" rows={4} />
                </div>
                <Button type="submit" className="mt-2">
                  Submit
                </Button>
                <p className="text-xs text-muted-foreground">
                  Prefer email or phone? <span className="font-medium text-foreground">hello@devkraft.ai</span> • (555)
                  123-4567
                </p>
              </form>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-md border p-3 bg-card/60 text-foreground">
              <p className="text-sm font-medium">AWS Partner</p>
            </div>
            <div className="rounded-md border p-3 bg-card/60 text-foreground">
              <p className="text-sm font-medium">30+ Deployments</p>
            </div>
            <div className="rounded-md border p-3 bg-card/60 text-foreground">
              <p className="text-sm font-medium">Global Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
