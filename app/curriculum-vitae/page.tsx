"use client";
import React, { HTMLProps, useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

import Heading from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { ExternalLink } from "@/components/ExternalLink";

function Dropdown({
  className,
  children,
  title,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const [isOpen, setOpen] = useState(true);
  return (
    <div
      {...props}
      className={`transition-opacity opacity-60 hover:opacity-95 print:transition-none print:opacity-95 ${
        className || ""
      }`}
    >
      <Heading
        level={3}
        className={`cursor-pointer flex items-center gap-2 ${isOpen && "mb-4"}`}
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? (
          <PiEyeBold className="text-white" />
        ) : (
          <PiEyeClosedBold className="text-white" />
        )}
        {title}
      </Heading>
      {isOpen && <div className="flex flex-col gap-4">{children}</div>}
    </div>
  );
}

function Section({
  className,
  children,
  title,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <section
      {...props}
      className={`flex items-start print:text-black ${className || ""}`}
    >
      <Heading
        level={2}
        className="min-w-[200px] font-light text-base -tracking-tighter uppercase"
      >
        {title}
      </Heading>
      <div className="text-base">{children}</div>
    </section>
  );
}

export default function Curriculumvitae() {
  return (
    <>
      <header>
        <Heading level={1}>Hubert Moncenis</Heading>
      </header>
      <div className="flex flex-col leading-relaxed gap-10 text-base print:text-base">
        <Section title="Profil">
          <Paragraph className="italic !text-xl">
            Le challenge de prendre part à la conception et au développement de
            produits à forte valeur ajoutée est l’essence même de mon métier de
            développeur. C'est dans cette optique que je m'efforce de produire
            un code maintenable, responsable et scalable.
          </Paragraph>
        </Section>
        <Section title="Expérience">
          <div className="flex flex-col gap-8">
            <Dropdown
              title="Potentiel (beta gouv) | Développeur fullstack, Freelance |
                Remote | 2018 - Aujourd'hui"
            >
              <Paragraph>
                <ExternalLink href="https://beta.gouv.fr/">
                  beta.gouv
                </ExternalLink>{" "}
                est un programme d’incubation qui aide les administrations
                publiques à construire des services numériques utiles, simples,
                faciles à utiliser et qui répondent vraiment aux besoins de ces
                utilisateurs. Dans ce cadre je travaille pour le projet{" "}
                <ExternalLink href="https://beta.gouv.fr/startups/potentiel.html">
                  Potentiel
                </ExternalLink>
                . Cette startup d'état a pour mission principale de faciliter le
                parcours des producteurs d'énergies renouvelables électriques
              </Paragraph>
              <div>
                <div>Missions principales :</div>
                <ul>
                  <li>Conception et développement de fonctionnalités</li>
                  <li>Maintenance et code reviews</li>
                  <li>
                    Passage de l'architecture front-end en atomic design
                    (utilisation du design system de l'état)
                  </li>
                </ul>
              </div>
              <div>
                <div>Missions secondaires :</div>
                <ul>
                  <li>Participation à différents évènements beta.gouv</li>
                </ul>
              </div>
            </Dropdown>
            <Dropdown title="Webians | Développeur fullstack, CDI | Bordeaux | 2018 - 2022">
              <Paragraph>
                <ExternalLink href="https://webians.fr/">Webians</ExternalLink>{" "}
                est une agence qui crée des applications web et des
                design-systems en se basant les méthodes agiles pour organiser
                ses projets et itérer avec ses clients.
              </Paragraph>
              <div>
                <div>Missions principales :</div>
                <ul>
                  <li>Développement de fonctionnalités et code reviews</li>
                  <li>
                    Participation à la réalisation, estimation et organisation
                    du backlog
                  </li>
                  <li>
                    Participation à l'organisation du planning et gestion de
                    l'équipe technique
                  </li>
                </ul>
              </div>
              <div>
                <div>Missions secondaires :</div>
                <ul>
                  <legend>Missions secondaires :</legend>
                  <li>Mise en place de process de déploiement</li>
                  <li>
                    Participation à la mise en place d'architecture front-end
                    scalable
                  </li>
                  <li>
                    Travail serveur (mise en place de crons, synchros
                    automatiques)
                  </li>
                  <li>
                    Participation à l'organisation de la DX et des process de
                    dev
                  </li>
                  <li>
                    Rédaction de la documentation technique Au sein de cette
                    entreprise
                  </li>
                </ul>
              </div>
            </Dropdown>
            <Dropdown title="WSB | Développeur front-end, Alternance | Bordeaux | 2017 - 2018">
              <Paragraph>
                <ExternalLink href="https://www.wsb-agency.com/">
                  WSB
                </ExternalLink>{" "}
                est une agence qui accompagne ses clients dans le développement
                de leur stratégie de communication via la mise en place et la
                maintenance de solutions globales et digitales
              </Paragraph>
              <div>
                <div>Missions principales :</div>
                <ul>
                  <li>
                    Développement de fonctionnalités et code reviews (PHP / JS)
                  </li>
                  <li>
                    Maintenance des applications existantes (CMS / Django)
                  </li>
                </ul>
              </div>
              <div>
                <div>Missions secondaires :</div>
                <ul>
                  <li>
                    Travail dans un environnement linux m'ayant permis d'être
                    plus à l'aise avec l'utilisation d'un terminal unix
                  </li>
                </ul>
              </div>
            </Dropdown>
          </div>
        </Section>
        <Section title="Études">
          <div className="transition-opacity opacity-60 hover:opacity-95 print:transition-none print:opacity-95 flex flex-col gap-2">
            <Heading level={3} className=" flex items-center gap-2">
              Master développement web (alternance) | ECV Digital Bordeaux |
              2017-2019
            </Heading>
            <Heading level={3} className=" flex items-center gap-2">
              Licence Pro DAWIN | Université Bordeaux | 2016-2017
            </Heading>
            <Heading level={3} className=" flex items-center gap-2">
              Année passerelle | Digital Campus Bordeaux | 2015-2016
            </Heading>
            <Heading level={3} className=" flex items-center gap-2">
              DUT MMI | Université Belfort-Montbéliard | 2013-2015
            </Heading>
          </div>
        </Section>
      </div>
    </>
  );
}
