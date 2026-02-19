'use client';

import { Box, Flex, TextField } from '@radix-ui/themes';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import LoginFormHaveAcc from '@/components/MenuForm/LoginForm/LoginFormHaveAcc';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RegisterWrapper } from '@/components/ui/form/wrapper/LoginFormWrapper';
import useRegister from '@/data/hooks/useRegister';

type RegisterFormValues = {
  name: string;
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function OwnerRegister() {
  const { t } = useTranslation();
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const { register, handleSubmit, watch } = form;
  const { error, handleRegister } = useRegister();

  return (
    <RegisterWrapper>
      <h1 className=" text-center text-3xl font-bold text-foreground mb-2">
        {t('register_page.header')}
      </h1>
      <p className="text-center p-2 text-muted-foreground">{t('register_page.subheader')}</p>
      <Card className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(handleRegister)}>
          <Flex direction="column" gap="2">
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">
                  {t('register_page.name_label')}
                </label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="text"
                placeholder={t('register_page.name_placeholder')}
                {...register('name', {
                  required: t('register_page.name_required'),
                  minLength: { value: 10, message: t('register_page.name_too_short') },
                })}
              />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">
                  {t('register_page.company_label')}
                </label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="text"
                placeholder={t('register_page.company_placeholder')}
                {...register('companyName', {
                  required: t('register_page.company_required'),
                  minLength: { value: 2, message: t('register_page.company_too_short') },
                })}
              />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">
                  {t('register_page.email_label')}
                </label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="email"
                placeholder={t('register_page.email_placeholder')}
                {...register('email', {
                  required: t('register_page.email_required'),
                  minLength: { value: 5, message: t('register_page.email_too_short') },
                })}
              />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">
                  {t('register_page.password_label')}
                </label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="password"
                placeholder={t('register_page.password_placeholder')}
                {...register('password', {
                  required: t('register_page.password_required'),
                  minLength: { value: 6, message: t('register_page.password_too_short') },
                })}
              />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">
                  {t('register_page.confirm_password_label')}
                </label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="password"
                placeholder={t('register_page.confirm_password_placeholder')}
                {...register('confirmPassword', {
                  required: t('register_page.confirm_password_required'),
                  validate: (val: string) => {
                    if (watch('password') != val) {
                      return t('register_page.passwords_must_match');
                    }
                  },
                })}
              />
            </Box>
            <Button type="submit">{t('register_page.create_account_button')}</Button>
          </Flex>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
        <LoginFormHaveAcc />
        <Button variant="outline" className="w-full h-11 text-base bg-transparent" asChild>
          <Link href="/login">{t('register_page.login_here')}</Link>
        </Button>
      </Card>
      <p className="text-center text-sm text-muted-foreground mt-6">
        {t('register_page.looking_for_dining')}{' '}
        <Link href="/" className="text-primary hover:underline font-medium">
          {t('register_page.browse_restaurants')}
        </Link>
      </p>
    </RegisterWrapper>
  );
}
