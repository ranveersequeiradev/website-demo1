"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" aria-label="DevKraft Home" className="flex items-center">
            <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-sm font-medium text-secondary-foreground">
              DK
            </span>
            <span className="ml-2 text-base font-semibold tracking-tight">DevKraft</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href="#contact">Schedule Assessment</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
