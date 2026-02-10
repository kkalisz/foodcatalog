'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase/client'
import { useForm } from 'react-hook-form'
import { UserLogin } from '@/data/types/user'
import { PageSizeWrapper } from '@/components/ui/wrapper'
import { Box, Flex, TextField } from '@radix-ui/themes'
import ErrorLabel from '@/components/ui/form/label/ErrorLabel'
import { useTranslation } from 'react-i18next'

const OwnerLogin = () => {
  const { t } = useTranslation()

  const form = useForm<UserLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form
  const router = useRouter()

  const onHandleSubmit = async () => {
    const { email, password } = form.getValues()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/owner/dashboard')
      reset({
        email: '',
        password: '',
      })
    } catch (error) {
      console.error('Error during login:', error)
    }
  }
  return (
    <PageSizeWrapper>
      <div className="flex gap-5 border p-20 justify-center h-[80vh] items-center flex-col rounded-md">
        <h1>{t('login_page.header')}</h1>
        <form onSubmit={handleSubmit(onHandleSubmit)} autoComplete="off">
          <Flex direction="column" gap="4">
            <Box>
              <TextField.Root
                autoComplete="new-email"
                {...register('email', {
                  required: t('login_page.email_required'),
                  minLength: {
                    value: 6,
                    message: t('login_page.email_min_length'),
                  },
                })}
                placeholder={t('login_page.email_placeholder')}
              />
              <ErrorLabel error={errors.email?.message} id="email" />
            </Box>
            <Box>
              <TextField.Root
                autoComplete="new-password"
                type="password"
                {...register('password', {
                  required: t('login_page.password_required'),
                  minLength: {
                    value: 10,
                    message: t('login_page.password_min_length'),
                  },
                })}
                placeholder={t('login_page.password_placeholder')}
              />
              <ErrorLabel error={errors.password?.message} id={'password'} />
            </Box>
          </Flex>
          <Button className="p-5 w-100 mt-5" type="submit">
            {t('login_page.login_button')}
          </Button>
        </form>
      </div>
    </PageSizeWrapper>
  )
}
export default OwnerLogin
