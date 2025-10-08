export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#about">Leadership</a>
              </li>
              <li>
                <a href="#about">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Services</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>
                <a href="#services">Performance & Scalability</a>
              </li>
              <li>
                <a href="#services">Cost Optimization</a>
              </li>
              <li>
                <a href="#services">MLOps & Model Mgmt</a>
              </li>
              <li>
                <a href="#services">Enterprise Integration</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Solutions</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>
                <a href="#solutions">TAKEOFF</a>
              </li>
              <li>
                <a href="#solutions">ALTITUDE</a>
              </li>
              <li>
                <a href="#solutions">CRUISE</a>
              </li>
              <li>
                <a href="#case-studies">Case Studies</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
              <li>
                <a href="#resources">Case studies</a>
              </li>
              <li>
                <a href="#resources">Whitepapers</a>
              </li>
              <li>
                <a href="#resources">Blog</a>
              </li>
              <li>
                <a href="#resources">Playbook</a>
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
            © {new Date().getFullYear()} DevKraft. All rights reserved. • <a href="#">Privacy</a> •{" "}
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
