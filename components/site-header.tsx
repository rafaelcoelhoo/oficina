'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Phone, Wrench, X } from 'lucide-react'
import { navItems, site } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-md bg-foreground text-accent"
          >
            <Wrench className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-xl font-bold uppercase tracking-wide">
              {site.shortName}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Reparação automóvel · desde {site.foundedYear}
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.replace(/\s/g, '')}`}
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/85 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span>
              <span className="sr-only">Ligar para </span>
              {site.phoneDisplay}
            </span>
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movel"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      <nav
        id="menu-movel"
        aria-label="Navegação principal"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-3 text-base font-semibold hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-bold text-accent-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              Ligar {site.phoneDisplay}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
