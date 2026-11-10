"use client";
import { SiteLink } from "@/components/ui/SiteLink";
import Image from "next/image";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { destinations, navigation } from "@/config/navigation";
import { site } from "@/config/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  function current(href: string): "page" | "location" | undefined {
    return pathname === href ? "page" : href !== "/" && pathname.startsWith(`${href}/`) ? "location" : undefined;
  }
  function closeMenu() { setOpen(false); document.querySelectorAll<HTMLDetailsElement>(".nav-dropdown[open]").forEach(detail => { detail.open = false; }); }
  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === "Escape") {
      const detail = (event.target as HTMLElement).closest("details");
      if (detail) { detail.open = false; detail.querySelector("summary")?.focus(); }
      else { closeMenu(); toggle.current?.focus(); }
    }
  }}>
    <div className="utility-bar"><div className="container utility-inner"><span>Delta Sigma Theta Sorority, Incorporated</span><SiteLink href={destinations.membership}>Visiting sorors <ArrowUpRight size={13} aria-hidden="true" /></SiteLink></div></div>
    <div className="container nav-inner">
      <SiteLink className="brand" href="/" aria-label="Monroe Alumnae Chapter home">
        <Image src="/images/chapter-logo.png" width={68} height={68} alt="" priority />
        <span><strong>{site.name}</strong><small>Delta Sigma Theta Sorority, Inc.</small></span>
      </SiteLink>
      <button ref={toggle} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
        {navigation.map(item => item.children ? <details className={current(item.href) ? "nav-dropdown is-current" : "nav-dropdown"} key={item.label}>
          <summary>{item.label}<ChevronDown size={13} aria-hidden="true" /></summary>
          <div className="dropdown-panel">{item.children.map(child => <SiteLink key={child.label} href={child.href} aria-current={pathname === child.href ? "page" : undefined} onClick={closeMenu}>{child.label}</SiteLink>)}</div>
        </details> : <SiteLink key={item.label} href={item.href} onClick={closeMenu} aria-current={current(item.href)}>{item.label}</SiteLink>)}
        <SiteLink className="nav-contact" aria-current={current(destinations.contact)} href={destinations.contact} onClick={closeMenu}>Contact us <ArrowUpRight size={14} aria-hidden="true" /></SiteLink>
      </nav>
    </div>
  </header>;
}
