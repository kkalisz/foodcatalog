import { Button } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';
type MenuEditorProps = {
  addNewCategory?: () => void;
};

export const EmptyMenu = ({ addNewCategory, ...props }: MenuEditorProps) => {
  const t = useTranslations();
  return (
    <div
      className="mt-4 
                        shadow-md bg-white 
                        p-10 border 
                        border-solid 
                        rounded-md 
                        text-center 
                        gap-5 flex 
                        flex-col 
                        items-center"
    >
      <h1 className="text-3xl">{t('empty_menu.title')}</h1>
      <br />
      <p>{t('empty_menu.description')}</p>
      <Button type="button" color="brown" onClick={addNewCategory}>
        <span>+</span> {t('empty_menu.add_category')}
      </Button>
    </div>
  );
};
