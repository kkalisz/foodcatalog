import { Flex, Heading } from "@radix-ui/themes"
import { DotIcon } from "lucide-react"

const SubscriptionPlanPro = () => {
    return (
        <div className="p-2">
            <Flex direction="column" gap="2" >
                <Heading>Plan Pro</Heading>
                <Heading size="4">Cena: 29,99 zł/miesiąc</Heading>
            </Flex>
            <p>"Plan Pro to idealne rozwiązanie dla lokali, które chcą wyjść poza standardową obecność w sieci. Oprócz pełnej prezentacji menu i galerii zdjęć, zyskujesz wyższe pozycjonowanie w wynikach wyszukiwania oraz zaawansowane statystyki odwiedzin. Pozwól gościom znaleźć Cię szybciej niż konkurencję i zacznij budować lojalną społeczność wokół Twojej kuchni."</p>
            <Flex direction="column" gap="2" >
                <p>Funkcje:</p>
                <Flex><DotIcon/></Flex>
                
            </Flex>
        </div>
    )
}

export default SubscriptionPlanPro