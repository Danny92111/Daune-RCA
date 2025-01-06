const SERVICES_CONTENT = [
  {
    title: "CONSTATARI DAUNE",
    content:
      "Ai fost implicat într-un accident rutier? Sună-ne și vino la centrul nostru de constatare pentru întocmirea dosarului de daună. Ne ocupăm de toată documentația necesară, astfel încât tu să ai parte de o soluționare rapidă și fără stres!",
  },
  {
    title: "MASINA LA SCHIMB",
    content:
      "Ai avut un accident și ești partea păgubită ? Beneficiezi de auto de înlocuire conform legislației în vigoare: </br> </br> Conform Normei 18/2022 pentru modificarea si completarea Normei Autoritatii de Supraveghere Financiara nr. 20/2017 partea pagubita intr-un accident auto beneficiaza de masina de inlocuire pe perioada cat masina sa se afla in service pentru reparatie.",
  },
  {
    title: "REGIE PROPRIE",
    content:
      "Reparatia in regie proprie a autoturismului asigurat RCA sau CASCO se refera la faptul ca asiguratul solicita despagubirea pe baza evaluarii facute de catre asigurator inainte ca autovehiculul sa fie reparat, dupa care se ocupa el insusi, pe cont propriu, de aducerea acestuia la starea dinaintea producerii ...Totusi, suma poate fi nemulțumitoare și insuficienta pentru reparația mașinii. Vino la noi și îți achităm suma corectă ! ",
  },
  {
    title: "TRANSCRIERI AUTO",
    content:
      "<b>Cumpărați sau vindeți o mașină?</b></br>Noi vă putem ajuta! Oferim servicii complete de completare a actelor, îndrumare pas cu pas și finalizarea tuturor procedurilor pentru transferul de proprietate a unui autovehicul înmatriculat. Simplificăm procesul de vânzare-cumpărare pentru ca dvs. să economisiți timp și să evitați complicațiile. Contactați-ne pentru o tranzacție fără griji!",
  },
  {
    title: "TRACTARI 24/7",
    content:
      "Indiferent de dimensiunea sau tipul vehiculului dumneavoastră, suntem echipa potrivită pentru a vă oferi asistență în momentele dificile. Oferim servicii de tractare non-stop, 24/7, pentru a vă asigura că sunteți în siguranță și că vehiculul dumneavoastră ajunge într-un loc sigur sau la service-ul dorit. Suntem aici pentru a vă oferi liniștea și asistența necesară în momentele dificile pe drum.",
  },
  {
    title: "REPARATII AUTO",
    content:
      "Avem parteneriate solide cu service-uri auto de încredere, asigurându-ne că beneficiați de cele mai bune servicii în fiecare situație.De la reparații mecanice, tinichigerie, la intervenții electrice, avem acces la o rețea extinsă de specialiști în domeniu. Fiecare partener este selectat cu grijă pentru competența și profesionalismul său, garantându-vă că vehiculul dumneavoastră este în mâini sigure și pricepute. Nu ne ocupăm doar de reparații auto, ci vă oferim acces la o rețea de parteneri dedicați, asigurându-ne că obțineți cele mai bune soluții pentru nevoile dumneavoastră specifice.",
  },
  {
    title: "ASIGURARI RCA",
    content:
      "<span class='text-orange-500 font-bold text-xl'>RCA:</span> Asigurarea de raspundere civila, RCA-ul, este o polita obligatorie pentru toti soferii. Scopul acesteia este de a acoperi daunele provocate partilor terte implicate intr-un accident provocat de dumneavoastra. Daunele pe care le poate acoperi sunt cuprinzatoare, variind de la pagube materiale provocate persoanelor terte, la vatamari corporale, deces si, bineinteles, daunele provocate autoturismelor.",
  },
  {
    title: "ASIGURARI CASCO",
    content:
      "<span class='text-orange-500 font-bold text-xl'>CASCO:</span> Este o asigurare auto facultativă care acoperă daunele suferite de mașina ta în urma unui accident, avariile provocate de fenomene naturale și alte riscuri. Asigurarea CASCO nu este obligatorie prin lege, cum este asigurarea RCA, este deci alegerea ta dacă închei o astfel de poliță sau nu. Este bine însă să ai în vedere că dacă vei fi implicat într-un accident rutier, vei ajunge să plătești din bugetul personal costurile de reparații",
  },
  {
    title: "ASIGURARI LOCUINTE SI CALATORIE",
    content:
      "<span class='text-orange-500 font-bold text-xl'>LOCUINTE:</span> Ti ai găsit în sfârșit locuința  și este locul unde te simți cel mai bine ! Ai grijă de el cu asigurările de locuință atâta obligatorii cat și facultative cu acoperiri pe nevoile tale.</br></br> <span class='text-orange-500 font-bold text-xl'>ASIGURARI CALATORIE:</span>: Cu toții visăm să ne relaxăm pe perioada concediului sau călătorilor în afara țării. Acest tip de poliță este unul facultativ și se adresează clienților interesați de protecție financiară și medicală pe perioada deplasărilor.",
  },
];

export function DetailedServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] transition-all duration-700 delay-500 border border-solid border-orange-500 bg-orange-500">
      {SERVICES_CONTENT.map((service) => (
        <div
          className="bg-black p-8 hover:bg-black/80 h-full"
          key={service.title}
        >
          <h3 className="text-orange-500 text-xl font-bold mb-4">
            {service.title}
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: service.content }}
            className="text-gray-300 text-sm leading-relaxed"
          />
        </div>
      ))}
    </div>
  );
}
