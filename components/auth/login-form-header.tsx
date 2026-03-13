import { MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';

const LoginFormHeader = () => {
  const t = useTranslations();
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <MapPin className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="text-2xl font-bold text-foreground">{t('app_name')}</span>
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-2">{t('login_page.header')}</h1>
      <p className="text-muted-foreground">{t('login_page.sign_in_to_manage')}</p>
    </div>
  );
};

export default LoginFormHeader;
