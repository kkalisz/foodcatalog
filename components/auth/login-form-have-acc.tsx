import { useTranslations } from 'next-intl';

const LoginFormHaveAcc = () => {
  const t = useTranslations();
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-muted" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-card text-muted-foreground">
          {t('register_page.already_have_account')}
        </span>
      </div>
    </div>
  );
};
export default LoginFormHaveAcc;
