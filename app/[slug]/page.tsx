import Layout from "@/components/layout";
import { ClaimsHero } from "@/components/claims-hero";
import { ClaimsProcess } from "@/components/claims-process";
import { redirect } from "next/navigation";

export default async function FGAPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const insurers = [
    "omniasig",
    "fga",
    "hellas-direct",
    "axeria",
    "garanta",
    "grawe",
    "uniqa",
    "baar",
    "generali",
    "groupama",
    "allianz",
    "asirom",
  ];
  const { slug } = await params;

  if (!insurers.includes(slug)) redirect("/");

  return (
    <Layout>
      <ClaimsHero insurer={slug} />
      <ClaimsProcess />
    </Layout>
  );
}
