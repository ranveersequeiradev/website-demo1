import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#about">Leadership</Link>
              </li>
              <li>
                <Link href="#about">Careers</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Services</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#services">Performance & Scalability</Link>
              </li>
              <li>
                <Link href="#services">Cost Optimization</Link>
              </li>
              <li>
                <Link href="#services">MLOps & Model Mgmt</Link>
              </li>
              <li>
                <Link href="#services">Enterprise Integration</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Solutions</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#solutions">TAKEOFF</Link>
              </li>
              <li>
                <Link href="#solutions">ALTITUDE</Link>
              </li>
              <li>
                <Link href="#solutions">CRUISE</Link>
              </li>
              <li>
                <Link href="#case-studies">Case Studies</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="#resources">Case studies</Link>
              </li>
              <li>
                <Link href="#resources">Whitepapers</Link>
              </li>
              <li>
                <Link href="#resources">Blog</Link>
              </li>
              <li>
                <Link href="#resources">Playbook</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Industries</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>Fintech</li>
              <li>Healthcare</li>
              <li>Insurtech</li>
              <li>More</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold">DevKraft</p>
            <p className="text-sm text-muted-foreground mt-1">Taking AI from pilots to production</p>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevKraft. All rights reserved. • <Link href="#">Privacy</Link> •{" "}
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
