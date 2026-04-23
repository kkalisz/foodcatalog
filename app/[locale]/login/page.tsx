'use client';

import { useState } from 'react';

import { Box, Button, Flex, TextField } from '@radix-ui/themes';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import LoginFormFooter from '@/components/auth/login-form-footer';
import LoginFormWrapper from '@/components/auth/login-form-wrapper';
import { PageHeightWrapper } from '@/components/common/page-height-wrapper';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card } from '@/components/ui/card';
import ErrorLabel from '@/components/ui/form/label/ErrorLabel';
import FormInputLabel from '@/components/ui/form/label/FormInputLabel';
import HeightWrapper from '@/components/ui/wrappers/HeightWrapper';
import { UserLogin } from '@/data/types/user';
import { auth } from '@/lib/firebase/client';

const OwnerLogin = () => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState('');

  const form = useForm<UserLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const router = useRouter();

  const onHandleSubmit = async () => {
    const { email, password } = form.getValues();
    setLoading(true);
    setGlobalError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/owner/dashboard');
    } catch (error: unknown) {
      const err = error as { code?: string; message?: string };
      setGlobalError(err.code || err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = {
    email: {
      required: { value: true, message: t('login_page.email_required') },
      minLength: {
        value: 6,
        message: t('login_page.email_min_length'),
      },
    },
    password: {
      required: { value: true, message: t('login_page.password_required') },
      minLength: { value: 6, message: t('login_page.password_min_length') },
    },
  };
  return (
    <HeightWrapper>
      <PageHeightWrapper>
        <LoginFormWrapper>
          <Card className="p-6 sm:p-8">
            {globalError && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{globalError}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit(onHandleSubmit)}>
              <Flex direction="column" gap="4">
                <Box>
                  <Flex>
                    <FormInputLabel
                      label={t('login_page.email_label')}
                      required={validationSchema.email.required.value}
                    />
                  </Flex>
                  <TextField.Root
                    size="3"
                    variant="surface"
                    type="email"
                    placeholder={t('login_page.email_placeholder')}
                    {...register('email', validationSchema.email)}
                  />
                  <ErrorLabel error={errors.email?.message} id="email" />
                </Box>
                <Box>
                  <Flex>
                    <FormInputLabel
                      label={t('login_page.password_label')}
                      required={validationSchema.password.required.value}
                    />
                  </Flex>
                  <TextField.Root
                    size="3"
                    variant="surface"
                    type="password"
                    placeholder={t('login_page.password_placeholder')}
                    {...register('password', validationSchema.password)}
                  />
                  <ErrorLabel error={errors.password?.message} id="password" />
                </Box>
                <Button type="submit" className="w-full h-11 text-base mt-4" disabled={loading}>
                  {loading ? t('login_page.signing_in') : t('login_page.login_button')}
                </Button>
              </Flex>
            </form>
            <LoginFormFooter />
            <Button variant="outline" className="w-full h-11 text-base bg-transparent" asChild>
              <Link href="/register">{t('login_page.create_account')}</Link>
            </Button>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-6">
            {t('login_page.looking_for_dining')}{' '}
            <Link href="/" className="text-primary hover:underline font-medium">
              {t('login_page.browse_restaurants')}
            </Link>
          </p>
        </LoginFormWrapper>
      </PageHeightWrapper>
    </HeightWrapper>
  );
};
export default OwnerLogin;
