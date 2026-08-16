/**
 * The icon vocabulary shared by every field that renders a lucide glyph.
 *
 * Values are lucide-react export names. The frontend maps them back to
 * components in `web/apps/web/lib/icons.ts` — adding a value here without
 * adding it there renders the fallback glyph, so keep the two in sync.
 */
export const ICON_OPTIONS = [
  {title: 'Activity', value: 'Activity'},
  {title: 'Clipboard list', value: 'ClipboardList'},
  {title: 'Cog', value: 'Cog'},
  {title: 'Factory', value: 'Factory'},
  {title: 'Git compare arrows', value: 'GitCompareArrows'},
  {title: 'Layers', value: 'Layers'},
  {title: 'Line chart', value: 'LineChart'},
  {title: 'Map', value: 'Map'},
  {title: 'Plug', value: 'Plug'},
  {title: 'Repeat', value: 'Repeat'},
  {title: 'Search', value: 'Search'},
  {title: 'Workflow', value: 'Workflow'},
  {title: 'Gauge', value: 'Gauge'},
  {title: 'Shield check', value: 'ShieldCheck'},
  {title: 'Timer', value: 'Timer'},
  {title: 'Users', value: 'Users'},
] as const
