import { Metadata } from "next";

import { Curriculumvitae } from "./CV";

export const metadata: Metadata = {
  title: "HM | curriculum vitæ",
  description:
    "Bienvenue sur le curriculum vitæ de Hubert Moncenis, développeur fullstack freelance",
};

export default function Page() {
  return (
    <>
      <Curriculumvitae />
    </>
  );
}
