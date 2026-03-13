import { useTranslations } from 'next-intl';

const LoginFormFooter = () => {
  const t = useTranslations();
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-muted" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-card text-muted-foreground">{t('login_page.new_to_app')}</span>
      </div>
    </div>
  );
};
export default LoginFormFooter;
