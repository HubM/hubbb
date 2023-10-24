"use client";

import { HTMLProps, useState } from "react";
import Image from "next/image";

function Paragraph({
  children,
  ref,
  ...props
}: HTMLProps<HTMLParagraphElement>) {
  const [hover, setHover] = useState(false);

  return (
    <p
      className={`text-white transition-opacity ${
        hover ? "opacity-95" : "opacity-60"
      }`}
      onMouseEnter={() => {
        if (!hover) {
          setHover(true);
        }
      }}
      {...props}
    >
      {children}
    </p>
  );
}

function Link({ children, ...props }: HTMLProps<HTMLAnchorElement>) {
  return (
    <a className="text-teal-300 border-b-2 border-teal-200" {...props}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen pt-32 p-16 bg-gradient-to-b from-[#000000] via-50% via-[#010208] to-90% to-[#122E52]">
      <Image
        src="/me.gif"
        width={200}
        height={100}
        alt="Picture of the Hubert Moncenis"
        className={`absolute xl:fixed top-2 right-0 md:top-12 md:right-12 z-0 opacity-100`}
      />
      <h1 className="w-fit text-8xl p-5 mb-11 -ml-5 italic relative z-10 animate-fontWeight cursor-hi">
        Hello !
      </h1>

      <div className="flex flex-col leading-relaxed gap-6 text-xl md:leading-loose md:text-2xl lg:leading-relaxed lg:text-3xl  xl:max-w-screen-lg 2xl:max-w-screen-xl">
        <Paragraph>
          Je suis Hubert Moncenis, un développeur web freelance avec plus de 4
          ans d'expérience dans le développement d’applications web complexe.
          Mon expertise gravite autour du monde du javascript/typescript de
          manière fullstack, avec une petite préférence pour la partie front-end
          et la recherche d’amélioration de l’expérience utilisateur.
        </Paragraph>
        <Paragraph>
          En-dehors de mon travail, je participe à la mise en place de
          l'événement annuel tech{" "}
          <Link href="https://bdxio.fr" target="_blank">
            bdxio
          </Link>
          . Mais je pratique aussi le bmx depuis 10 ans, j’aime faire des
          roadtrips avec mon van aménagé, danser dans les festivals de métal et
          essayer de faire de la musique en rythme sur ma batterie. (pas
          toujours facile 🥵)
        </Paragraph>

        <Paragraph>
          La créativité de ma personnalité se reflète dans mon travail.
          Véritable passionné de l’univers du développement, j’apporte toujours
          de la rigueur dans la réalisation de chaque projet. De nature
          empathique, je sais comprendre les besoins de mes collaborateurs et de
          mes clients, ce qui favorise la collaboration et la communication.
        </Paragraph>

        <Paragraph>
          Au niveau de mon parcours académique, j’ai tout d’abord obtenu un{" "}
          <Link
            href="http://formation.univ-fcomte.fr/but/metiers-du-multimedia-et-de-linternet"
            target="_blank"
          >
            DUT MMI
          </Link>
          , avant de continuer avec la{" "}
          <Link href="https://www.iut.u-bordeaux.fr/info/" target="_blank">
            licence professionnelle DAWIN
          </Link>
          . J’ai soldé mes études par un master développement web à{" "}
          <Link
            href="https://www.ecv.fr/digital/mastere-developpement-web/"
            target="_blank"
          >
            l'ECV digital
          </Link>
          {" ; "}
          j'ai également eu la chance de consacrer 2 ans à l'alternance, une
          expérience précieuse qui m'a permis de mettre en pratique mes
          connaissances théoriques.
        </Paragraph>

        <Paragraph>
          En ce qui concerne mes compétences techniques, je suis constamment en
          veille pour continuer à apprendre ou à évoluer. Au vu de mes
          expériences passées et des différents projets sur lesquels j’ai pu
          intervenir, vous pouvez penser à moi pour tout projet présentant une
          complexité métier forte. Niveau technologie, j’ai plus d’expérience
          sur des stacks javascript (avec Typescript idéalement). Pour la partie
          front, j’ai une solide expérience avec les frameworks Vue.js et React,
          mais je suis prêt à utiliser les outils qui conviennent le mieux à
          votre projet.
        </Paragraph>

        <Paragraph>
          Pour ce qui est des réalisations, j'ai pu intervenir sur des projets
          avec une complexité métier forte (domaine médical, administration...).
          Ma philosophie de travail met l'utilisateur au cœur de mes
          développements. Je m'efforce de concevoir des solutions web intuitive
          et accessible, tout en gardant à l'esprit l'importance de la
          maintenance et de la responsabilité environnementale.
        </Paragraph>

        <Paragraph>
          Si vous cherchez un développeur web passionné et compétent pour votre
          prochain projet, je suis prêt à relever le défi. N'hésitez pas à me
          contacter dès aujourd'hui pour discuter de vos besoins et pour
          travailler ensemble à la bonne réalisation de votre prochaine
          application. Vous pouvez me retrouver sur{" "}
          <Link
            href="https://www.malt.fr/profile/hubertmoncenis"
            target="_blank"
          >
            Malt
          </Link>
          ,{" "}
          <Link
            href="https://www.linkedin.com/in/**hubert-moncenis-41703783/"
            target="_blank"
          >
            Linkedin
          </Link>{" "}
          ou encore{" "}
          <Link href="https://github.com/HubM" target="_blank">
            Github
          </Link>
          .
        </Paragraph>
      </div>
    </main>
  );
}
