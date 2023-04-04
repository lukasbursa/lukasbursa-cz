import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsUiChecks, BsShieldFillCheck, BsFillHouseFill, BsBarChartFill, BsLaptopFill } from "react-icons/bs";

import "./Home.css";
import imageOmne from "../img/home-omne.jpg"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <section className="container-fluid bg-image home-image">
        <div className="container">
          <div className="row align-items-center home-uvod">
            <div className="col-8">
              <p className="display-4 lh-base">
                Pomůžu vám prodat nemovitost <br />{" "}
                <span className="fw-bold">VÝHODNĚ</span> a{" "}
                <span className="fw-bold">BEZ STAROSTÍ</span>
              </p>
              <p className="lead">
                Uvažujete o prodeji a nevíte jakou hodnotu má vaše nemovitost?
              </p>
              <p>
                <Link
                  to="/odhad-zdarma"
                  className="btn btn-dark btn-lg "
                >
                  Vypracuji vám odhad ceny zdarma
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid bg-dark text-light py-5">
        <div className="container">
          <h2 className="fw-bolder display-4 text-uppercase text-center mb-4">
            S čím vám pomůžu
          </h2>
          <div className="row">
            <div className="col-12 col-lg p-3">
              <h3 className="text-uppercase d-inline-flex align-items-center"><BsBarChartFill className="bi me-2" />Odhad ceny nemovitosti</h3>
              <p className="text-justify">
                Nevíte, jak stanovit cenu při prodeji nemovitosti? Nechte si
                zdarma zpracovat odhad tržní ceny od odborníka.{" "}
                <Link to="/odhad-zdarma" className="link-light">
                  Více o odhadu zdarma
                </Link>
                .
              </p>
            </div>
            <div className="col-12 col-lg p-3">
              <h3 className="text-uppercase d-inline-flex align-items-center"><BsFillHouseFill className="bi me-2" />Prodej nemovitosti</h3>
              <p className="text-justify">
                Díky správné prodejní strategii a špičkovému realitnímu
                marketingu vám pomůžu prodat byt, dům nebo pozemek za maximální
                možnou cenu.
              </p>
            </div>
            <div className="col-12 col-lg p-3">
              <h3 className="text-uppercase d-inline-flex align-items-center"><BsFillHouseFill className="bi me-2" />Pronájem nemovitosti</h3>
              <p className="text-justify">
                Najdu vám spolehlivého nájemníka a zajistím kvalitní nájemní
                smlouvu. Ušetřete čas zvedáním telefonátů a děláním prohlídek. O
                vše se postarám.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container text-center py-5">
        <h2 className="display-4 text-uppercase fw-bolder mb-4">
          Jak prodávám nemovitosti
        </h2>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/_q0jyFwyezU"
          title="Jak prodávám nemovitosti"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>

      <section className="container-fluid bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg p-3">
              <h3 className="text-uppercase d-inline-flex align-items-center"><BsLaptopFill className="bi me-2" />Perfektní prezentace</h3>
              <p className="text-justify">
                Dávám si na prezentování každé nemovitosti opravdu záležet.
                Vytvořím poutavou prezentaci vaší nemovitosti, abychom dosáhli
                maximální prodejní ceny.
              </p>
            </div>
            <div className="col-12 col-lg p-3">
              <h3 className="text-uppercase d-inline-flex align-items-center"><BsShieldFillCheck className="bi me-2" />Bezpečí a spolehlivost</h3>
              <p className="text-justify">
                Buďte v klidu a bezpečí. Znám všechna úskalí obchodu a umím jim
                předcházet nebo je rychle vyřešit. Korektní jednání, upřímnost a
                spolehlivost jsou základem úspěšné spolupráce.
              </p>
            </div>
            <div className="col-12 col-lg p-3">
              <h3 className="text-uppercase d-inline-flex align-items-center"><BsUiChecks className="bi me-2" />O vše se postarám</h3>
              <p className="text-justify">
                Věnujte se svým blízkým. Prodej nebo pronájem nemovitosti nechte
                na mě. Postarám se o něj od začátku až do konce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container text-center py-5">
        <h2 className="display-4 text-uppercase fw-bolder mb-4">
          Co říkají klienti
        </h2>
        <div className="row">
          <div className="col-12 col-lg">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>
                  S prací makléře Lukáše Burši jsme byli maximálně spokojeni.
                  Super zpracovaná nabídka prodávané nemovitosti včetně
                  leteckých záběrů z dronu, perfektní komunikace, průběžně nás
                  během procesu prodeje informoval o každé nové nastalé situaci.
                  Pana Lukáše Buršu můžeme vřele doporučit při prodeji event.
                  koupi nemovitosti.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer text-end">
              Prodej bytu 3+1, Kuřim, <cite>manželé Havránkovi
                </cite>
              </figcaption>
            </figure>
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>
                  Jsme velmi spokojeni s prací realitního makléře, který se
                  dovedně vypořádal s prodejem nemovitosti, která vyžadovala
                  jiný přístup než většina jiných nemovitostí. Děkujeme a
                  přejeme vám spoustu dalších úspěchů a spokojených zákazníků.
                </p>
              </blockquote> 
              <figcaption className="blockquote-footer text-end"> 
              Byt 1+1, Zastávka u Brna, <cite>Jaroslav Mička
                </cite>
              </figcaption>
            </figure>
          </div>

          <div className="col-12 col-lg">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>
                Pan makléř Lukáš Burša, který se prodeji našeho bytu věnoval,
                byl opravdu profesionál tzv. na svém místě.</p><p> Už od prvního
                okamžiku jsme věděli, že jsme prodej svěřili do těch správných
                rukou, protože se nám opravdu věnoval už při první schůzce, vše
                vysvětlil, sdělil, jaký postup bude při prodeji zvolen, k ničemu
                nás nepřemlouval. Prostě jsme měli pocit, že prodej svěřujeme
                odborníkům... a takto to pokračovalo i nadále, byli jsme o jeho
                krocích vždy informováni a měli jsme tedy přehled, jak nabídky a
                později prodej probíhá.</p><p> Byt si brzy tj. po pár týdnech našel
                svého kupce a až do úplného závěru všechno probíhalo tak, jak
                jsme si ani ve snu nemysleli. Tedy úplně skvěle! Pár zkušeností
                s prodejem nemovitostí a pozemků už máme, takže můžeme
                srovnávat. Příště už vždy prostřednictvím vaší realitní
                kanceláře a vašeho makléře p. Buršu budeme doporučovat!
                Mnohokrát děkujeme!
              </p>
            </blockquote>
            <figcaption className="blockquote-footer text-end">
            Prodej bytu 1+1, Brno Komárov, <cite> Alena a Karel Vodičkovi
              </cite>
            </figcaption>
          </figure>
          </div>
         <div className="col-12 col-lg">
         <figure className="text-center">
            <blockquote className="blockquote">
              <p>
                Naši nemovitost měl na starost makléř pan Burša. Spokojenost se
                nedá vyjádřit slovy. Byla úžasná. Všechno bylo perfektní, pomoc
                neuvěřitelná. Touto cestou bych chtěla poděkovat za naprosto
                precizní práci. Vše fungovalo a reagoval vždy pružně a každou
                situaci vyřešil k naší naprosté spokojenosti. Moc děkuji.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer text-end">
            Prodej bytu 2+1, Blansko, <cite>Soňa Ošlejšková
              </cite>
            </figcaption>
          </figure>

          <figure className="text-center">
            <blockquote className="blockquote">
              <p>
              Dobrý deň, sám som nemohol byt prenajať celý mesiac. Pán Burša mi ho prenajal za 3 dni od doby kedy som mu dal kľúče. Naviac nachystal zmluvy a všetko zariadil. Nabudúce už to sám ani skúšať nebudem a rovno to zverím odborníkovi. Ďakujem.
              </p>
            </blockquote>
            <figcaption className="blockquote-footer text-end">
            Pronájem bytu 1+kk, Brno - Střed, <cite>Peter Langer
              </cite>
            </figcaption>
          </figure>
         </div>

        </div>
      </section>

      <section className="container text-center pt-5">
        <h2 className="display-4 text-uppercase fw-bolder mb-4">
          O mně
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-8 order-lg-2 col-auto pb-5">
            <h3 className="text-uppercase text-start fw-bold">10 LET NA TRHU</h3>
            <p className="text-justify">V realitách pracuji <strong>od roku 2011</strong> a za sebou mám stovky  <strong>úspěšně prodaných nemovitostí</strong>. Za svou kariéru jsem se setkal s obrovským množstvím složitých realitních případů a dokážu si tak poradit i s komplikovanými transakcemi. Žiju v Brně a věnuji se prodeji bytů, rodinných domů a pozemků v Jihomoravském kraji.</p>

            <h3 className="text-uppercase text-start fw-bold">MOJE STANDARDY</h3>
            <p className="text-justify">Prodávat nemovitosti mě <strong>baví</strong> a věřím, že nejdál dojdu s <strong>korektním jednáním</strong>, <strong>upřímností</strong> a <strong>optimismem</strong>. Rád přijímám nové výzvy a neustále se snažím <strong>zlepšovat</strong> po osobní i profesní stránce. Kvalitně odvedená práce je pro mě způsob, jak se realizovat a přispět svým malým dílem k lepšímu světu.</p>

            <h3 className="text-uppercase text-start fw-bold">JSEM SOUČÁSTÍ KELLER WILLIAMS</h3>
            <p className="text-justify">V roce 2021 jsem spojil síly a své jméno s jednou z největších realitních sítí na světě. V <Link to="https://kwcz.cz/" target="_blank" className="link">Keller Williams Czech Republic</Link> mám k dispozici nejmodernější marketingové nástroje pro prodej nemovitostí a můžu tak pro klienty vytvářet <strong>vysokou přidanou hodnotu</strong>. Díky nejlepšímu vzdělávacímu systému v ČR zároveň posouvám kvalitu své práce neustále dopředu.</p>
          </div>
          <div className="col-lg-4 col-4 mx-auto order-lg-1 col-auto me-auto align-self-end">
            <img src={imageOmne} alt="Lukáš Burša" className="img-fluid" />
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Home;
