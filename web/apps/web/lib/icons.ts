import {
  Activity,
  ClipboardList,
  Cog,
  Factory,
  Gauge,
  GitCompareArrows,
  Layers,
  LineChart,
  Map as MapIcon,
  Plug,
  Repeat,
  Search,
  ShieldCheck,
  Timer,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { stegaClean } from "next-sanity"

/**
 * Sanity stores icons as lucide export names. The allowed values live in
 * `studio/schemaTypes/objects/iconOptions.ts` — keep the two lists in sync, or
 * new options fall back to `Cog`.
 */
const ICONS: Record<string, LucideIcon> = {
  Activity,
  ClipboardList,
  Cog,
  Factory,
  Gauge,
  GitCompareArrows,
  Layers,
  LineChart,
  Map: MapIcon,
  Plug,
  Repeat,
  Search,
  ShieldCheck,
  Timer,
  Users,
  Workflow,
}

/**
 * `stegaClean` is essential here: in draft mode the raw value carries invisible
 * Visual Editing characters, so the lookup would miss on every icon.
 */
export function resolveIcon(name: string | null | undefined): LucideIcon {
  if (!name) return Cog
  return ICONS[stegaClean(name)] ?? Cog
}
