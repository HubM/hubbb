import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HM - Curriculum vitæ",
  description:
    "Bienvenue sur le curriculum vitæ Hubert Moncenis, développeur web freelance",
};

export default function Curriculumvitae() {
  return (
    <main className="min-h-screen pt-32 p-16 bg-gradient-to-b from-black via-50% via-[#010208] to-90% to-[#122E52]"></main>
  );
}
