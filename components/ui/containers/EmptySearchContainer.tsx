import { Card } from '@radix-ui/themes'
import { useTranslation } from 'react-i18next'

type EmptySearchContainerProps = {
  tittle: string
  description: string
}

const EmptySearchContainer = ({
  tittle,
  description,
}: EmptySearchContainerProps) => {
  const { t } = useTranslation()
  return (
    <Card className="p-8 sm:p-12 text-center">
      {tittle}
      {description}
    </Card>
  )
}

export default EmptySearchContainer
