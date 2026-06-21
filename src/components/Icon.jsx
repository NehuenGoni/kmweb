import {
  Box,
  Monitor,
  Cable,
  Wrench,
  Network,
  Laptop,
  Cpu,
  MonitorSmartphone,
  MemoryStick,
  HardDrive,
  Keyboard,
  Printer,
  Cctv,
  ShieldCheck,
  Users,
  Zap,
  MapPin,
} from 'lucide-react'

/**
 * Registro explícito de íconos. Permite definir íconos por nombre (string)
 * en data/site.js manteniendo el bundle chico (tree-shaking).
 *
 * Si agregás un ícono nuevo en data/site.js, importalo arriba y sumalo acá.
 * Lista completa: https://lucide.dev/icons
 */
const registry = {
  Box,
  Monitor,
  Cable,
  Wrench,
  Network,
  Laptop,
  Cpu,
  MonitorSmartphone,
  MemoryStick,
  HardDrive,
  Keyboard,
  Printer,
  Cctv,
  ShieldCheck,
  Users,
  Zap,
  MapPin,
}

export default function Icon({ name, ...props }) {
  const LucideIcon = registry[name] ?? Box
  return <LucideIcon {...props} />
}
