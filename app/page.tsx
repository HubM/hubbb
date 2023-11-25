import Link from "next/link";
import Heading from "@/components/Heading";
import { ExternalLink } from "@/components/ExternalLink";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HM | Bienvenue",
  description:
    "Bienvenue sur le site de Hubert Moncenis, développeur fullstack freelance",
};

export default function Home() {
  return (
    <>
      <header className="mb-11 print:mb-6">
        <Heading level={1}>Hello !</Heading>
      </header>

      <div className="flex flex-col gap-6 leading-relaxed text-xl print:text-base print:gap-4 ">
        <Paragraph>
          Développeur web freelance avec plus de 4 ans d'expérience dans le
          développement d’applications web complexe. Mon expertise gravite
          autour du monde javascript de manière fullstack, avec une petite
          préférence pour la partie front-end et la recherche d’amélioration de
          l’expérience utilisateur.
        </Paragraph>
        <Paragraph>
          En-dehors de mon travail, je participe à la mise en place de
          l'événement annuel du milieu tech bordelais{" "}
          <ExternalLink href="https://bdxio.fr" target="_blank">
            bdxio
          </ExternalLink>
          . Je pratique aussi le bmx depuis 10 ans, j’aime faire des roadtrips
          avec mon van aménagé, danser dans les festivals de métal et faire de
          la musique en rythme sur ma batterie.
        </Paragraph>

        <Paragraph>
          La créativité de ma personnalité se reflète dans mon travail.
          Passionné par l’univers du développement, j’apporte toujours de la
          rigueur dans la réalisation de chaque projet. De nature empathique, je
          sais comprendre les besoins de mes collaborateurs et de mes clients,
          ce qui favorise la collaboration et la communication.
        </Paragraph>

        <Paragraph>
          En ce qui concerne mes compétences techniques, je suis constamment en
          veille pour continuer à apprendre et évoluer. Au vu de mes expériences
          passées et des différents projets sur lesquels j’ai pu intervenir,
          vous pouvez penser à moi pour tout projet présentant une forte
          complexité métier. Niveau technologie, j’ai plus d’expérience sur des
          stacks javascript (avec Typescript idéalement) mais je suis prêt à
          utiliser les outils qui conviennent le mieux à votre projet.
        </Paragraph>

        <Paragraph>
          Pour ce qui est des réalisations, j'ai pu intervenir sur des outils
          métiers liés au domaine médical ou encore à l'administration publique.
          Ma philosophie de travail met l'utilisateur au cœur de mes
          développements. Je m'efforce de concevoir des solutions web intuitive
          et accessible, tout en gardant à l'esprit l'importance de la
          maintenance et de la responsabilité environnementale.
        </Paragraph>

        <Paragraph className="print:hidden">
          Si mon profil vous intéresse, n'hésitez pas à aller consulter mon{" "}
          <Link href="/curriculum-vitae" className="text-teal-300">
            curriculum vitæ
          </Link>{" "}
          pour plus de détail.
        </Paragraph>

        <Paragraph>
          Si vous cherchez un développeur web passionné et compétent pour votre
          prochain projet, je suis prêt à relever le défi. N'hésitez pas à me
          contacter dès aujourd'hui pour discuter de vos besoins et pour
          travailler ensemble à la bonne réalisation de besoin. Vous pouvez me
          retrouver sur{" "}
          <ExternalLink
            href="https://www.malt.fr/profile/hubertmoncenis"
            target="_blank"
          >
            Malt
          </ExternalLink>
          ,{" "}
          <ExternalLink
            href="https://fr.linkedin.com/in/hubert-moncenis"
            target="_blank"
          >
            Linkedin
          </ExternalLink>{" "}
          ou encore{" "}
          <ExternalLink href="https://github.com/HubM" target="_blank">
            Github
          </ExternalLink>
          .
        </Paragraph>

        <Paragraph className="mt-6 italic !opacity-95">
          Hubert Moncenis 👋🏼
        </Paragraph>
      </div>
    </>
  );
}
