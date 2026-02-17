import { Button } from '@radix-ui/themes';
type MenuEditorProps = {
  addNewCategory?: () => void;
};

export const EmptyMenu = ({ addNewCategory, ...props }: MenuEditorProps) => {
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
      <h1 className="text-3xl">Twoje menu jest puste</h1>
      <br />
      <p>Rozpocznij dodawanie nowej kategori (np. Danie główne, przystawka, zupa)</p>
      <Button type="button" color="brown" onClick={addNewCategory}>
        <span>+</span> Dodaj kategorię
      </Button>
    </div>
  );
};
