export function DetailedServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-orange-500">
      <div className="bg-black p-8 hover:bg-black/80 transition-colors h-full">
        <h3 className="text-orange-500 text-xl font-bold mb-4">ASIGURARI RCA</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          RCA : Asigurarea de răspundere civilă, RCA-ul, este o poliță obligatorie pentru toți șoferii. 
          Scopul acesteia este de a acoperi daunele provocate părților terțe implicate într-un accident provocat 
          de dumneavoastră. Daunele pe care le poate acoperi sunt cuprinzătoare, variind de la pagube materiale 
          provocate persoanelor terțe, la vătămări corporale, deces și, bineînțeles, daunele provocate 
          autoturismelor.
        </p>
      </div>
      <div className="bg-black p-8 hover:bg-black/80 transition-colors h-full">
        <h3 className="text-orange-500 text-xl font-bold mb-4">ASIGURARI CASCO</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          CASCO : este o asigurare auto facultativă care acoperă daunele suferite de mașina ta în urma unui 
          accident, avariile provocate de fenomene naturale și alte riscuri. Asigurarea CASCO nu este 
          obligatorie prin lege, cum este asigurarea RCA, este deci alegerea ta dacă închei o astfel de poliță sau 
          nu. Este bine însă să ai în vedere că dacă vei fi implicat într-un accident rutier, vei ajunge să plătești din 
          bugetul personal costurile de reparații.
        </p>
      </div>
      <div className="bg-black p-8 hover:bg-black/80 transition-colors h-full">
        <h3 className="text-orange-500 text-xl font-bold mb-4">ASIGURARI LOCUINTE SI CALATORIE</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-orange-500 font-semibold mb-2">LOCUINTE :</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ți ai găsit în sfârșit locuința și este locul unde te simți cel mai bine ! Ai grijă de el cu 
              asigurările de locuință atâta obligatorii cât și facultative cu acoperiri pe nevoile tale.
            </p>
          </div>
          <div>
            <h4 className="text-orange-500 font-semibold mb-2">ASIGURARI CALATORIE:</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cu toții visăm să ne relaxăm pe perioada concediului sau călătorilor în afara țării. Acest tip de poliță este unul 
              facultativ și se adresează clienților interesați de protecție financiară și medicală pe perioada deplasărilor.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

