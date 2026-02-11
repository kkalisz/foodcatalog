'use client'

import Link from 'next/link'
import { MapPin, Menu } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PageSizeWrapper } from './ui/wrapper'
import { Flex, Heading } from '@radix-ui/themes'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <nav className="border-b bg-card sticky top- z-50">
      <PageSizeWrapper>
        <Flex justify="between" py="4">
          <Link href="/" className="flex items-center gap-2">
            <Flex className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </Flex>
            <Heading size="4">
              {t('app_name')}
            </Heading>
          </Link>
          <Flex align="center" >
            <Link href="/discover">
              {t('nav.browse')}
            </Link>
          </Flex>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </Flex>
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-muted rounded">
              {t('nav.discover')}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-muted rounded"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 hover:bg-muted rounded"
            >
              {t('nav.sign_in')}
            </Link>
          </div>
        )}
      </PageSizeWrapper>
    </nav>
  )
}
