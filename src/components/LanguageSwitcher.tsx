"use client"

import { usePathname, useRouter } from 'next/navigation'
import { useTranslation } from '@/i18n/TranslationProvider'

export default function LanguageSwitcher() {
  const { lang } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    if (segments[1] === lang) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }
    router.push(segments.join('/') || '/')
  }

  return (
    <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase">
      <button
        onClick={() => switchLocale('en')}
        className={`transition-colors ${lang === 'en' ? 'text-primary-500' : 'text-gray-500 hover:text-white'}`}
      >
        EN
      </button>
      <span className="text-gray-700">|</span>
      <button
        onClick={() => switchLocale('de')}
        className={`transition-colors ${lang === 'de' ? 'text-primary-500' : 'text-gray-500 hover:text-white'}`}
      >
        DE
      </button>
    </div>
  )
}
