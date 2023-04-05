import { useEffect } from "react";
import FormFreeEstimate from "../components/FormFreeEstimate";
import imageEstimate from "../img/odhad-zdarma.jpg";

const FreeEstimate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Odhad ceny nemovitosti zdarma | Lukáš Burša - realitní makléř Brno";
  }, []);

  return (
    <>
      <section className="container navbar-space">
        <h1 className="fw-bolder display-4 text-uppercase text-center mb-4">
          Odhad ceny nemovitosti zdarma
        </h1>
        <div className="row align-items-center bg-estimate">
          <div className="col-12 col-lg-7 col-xl-8">
            <h2>S čím vám pomůžu?</h2>
            <p>
              Zjistíte, jakou tržní hodnotu má váš <strong>dům</strong>,{" "}
              <strong>byt</strong> nebo <strong>pozemek</strong> a jak nastavit
              jeho kupní cenu při prodeji. Nebo si jen můžete zdarma nechat
              zkontrolovat, zda máte svou cenu nastavenou správně.
            </p>
            <h2>Jak to funguje?</h2>
            <p>
              Vyplníte formulář níže a odešlete mi ho. Pokud bude potřeba,
              kontaktuji vás pro upřesnění informací o nemovitosti. Potom vám na
              email pošlu odhad ceny, za kterou je možné nemovitost prodat na
              aktuálním trhu. Většinou odhad zvládnu zpracovat do 36 hodin.
            </p>
            <h2>Kdo dělá odhad?</h2>
            <p>
              Odhad vypracovávám sám. Mám více, než 10 let zkušeností s prodejem
              nemovitostí v Jihomoravském kraji a proto se velmi dobře orientuji
              v prodejních cenách.
            </p>
            <h2>Jak odhad dělám?</h2>
            <p>
              Pro co nejpřesnější odhad vycházím ze znalosti realitního trhu, z
              cen podobných <strong>prodaných nemovitostí</strong> a zohledňuji
              konkrétní <strong>specifika každé nemovitosti</strong>. Jsem tak
              schopen určit mnohem přesnější odhad než kalkulačky na internetu.
              Nevycházím jen z nabídkových internetových cen, které mohou být
              nepřesné.
            </p>
            <h2>Pro jaké účely můžete odhad tržní ceny použít?</h2>
            <p>
              Jedná se o <strong>odhad tržní ceny</strong>. Můj odhad je vhodný,
              pokud potřebujete stanovit{" "}
              <strong>prodejní cenu nemovitosti</strong> nebo vás jen zajímá
              její aktuální hodnota na realitním trhu. Dokážu vyhotovit odhad i
              pro <strong>dědické řízení</strong>. Nedělám odhady pro vyřízení
              úvěru v bance apod.
            </p>
            <h2>Proč je to zdarma?</h2>
            <p>
              Vy získáte odhad a já získám možnost vám ukázat své služby. Pokud
              budete spokojeni, uvítám, když se na mě někdy v budoucnu obrátíte.
            </p>
          </div>
          <div className="col-4 col-lg-5 col-xl-4 align-self-end mx-auto">
            <img src={imageEstimate} alt="Odhad zdarma" className="img-fluid" />
          </div>
        </div>
      </section>
      <FormFreeEstimate />
    </>
  );
};

export default FreeEstimate;
