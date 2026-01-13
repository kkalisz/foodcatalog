import { Wrapper } from "@/components/ui/wrapper";

const Help = () => {
    return (
        <Wrapper>
            <div className="p-10 h-[80vh] max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Pomoc</h1>
                <p>Witamy w sekcji pomocy FoodCatalog! Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania oraz przewodniki dotyczące korzystania z naszej aplikacji.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Najczęściej zadawane pytania (FAQ)</h2>
                <h3 className="text-xl font-semibold mt-4">Jak dodać nową restaurację?</h3>
                <p>Aby dodać nową restaurację, przejdź do panelu właściciela i kliknij przycisk "Dodaj restaurację". Wypełnij wymagane informacje i zapisz zmiany.</p>

                <h3 className="text-xl font-semibold mt-4">Jak zarządzać menu restauracji?</h3>
                <p>W panelu właściciela wybierz restaurację, a następnie przejdź do sekcji "Menu". Możesz dodawać, edytować lub usuwać kategorie i pozycje menu.</p>

                <h3 className="text-xl font-semibold mt-4">Jak zmienić informacje o restauracji?</h3>
                <p>Aby zmienić informacje o restauracji, przejdź do panelu właściciela, wybierz restaurację i kliknij "Edytuj". Wprowadź zmiany i zapisz je.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Kontakt</h2>
                <p>Jeśli potrzebujesz dalszej pomocy, skontaktuj się z naszym zespołem wsparcia pod adresem </p>
            </div>
        </Wrapper>
    );
}
export default Help;