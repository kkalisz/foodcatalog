'use client'

import HelpContainer from '@/components/ui/containers/HelpContainer'
import { PageSizeWrapper } from '@/components/ui/wrapper'
import { useTranslation } from 'react-i18next'

const Help = () => {
  const { t } = useTranslation()

  return (
    <PageSizeWrapper>
      <HelpContainer
        tittle={t('help_page.title')}
        description={t('help_page.welcome')}
      />
    </PageSizeWrapper>
  )
}
export default Help
