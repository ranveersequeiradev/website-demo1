import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Capabilities } from "@/components/sections/capabilities"
import { SocialProof } from "@/components/sections/social-proof"
import { FinalCta } from "@/components/sections/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Problem />
      <Capabilities />
      <SocialProof />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
