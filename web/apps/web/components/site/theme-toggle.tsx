"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"

/**
 * Which icon shows is decided by CSS (`dark:` variant), not by React state, so
 * there is no mount guard and no hydration mismatch to work around.
 */
function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      title="Toggle theme (D)"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <SunIcon aria-hidden className="hidden dark:block" />
      <MoonIcon aria-hidden className="block dark:hidden" />
      <span className="sr-only">Toggle light and dark theme</span>
    </Button>
  )
}

export { ThemeToggle }
