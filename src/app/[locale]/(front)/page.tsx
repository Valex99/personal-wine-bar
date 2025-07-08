import { H2, P } from "@/components/typography";
import LanguageSwitcher from "@/components/language-switcher";
import Section from "@/components/layout/section";
import Container from "@/components/layout/container";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* 1. Hero Section */}
      <main className="relative h-screen bg-[url('/img/wine-bar2.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 right-0 z-10">
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
            <P>
              Naša vinska karta obsega rdeča, bela, oranžna vina in izjemne
              penine, ki jih lahko postrežemo tudi v skrbno oblikovanih
              degustacijskih menijih. Ob vrhunskem vinu vam postrežemo ročno
              pripravljene tapas prigrizke, ki poudarijo okus izbranih vin.
            </P>
          </div>
          <div className="flex flex-col">
            <H2>Kraj vinskih doživetij</H2>
            <P>
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
    </div>
  );
}
