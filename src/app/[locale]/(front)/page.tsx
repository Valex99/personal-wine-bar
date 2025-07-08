import { H2, P } from "@/components/typography";
import LanguageSwitcher from "@/components/language-switcher";
import Section from "@/components/layout/section";
import Container from "@/components/layout/container";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      {/* 1. Hero Section */}
      <main className="relative h-screen bg-[url('/img/wine-bar2.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-5 right-10 z-10">
          <LanguageSwitcher />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-satoshi text-center text-[80px] text-white text-4xl font-bold">
            BLED WINE BAR
          </h1>
          <H2 className="text-center text-white text-[26px]">
            Kjer se prepletata strast do vina in edinstvena izkušnja okušanja
            najboljših slovenskih ter mednarodnih vin.
          </H2>
        </div>
      </main>

      {/* 2. Section */}
      <Section>
        <Container>
          <div className="flex flex-col gap-4">
            <P>
              V elegantnem, a sproščenem ambientu ponujamo vrhunska vina, penine
              in žgane pijače, vse skupaj pa dopolnjujejo skrbno izbrani tapas
              prigrizki.
            </P>

            <P>
              Naš koncept temelji na izboru vrhunskih slovenskih vin, ki jih
              postavljamo ob bok priznanih mednarodnih vin. Vsaka steklenica v
              naši zbirki je skrbno izbrana, da predstavlja edinstven značaj
              svoje vinske regije.
            </P>
          </div>
          <Image
            src="/img/wine-bar3.png"
            alt="Wine Bar"
            width={300}
            height={300}
          />
        </Container>
      </Section>

      {/* 3. Section */}
      <Section className="bg-wine-bar-red">
        {/* if no direction is provided, Container will be flex-col */}
        <Container>
          <div className="flex flex-col">
            <Image
              src="/img/wine-bar4.png"
              alt="Wine Bar"
              width={400}
              height={600}
            />
          </div>
          <div className="flex flex-col">
            <Image
              src="/img/wine-bar4.png"
              alt="Wine Bar"
              width={300}
              height={300}
            />
            <P className="text-wine-bar-white">
              Naša vinska karta obsega rdeča, bela, oranžna vina in izjemne
              penine, ki jih lahko postrežemo tudi v skrbno oblikovanih
              degustacijskih menijih. Ob vrhunskem vinu vam postrežemo ročno
              pripravljene tapas prigrizke, ki poudarijo okus izbranih vin.
            </P>
          </div>
          <div className="flex flex-col">
            <H2 className="text-wine-bar-white">Kraj vinskih doživetij</H2>
            <P className="text-wine-bar-white">
              Naša vinska karta obsega rdeča, bela, oranžna vina in izjemne
              penine, ki jih lahko postrežemo tudi v skrbno oblikovanih
              degustacijskih menijih. Ob vrhunskem vinu vam postrežemo ročno
              pripravljene tapas prigrizke, ki poudarijo okus izbranih vin.
            </P>
            <Image
              src="/img/wine-bar4.png"
              alt="Wine Bar"
              width={300}
              height={300}
            />
          </div>
        </Container>
      </Section>

      {/*4 Section */}
      <div className="relative h-screen bg-[url('/img/wine-bar5.png')] bg-cover bg-center bg-no-repeat">
        <P className="absolute bottom-20 left-20 text-white text-center max-w-[360px]">
          Bled Wine Bar odraža moderen in sofisticiran stil. Naš interier sledi
          barvni paleti vinsko rdeče, ki ponazarja prefinjenost in globino sveta
          vin.
        </P>
      </div>

      {/* 5. Section */}
      <Section className="bg-wine-bar-black">
        {/* if no direction is provided, Container will be flex-col */}
        <Container>
          <div className="flex flex-col">
            <H2 className="text-wine-bar-white">V srcu Bleda </H2>

            <P className="text-wine-bar-white">
              Kjer se zrcali podoba alpskega raja, domuje novi Bled Wine Bar –
              prostor, ki prepleta ljubezen do vina in spoštovanje slovenske
              tradicije. Navdih prostora in ponudbe črpamo iz starodavnih
              slovenskih vinogradniških pokrajin. Tu se že stoletja rojevajo
              vrhunska vina, ki so skozi zgodovino krasila evropske kraljeve
              mize.
            </P>
            <Image
              src="/img/wine-bar4.png"
              alt="Wine Bar"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col">
            <Image
              src="/img/wine-bar4.png"
              alt="Wine Bar"
              width={300}
              height={300}
            />
            <P className="text-wine-bar-white">
              Slovenija je dežela 3 vinorodnih dežel in 9 vinorodnih okolišev,
              kjer uspevajo ene najbolj unikatnih sort grozdja na svetu. V našem
              baru boste lahko raziskovali zgodbe slovenskih vinarjev, okušali
              skrbno izbrane avtohtone sorte in uživali v prepletanju
              tradicionalnih in sodobnih okusov.
            </P>
            <P className="text-wine-bar-white">
              Naš cilj je, da vsak gost doživi pravo vinsko popotovanje – od
              svežih belih, polnih rdečih do izjemnih oranžnih in naravnih vin.
            </P>
          </div>
        </Container>
      </Section>

      {/* 6. Section */}
      <Section className="bg-wine-bar-red">
        {/* if no direction is provided, Container will be flex-col */}
        <Container className="bg-[#641320] text-wine-bar-white">
          <div className="flex flex-col">
            <H2>Rrzervacije</H2>
            <P>
              Za rezervacije degustacij, dogodkov ali zasebnih večerov izpolnite
              kontaktni obrazec.
            </P>
            <Button variant="bledWhite">REZERVIRAJTE MIZO</Button>
            <P>Ali pa nas kontaktirajte na: rezervacije@bledwinebar.com</P>
          </div>
          <Image
            src="/img/wine-bar3.png"
            alt="Wine Bar"
            width={300}
            height={300}
          />
        </Container>
      </Section>

      {/* 7. Section */}
      <Section className="">
        <Container>
          <div>
            <Image
              src="/img/wine-bar3.png"
              alt="Wine Bar"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/img/wine-bar3.png"
              alt="Wine Bar"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/img/wine-bar3.png"
              alt="Wine Bar"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/img/wine-bar3.png"
              alt="Wine Bar"
              width={300}
              height={300}
            />
          </div>
        </Container>
        <div className="flex justify-center">
          <Button variant="bledRed">GALERIJA</Button>
        </div>
      </Section>

      {/* 8. Section - footer */}

      <section>
        <Container className="justify-center">
          <h1 className="font-satoshi text-center text-[130px] text-black text-4xl font-bold">
            BLED WINE BAR
          </h1>
        </Container>
      </section>

      <section>
        <Container className="justify-center">
          <div className="flex justify-between">
            {/* {icons} */}
            <div className="flex flex-row">
              <Facebook />
              <Instagram />
              <Youtube />
              <Twitter />
              <Linkedin />
            </div>

            {/* {naslov lokacije} */}
            <div>
              <P>NASLOV LOKACIJE</P>
            </div>

            {/* {splosni pogoji} */}
            <div>
              <P>SPLOSNI POGOJI</P>
            </div>

            {/* {piskotki} */}
            <div>
              <P>PIŠKOTKI</P>
            </div>

            {/* {2025 bled wine bar} */}
            <div>
              <P>2025 BLED WINE BAR</P>
            </div>

            {/* {na vrh} */}
            <div></div>
          </div>
        </Container>
      </section>
    </div>
  );
}
