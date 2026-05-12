import { MenuOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '../../../layout/PortfolioLayout/consts'
import { useThemeMode } from '../../../theme/useThemeMode'

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'] as const

function isSectionId(id: string): id is (typeof SECTION_IDS)[number] {
  return (SECTION_IDS as readonly string[]).includes(id)
}

function getActiveNavKey(pathname: string, hash: string, scrollActive: string): string | null {
  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    return 'notes'
  }
  if (pathname !== '/') {
    return null
  }
  const h = hash.replace('#', '')
  if (h && isSectionId(h)) {
    return h === 'hero' ? 'home' : h
  }
  return scrollActive === 'hero' ? 'home' : scrollActive
}

export function PortfolioHomeNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const { mode, toggle } = useThemeMode()
  const [scrollActive, setScrollActive] = useState<string>('hero')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const activeNavKey = getActiveNavKey(location.pathname, location.hash, scrollActive)

  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) {
          setScrollActive(visible.target.id)
        }
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: [0, 0.12, 0.25, 0.5, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  const handleHashNavClick = useCallback(
    (href: string) => {
      setDrawerOpen(false)
      if (href.startsWith('/#')) {
        const id = href.replace('/#', '')
        if (isSectionId(id)) {
          setScrollActive(id)
        }
      }
    },
    [setDrawerOpen],
  )

  const navLinkClass = (itemKey: string) =>
    `pf-home-nav-link${activeNavKey === itemKey ? ' pf-home-nav-link-active' : ''}`

  const renderNavItem = (item: (typeof navItems)[number]) => {
    const cls = navLinkClass(item.key)
    const isHash = item.href.startsWith('/#')

    if (isHash) {
      return (
        <a key={item.key} href={item.href} className={cls} onClick={() => handleHashNavClick(item.href)}>
          {item.label}
        </a>
      )
    }

    return (
      <Link key={item.key} to={item.href} className={cls} onClick={() => setDrawerOpen(false)}>
        {item.label}
      </Link>
    )
  }

  return (
    <header className="pf-home-nav-wrap">
      <div className="pf-home-nav-card">
        <Link to="/" className="pf-home-nav-brand" aria-label="Home">
          <span className="pf-home-nav-logo">S.</span>
        </Link>

        <nav className="pf-home-nav-desktop" aria-label="Primary">
          {navItems.map((item) => renderNavItem(item))}
        </nav>

        <div className="pf-home-nav-actions">
          <button
            type="button"
            className="pf-home-nav-theme"
            onClick={() => toggle()}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mode === 'dark' ? <SunOutlined /> : <MoonOutlined />}
          </button>
          <Button type="primary" className="pf-home-nav-cta" onClick={() => void navigate('/get-in-touch')}>
            Let&apos;s Talk
          </Button>
          <button
            type="button"
            className="pf-home-nav-burger"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuOutlined />
          </button>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        className="pf-home-nav-drawer"
        styles={{ body: { paddingTop: 12 } }}
      >
        <nav className="pf-home-nav-mobile-list" aria-label="Primary mobile">
          {navItems.map((item) => renderNavItem(item))}
        </nav>
      </Drawer>
    </header>
  )
}
