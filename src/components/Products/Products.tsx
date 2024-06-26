import React, { useEffect, useState } from "react";
import styles from "../Products/Products.module.scss";
import images from "./../../data/images";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { orderErrors, orderProps } from "../../utils/OrderInterfaces";
import { sendOrderConfirmation } from "../../services/emails";
import { Helmet } from "react-helmet";

export const productsData = [
  {
    id: "gazon-premium",
    category: "semințe",
    name: "Gazonul™ Premium",
    description:
      "Gazonul™ Premium este o mixtură de soiuri de semințe atent selecționate și testate de peste 20 de ani. Create special pentru a răspunde exigențelor practice și estetice ale consumatorilor, garantăm obținerea unei culturi de gazon dense, omogene, de o culoare verde închis, uniformă și elegantă.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "99,8% – 100% (liber de Poa annua si alte graminee perene si anuale)",
      germinatie: "minim 95%",
      rezistentaTrafic: "foarte mare",
      rezistentaBoli: "foarte mare",
      rezistentaSeceta: "foarte mare",
      rezistentaUmbra: "foarte mare",
      vitezaInstalare: "mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "2,5-3 cm",
      frecvCosire: "deasa",
      perenitate: "foarte mare"
    },

    descriereMare:
      "De o calitate deosebită, gazonul rezultat din semințele Gazonul™ Premium este destinat pentru înființarea peluzelor în cartierele rezidențiale, în parcurile publice, pe terenurile de sport cu un înalt grad de performanță, dar și pentru a contura grădina ideală.Semințele Gazonul™ Premium sunt perfecte pentru obținerea unei peluze cu o durată mare de viață, corelată cu ușurința întreținerii în condiții optime. Cu o rezistență ridicată la secetă și boli, gazonul obținut este foarte eficient în condiții de trafic intens și se regenerază rapid după incidența factorilor de stres.Mai mult, consistența și gradul ridicat de acoperire a covorului de iarbă rezultat, oferă cele mai bune condiții de desfășurare a activităților sportive,  performanța fiind garantată."
  },
  {
    id: "gazon-select",
    category: "semințe",
    name: "Gazonul™ Select",
    description:
      "Semințele Gazonul™Select sunt destinate celor care își doresc o gradină ideală, atât luxurioasă cât și practică. Gazonul rezultat are un foliaj fin, subțire, o culoare vie și cu o durată de viață de 10-20 de ani.Dacă doriți să vă bucurați de un covor compact și catifelat și nu vă deranjează să depuneți un efort susținut în întreținerea gazonului, semințele Gazonul™Select vor aduce satisfacție și celor mai exigenți grădinari.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "premium",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "7-12 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "99,8% – 100%",
      germinatie: "minim 95%",
      finete: "foarte mare",
      rezistentaTrafic: "foarte mare",
      rezistentaBoli: "foarte mare",
      rezistentaSeceta: "mare",
      rezistentaUmbra: "mare",
      vitezaInstalare: "foarte mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "2-3 cm",
      frecvCosire: "deasa",
      perenitate: "mare"
    },
    descriereMare:
      "Indicat pentru petrecerea timpului în aer liber, pentru spațiile recreative ori pentru locurile de joacă adresate copiilor, gazonul rezultat este strălucitor și foarte plăcut la atingere. Datorită toleranței foarte bune la călcare este ideal și pentru înființarea terenurilor de sport sau rugby.Solicitand un pic mai multă atenție față de alte varietăți de semințe precum Gazonul™Secetă, Umbră sau Premium, semințele Gazonul™Select compensează prin calitatea ornamentală superioară, prin durabilitate, sofisticare și confort."
  },

  {
    id: "gazon-seceta",
    category: "semințe",
    name: "Gazonul™ Secetă",
    description:
      "Semințele Gazonul™ Secetă sunt special concepute pentru un climat uscat și pentru spațiile fără sistem automatizat de irigare sau cu drenaj redus. Provenit dintr-un amestec de semințe cu grad ridicat de puritate si germinație, gazonul rezultat se caracterizează prin rădăcini bine dezvoltate și un foliaj sănătos.În condiții de secetă, gazonul își menține culoarea verde și are o cromatică placută.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "secetă",
      cerinte_lumina: "soare,semi-umbra , umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "99,8% – 100%",
      germinatie: "minim 95%",
      rezistentaTrafic: "mare",
      rezistentaBoli: "mare",
      rezistentaSeceta: "foarte mare",
      rezistentaUmbra: "mare",
      vitezaInstalare: "medie"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "2,5 cm",
      frecvCosire: "medie",
      perenitate: "foarte mare"
    },

    descriereMare:
      "Semințele Gazonul™ Secetă sunt alegerea ideală pentru cei care își doresc o peluză frumoasă, fără prea multe bătăi de cap. Mai mult, ele reprezintă soluția cea mai sustenabilă de economisire a resurselor de apă, energie și timp.În plus, gazonulare o rezistență mare la dăunători și boli, o toleranță crescută la lipsa nutrienților din sol și se păstrează bine la călcare. Astfel, semințele Gazonul™ Secetă pot fi utilizatecu succespentrupeluzele destinate activităților de agrement sau sportive. În condiții de întreținere optime, semințele au o perenitate foarte mareși o calitate crescută. Ele pot fi folosite împreună cu semințele Gazonul™ Umbră,rezistând perfect atît la soare, cât și la umbră și semi-umbră."
  },
  {
    id: "gazon-umbra",
    category: "semințe",
    name: "Gazonul™ Umbră",
    description:
      "Dacă vă doriți o gradină înconjurată de arbori sau o livadă aspectuoasă, semințele Gazonul™ Umbră reprezintă alegerea ideală. Cu o formulă special creată, acestea vor da naștere unui gazon care se va dezvolta armonios în orice condiții.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "umbra",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "99%",
      germinatie: "minim 95%",
      rezistentaTrafic: "mare",
      rezistentaBoli: "mare",
      rezistentaSeceta: "mare",
      rezistentaUmbra: " foarte  mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 40-50 m2",
      adancimeInsamantare: "0,5-1 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "7-10 cm",
      inaltimeDupaCosire: "4-5 cm",
      frecvCosire: "rara",
      perenitate: "mare"
    },
    descriereMare:
      "Potrivite atât pentru spațiile umbrite, cât și pentru cele însorite din grădini sau parcuri, semințele Gazonul™ Umbră asigură o creștere uniformă pe toata suprafața terenului care urmează a fi acoperit. Astfel, se generează un spațiu confortabil pentru destindere și o suprafață decorativă și luminoasă, care vă va satisface din punct de vedere estetic un timp îndelungat.Peluza rezultată din semințele Gazonul™ Umbră este foartemaleabilă, cu o rezistență la variațiile factorilor înconjurători, în special la excesul de umiditate și luminozitatea scazută. Mai mult, gazonul este foarte rezistent la boli și insecte și nu necesită cosire frecventă, ceea ce îl face ușor de întreținut.Funcționează excelent împreună cu semințele Gazonul™ Secetă, mixarea celor două tipuri desemințe reprezentând soluția cea maipotrivită pentru spațiilecu umbră, semi-umbră și soare."
  },

  {
    id: "gazon-instant",
    category: "semințe",
    name: "Gazonul™ Instant",
    description:
      "Dacă doriți un gazon care necesită costuri reduse de înființare și întreținere și care să crească rapid, indiferent de condițiile de climă sau relief, semințele Gazonul™Instant sunt cele mai recomandate. Astfel, vă puteți bucura de o peluză verde cu efort minim, în mai puțin de două saptămâni.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "instant",
      cerinte_lumina: "soare,semi-umbra",
      perioada_germinare: "7-10 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "99%",
      germinatie: "minim 95%",
      finete: "mare",
      rezistentaTrafic: "mare",
      rezistentaBoli: "mare",
      rezistentaSeceta: "medie",
      rezistentaUmbra: " medie",
      vitezaInstalare: "foarte mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "2-3 cm",
      frecvCosire: "deasa",
      perenitate: "medie"
    },
    descriereMare:
      "Obținut dintr-un amestec de semințe cu caracter polivalent, gazonul rezultat se instalează imediat și răsare între 3-10 zile, în funcție de climă. Mai mult, prin germinarea rapidă,se reduce considerabil capacitatea buruienilor de a crește.Cu un grad mare de adaptabilitate și rezistență la trafic și dăunători, gazonul obținut din semințele Instant este pretabil atât pentru zonele de câmpie, cât și pentru cele de deal sau de munte. De asemenea, semințele pot fi folosite cu succes și pentru înființarea spațiilor de agrement sau pentru acoperirea terenurilor de sport pentru amatori.Prin drumul scurt parcurs de la plantare la prima cosire, semințele Gazonul™Instant se remarcă față de celelalte semințe din gama Gazonul™, fiind cele mai eficiente în instalare și creștere."
  },

  {
    id: "gazon-clasic",
    category: "semințe",
    name: "Gazonul™ Clasic",
    description:
      "Cu o formulă echilibrată, amestecul de semințe Gazonul™ Clasic are destinație universală. Rezistent la trafic și boli, gazonul rezultatacoperă uniform suprafețe extinse de teren cu iarbă robustă. Astfel, servește cu succes atât scopurilor practice, cât și celor ambientale.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "clasic",
      cerinte_lumina: "soare",
      perioada_germinare: "7-12 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "98%",
      germinatie: "minim 95%",
      finete: "medie",
      rezistentaTrafic: "mare",
      rezistentaBoli: "mare",
      rezistentaSeceta: "medie",
      rezistentaUmbra: " slaba",
      vitezaInstalare: "mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "6-7 cm",
      inaltimeDupaCosire: "3-4 cm",
      frecvCosire: "rara",
      perenitate: "mare"
    },
    descriereMare:
      "Semințele Gazonul™ Clasic sunt ideale pentru înființarea și supraînsămânțarea peluzelor din parcurile publice, pentru decorarea spațiilor de agrement, pentru stabilizarea solului de pe taluze, pentru acoperirea zonelor industriale sau optimizarea zonelor de podgorii.Gazonul rezultat din semințele Gazonul™ Clasic este durabil șise dezvoltă bine în condiții normalede umiditate și lumină, mai puțin în zonele cu umbră sau de secetă. Rezistent la trafic și boli, se pretează tuturor condițiilor climatice. Amestecul de semințe poate ficombinat cu semințele Gazonul™Instant și Gazonul™Carpați pentru rezultate extra."
  },

  {
    id: "gazon-carpati",
    category: "semințe",
    name: "Gazonul™ Carpați",
    description:
      "Creat special pentru a aduce prospețimea ierbii de la munte, semințele Gazonul™ Carpați decorează perfect spațiile cu trafic intens, mai ales grădinile dedicate copiilor sau animalelor. Dacă doriți să vă bucurați de o peluză un frunziș fin, des, de un verde crud, așa cum este pajiștea de la munte, amestecul de semințe Gazonul™ Carpați este alegerea potrivită, iar gazonul rezultat va deveni locul preferat de relaxare al oricărei familii.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "semințe",
      tip: "gazon",
      denumire: "carpati",
      cerinte_lumina: "soare,semi-umbra",
      perioada_germinare: "7-12 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "98%",
      germinatie: "minim 95%",
      finete: "foarte mare",
      rezistentaTrafic: "medie",
      rezistentaBoli: "mare",
      rezistentaSeceta: "medie",
      rezistentaUmbra: " mare",
      vitezaInstalare: "foarte mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "3-4 cm",
      frecvCosire: "rara",
      perenitate: "mare"
    },
    descriereMare:
      "Gazonul™ Carpați se pretează tuturor mediilor, el necesitând o îngrijire mai atentă în zonele uscate pentru a se dezvolta corespunzător. Mai mult, amestecul de semințeeste ideal pentru zonele de deal și munte, de până la 1000 de metri.Conceput pentru a menține umiditatea și rezistența solului și pentru a-și păstra culoarea intensă un timp îndelungat, Gazonul™ Carpați are o finețe ridicată, ceea ceea ce îl face îmbietor pentru atingere și îi conferă un aspect decorativ plăcut.Amestecul este compatibil cu semințele Gazonul™Instant și Gazonul™ Clasic, ceea ce conferă o rezistență mai mare la trafic și boli."
  },

  {
    id: "gazon-starter",
    category: "îngrășăminte",
    name: "Gazonul™ Starter",
    description:
      "Ingrasamantul Gazonul™ Starter este ideal pentru o fertilizare de baza – de amenajare, de regenerare sau de indreptare a peluzei. Se foloseste in fazele de semanare, de suprainsamnantare sau de asternere a covorului de gazon.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "îngrășăminte",
      tip: "îngrășăminte",
      denumire: "starter",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "98%",
      germinatie: "minim 95%",
      finete: "foarte mare",
      rezistentaTrafic: "medie",
      rezistentaBoli: "mare",
      rezistentaSeceta: "medie",
      rezistentaUmbra: " mare",
      vitezaInstalare: "foarte mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "3-4 cm",
      frecvCosire: "rara",
      perenitate: "mare"
    },
    descriereMare: (
      <div>
        {" "}
        Continutul bogat in azot al acestei formule, stimuleaza o germinare rapida a semintelor si accelereaza ritmul de
        crestere si regenerare al partii aeriene a plantelor. Astfel, se sprijina calitatea gazonului rezultat, printr-o
        crestere sanatoasa si o fixare puternica a radacinilor. Gazonul™ Starter favorizeaza absorbtia substantelor
        nutritive la nivelul sistemului radicular al plantelor si mareste capacitatea de prelucrare a nutrientilor in
        organele acestora. <br /> <br />
        Recomandate in etapa initiala de crestere si dezvoltare a gazonului, tratamentele cu Gazonul™ Starter vor avea,
        de asemenea, efecte remarcabile daca vor fi realizate in momentele in care exista intarzieri in dezvoltarea
        plantelor. Sunt cele mai recomandate pentru fertilizarea de primavara ori pentru scoaterea culturilor de sub
        incidenta negativa a unor factori climatici. Fertilizantul poate fi utilizat pentru o crestere sau pentru o
        regenerare intensiva, avand un efect rapid. Mai mult, sunt asimilate usor de catre plante si le da acestora
        energie de lunga durata, prin activarea procesului de fotosinteza.
      </div>
    )
  },
  {
    id: "gazon-balance",
    category: "îngrășăminte",
    name: "Gazonul™ Balance",
    description:
      "Avand o formula echilibrata, ingrasamantul Gazonul™ Balance este ideal pentru o fertilizare de indreptare si de intretinere a peluzei pe intreaga sa durata de viata. Fiind potrivit pentru utilizare in toate fazele de vegetatie ale gazonului, acesta ajuta la echilibrarea raportului nutritional al plantelor. Mai mult, este ideal pentru acoperirea tuturor carentelor din sol, oferind vegetatiei toate elementele necesare unei cresteri continue",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "îngrășăminte",
      tip: "îngrășăminte",
      denumire: "balance",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "98%",
      germinatie: "minim 95%",
      finete: "foarte mare",
      rezistentaTrafic: "medie",
      rezistentaBoli: "mare",
      rezistentaSeceta: "medie",
      rezistentaUmbra: " mare",
      vitezaInstalare: "foarte mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "3-4 cm",
      frecvCosire: "rara",
      perenitate: "mare"
    },
    descriereMare: (
      <div>
        {" "}
        Prin folosire si dozare adecvate, intensifica coloritul general al frunzelor, impiedicand ingalbenirea si
        uscarea plantelor, in conditiile stresului provocat de factorii climatici si chimici. Ingrasamantul Gazonul™
        Balance poate fi de asemenea folosit pentru prevenirea si tratarea bolilor de nutritie. Imbunatatind capacitatea
        gazonului de a se regenera dupa incidenta acestora, fertilizantul mareste in acelasi timp rezistenta la seceta
        si ajuta la dezvoltarea normala a plantelor, chiar daca regimul precipitatiilor este deficitar. <br /> <br />
        Raportul moderat dintre azot si potasiu din formula Balance este cel care determina utilizarea optima a
        nutrientilor si a resurselor de apa, asigurand o crestere puternica, rezistenta indelungata si culori vii, chiar
        si atunci cand gazonul este expus la temperaturi mari. Eliberarea graduala in timp a acestor nutrienti asigura o
        actiune delicata si de lunga durata a ingrasamantului, acesta fiind eficient pana la 12 saptamani.
      </div>
    )
  },
  {
    id: "gazon-fortify",
    category: "îngrășăminte",
    name: "Gazonul™ Fortify",
    description:
      "Fertilizantul Gazonul™ Fortify este conceput special pentru a dezvolta rezistenta gazonului la trafic intens, la conditii de clima mai putin favorabile, la daunatori si boli. Acesta prelungeste semnificativ durata de viata a gazonului, prin imbunatatirea tesutului vegetal si cresterea imunitatii.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "îngrășăminte",
      tip: "îngrășăminte",
      denumire: "gazon-fortify",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "98%",
      germinatie: "minim 95%",
      finete: "foarte mare",
      rezistentaTrafic: "medie",
      rezistentaBoli: "mare",
      rezistentaSeceta: "medie",
      rezistentaUmbra: " mare",
      vitezaInstalare: "foarte mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "3-4 cm",
      frecvCosire: "rara",
      perenitate: "mare"
    },
    descriereMare: (
      <div>
        {" "}
        Ingrasamantul este de ajutor in eliminarea deficientelor si revigorarea metabolismului fiziologic al plantelor.
        Gazonul™ Fortify este cel mai potrivit pentru culturile amplasate pe soluri cu fertilitate naturala scazuta (in
        special soluri cu deficienta de potasiu), ajutand la refacerea aspectului, in special in urma folosirii intense
        sau dupa perioade in care au fost supuse unor conditii accentuate de stres. <br /> <br />
        Fertilizantul Gazonul™ Fortify este recomandat, de asemenea, pentru ultimele faze de vegetatie ale gazonului.
        Continutul mare de potasiu al formulei promoveaza maturizarea tesuturilor, favorizand multiplicarea celulara si
        formarea substantelor de stocare. Astfel, se asigura protectia impotriva vantului si frigului si se pregateste
        gazonul pentru iarna. Aplicandu-l toamna, nu numai ca puteti profita un timp mai indelungat de un gazon verde
        dar, prin cresterea rezistentei la inghet, dar se va reduce in acelasi timp riscul de boli fungice invadatoare.
        In consecinta, se asigura atat iernarea in conditii de siguranta, cat si reluarea cresterii si dezvoltarii
        gazonului in primavara.{" "}
      </div>
    )
  },
  {
    id: "fertilizant-nutrifix",
    category: "îngrășăminte",
    name: "Fertilizant lichid NutriFix™",
    description:
      "NutriFix™ este un ingrasamant foliar cu 22% continut de azot. 41% dintre acesta este azot cu actiune rapida (in diverse forme, incluzand azot ureic, azotat si azot amoniacal) care poate fi resorbit rapid si complet de catre plante intr-un interval de 24 – 48 de ore dupa aplicare. Restul de azot este sub forme polimerice scurte de uree metilenica cu eliberare lenta – MDU si DMTU.",
    imageUrl: images.products.gazonImg,
    greutate_dimensiune: "750g / 29 x 17 x 6,5 cm",
    caracteristici: {
      culoare: "verde",
      tip_produs: "îngrășăminte",
      tip: "îngrășăminte",
      denumire: "fertilizant-nutrifix",
      cerinte_lumina: "soare,semi-umbra, umbra",
      perioada_germinare: "8-15 zile",
      perioada_plantare: "Martie – Decembrie"
    },
    specificatiiTehnice: {
      puritate: "98%",
      germinatie: "minim 95%",
      finete: "foarte mare",
      rezistentaTrafic: "medie",
      rezistentaBoli: "mare",
      rezistentaSeceta: "medie",
      rezistentaUmbra: " mare",
      vitezaInstalare: "foarte mare"
    },

    normePlantare: {
      normaInsamantare: "1kg = 35-50 m2",
      adancimeInsamantare: "1-1,5 cm",
      normaSupraInsamantare: "1kg = 70-100 m2"
    },

    normeIngrijire: {
      inaltimeCosire: "5-6 cm",
      inaltimeDupaCosire: "3-4 cm",
      frecvCosire: "rara",
      perenitate: "mare"
    },
    descriereMare: (
      <div>
        {" "}
        NutriFix™ inglobeaza, de asemenea, oligoelemente chelate cu EDTA pentru absorbtie rapida, printre care cupru,
        fier, magneziu, zinc si alte microelemente precum bor si molibdum. Nu contine elemente sau compusi fitotoxici
        (biuret sau formaldehida libera). <br /> <br />
        Multumita formulei sale complexe si indicelui scazut de sare, NutriFix™ determina o crestere a masei radiculare
        si o sanatate mai viguroasa a plantelor decat solutiile traditionale pentru fertilizare. Fara a cauza necrozarea
        localizata a tesuturilor la punctele de contact sau stres osmotic, NutriFix™ imbunatateste in acelasi timp
        siguranta culturilor. Extrem de potrivit pentru gazon, pastreaza plantele verzi fara a determina cresterea
        excesiva a acestora. <br />
        <br />
        NutriFix™ poate fi combinat cu alte produse de fertilizare, cu macro si microelemente (completarea cu potasiu si
        fosfor este recomadabila) si cu majoritatea pesticidelor. In acelasi timp este un compus ideal in amestecuri
        personalizate pentru productia de tratamente specializate si solutii de fertilizare profesionale. <br /> <br />*
        Diluati produsul in apa pentru obtinerea unei solutii avand concentratia intre 10:1 si 50:1*, luand in
        considerare faptul ca 1 litru de NutriFix™actioneaza pana la:
        <br /> <br />
        1000 m2 de gazon si/sau plante ornamentale (10 l/Ha),
        <br /> <br />
        1350 m2de culturi de legume (7.5 l/Ha)
        <br /> <br />
        1450 m2 de cereale (7 l/Ha)
        <br /> <br />
        2000 m² culturi de fructe (5 l/Ha)*
        <br /> <br /> Este recomandat sa reduceti volumul de apa din solutie pentru aplicarea acesteia la temperaturi
        scazute si sa cresteti volumul de apa pentru aplicarea la temperaturi mai ridicate. Pentru plantele noi, dupa
        stadiul de rasaduri, ingrasamantul poate fi folosit doar diluat intr-o solutie avand raportul de apa/fertilizant
        egal cu 100:1. Pentru aplicarea solutiei prin folosirea unei drone agricole raportul recomandat de
        apa/fertilizant este de 6:1.
        <br /> <br />
        Minimalizati pierderile de azot prin evaporare si realizatistropirea uniforma a solutiei pe suprafata
        frunzelorintr-o zi innorata, in care nu bate vantul, sau in dimineata/dupa-amiaza unei zile senine, dupa
        evaporarea sau inainte de aparea roua. Nu intrebuintati produsul in zilele in care se asteapta ca temperaturile
        sa depaseasca 35° C, sa coboare sub 1° C sau atunci cand se anunta ca va ploua la un interval de minim 4 ore
        dupa ce ati terminat de aplicat fertilizantul.
        <br /> <br />
        Reaplicati solutia o data pe luna, in timpul perioadei de crestere a plantelor. Produsul poate fi intrebuintat
        pe tot parcursul anului, desi rezultatele vor fi mai putin vizibile in sezonul/perioada/ de iarna/rece. Nu
        administrati fertilizantul fara minimum o saptamana de pauza intre aplicari! Nu folositi in stadiul de inflorire
        sau de fructificare al plantelor!"{" "}
      </div>
    )
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("semințe");
  const [products, setProducts] = useState(productsData);
  const filteredProducts = products.filter((product) => product.category === selectedCategory);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    window.location.href = `/products/${productId}`;
  };

  const [orderData, setOrderData] = useState<orderProps>({
    name: "",
    emailAddress: "",
    message: "",
    oras: "",
    judet: "",
    phoneNo: ""
  });

  const [errors, setErrors] = useState<Partial<orderErrors>>({});
  const validateField = (name: string, value: string | boolean) => {
    switch (name) {
      case "name":
        return value.toString().trim() ? "" : "Numele este obligatoriu.";
      case "emailAddress":
        return /\S+@\S+\.\S+/.test(value.toString()) ? "" : "Adresa de email este invalidă.";
      case "phoneNo":
        return /^\d+$/.test(value.toString()) ? "" : "Numărul de telefon este invalid.";
      case "judet":
        return value.toString().trim() ? "" : "Județul este obligatoriu.";
      case "oras":
        return value.toString().trim() ? "" : "Orașul este obligatoriu.";
      case "message":
        return value.toString().trim() ? "" : "Mesajul este obligatoriu.";
      case "consent":
        return value ? "" : "Trebuie să accepți procesarea datelor cu caracter personal.";
      default:
        return "";
    }
  };

  const [consent, setConsent] = useState(false);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const consentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsent(event.target.checked);
    setErrors((prev) => ({ ...prev, consent: validateField("consent", event.target.checked) }));
  };
  const handleSendClick = () => {
    const newErrors: Partial<orderErrors> = {};

    if (!orderData.name.trim()) newErrors.name = "Numele este obligatoriu.";
    if (!orderData.emailAddress.trim() || !/\S+@\S+\.\S+/.test(orderData.emailAddress))
      newErrors.emailAddress = "Adresa de email este invalidă.";
    if (!orderData.phoneNo.trim() || !/^\d+$/.test(orderData.phoneNo))
      newErrors.phoneNo = "Numărul de telefon este invalid.";
    if (!orderData.judet.trim()) newErrors.judet = "Județul este obligatoriu.";
    if (!orderData.oras.trim()) newErrors.oras = "Orașul este obligatoriu.";
    if (!orderData.message.trim()) newErrors.message = "Mesajul este obligatoriu.";
    if (!consent) newErrors.consent = "Trebuie să accepți procesarea datelor cu caracter personal.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      sendOrderConfirmation(orderData);
      window.location.href = `/thankyou`;
      console.log("Date trimise");
    }
  };

  return (
    <div className={styles.productsContainer}>
      <Helmet>
        <meta name="description" content="Products" />
      </Helmet>
      <div className={styles.headTitle}>Produse</div>
      <div className={styles.products}>
        <div className={styles.categoryButtons}>
          <button
            onClick={() => setSelectedCategory("semințe")}
            className={selectedCategory === "semințe" ? styles.activeCategory : ""}
          >
            Semințe
          </button>
          <button
            onClick={() => setSelectedCategory("îngrășăminte")}
            className={selectedCategory === "îngrășăminte" ? styles.activeCategory : ""}
          >
            Îngrășăminte
          </button>
        </div>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.singleProduct}>
            <div className={styles.prImg}>
              <img src={product.imageUrl} alt="products" />
            </div>
            <div className={styles.productsTexts}>
              <div className={styles.productMainTitle}>{product.name}</div>
              <div className={styles.productSubTitle}>{product.description}</div>
              <div className={styles.prBtn}>
                <button onClick={() => handleProductClick(product.id)}>Afla mai multe</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactTitle}>Contacteaza-ne</div>

        <div className={styles.sections}>
          <div className={styles.secondSectionContact}>
            <div className={styles.infos}>
              <div className={styles.contactInfo}>
                <div className={styles.infoPhoto}>
                  <img src={images.contact.mailLogo} alt="mail" />
                </div>
                <div className={styles.contactTexts}>
                  <div className={styles.infoTitle}>Email</div>
                  <div className={styles.infoSubTitle}>gazonulverde@yahoo.com</div>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.infoPhoto}>
                  <img src={images.contact.mailLogo} alt="mail" />
                </div>
                <div className={styles.contactTexts}>
                  <div className={styles.infoTitle}>Adresa</div>
                  <div className={styles.infoSubTitle}>Strada Ronda nr. 25, Chitila, jud. Ilfov</div>{" "}
                </div>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.infoPhoto}>
                  <img src={images.contact.mailLogo} alt="mail" />
                </div>
                <div className={styles.contactTexts}>
                  <div className={styles.infoTitle}>Telefon</div>
                  <div className={styles.infoSubTitle}>0723.721.132</div>{" "}
                </div>
              </div>

              <div className={styles.contactInfo}>
                <div className={styles.infoPhoto}>
                  <img src={images.contact.mailLogo} alt="mail" />
                </div>
                <div className={styles.contactTexts}>
                  <div className={styles.infoTitle}>Date fiscale</div>
                  <div className={styles.infoSubTitle}>
                    GAZONUL VERDE S.R.L. CUI: RO 39772006 Nr. Reg: J23/3944/2018
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <div className={styles.contactInputs}>
              <input
                className={errors.name ? styles.redInput : ""}
                name="name"
                placeholder="Nume"
                value={orderData.name}
                onChange={inputHandler}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
              <input
                className={errors.emailAddress ? styles.redInput : ""}
                name="emailAddress"
                placeholder="Email"
                value={orderData.emailAddress}
                onChange={inputHandler}
              />
              {errors.emailAddress && <span className={styles.error}>{errors.emailAddress}</span>}
              <input
                className={errors.phoneNo ? styles.redInput : ""}
                name="phoneNo"
                placeholder="Telefon"
                value={orderData.phoneNo}
                onChange={inputHandler}
              />
              {errors.phoneNo && <span className={styles.error}>{errors.phoneNo}</span>}
              <input
                className={errors.judet ? styles.redInput : ""}
                name="judet"
                placeholder="Judet"
                value={orderData.judet}
                onChange={inputHandler}
              />
              {errors.judet && <span className={styles.error}>{errors.judet}</span>}
              <input
                className={errors.oras ? styles.redInput : ""}
                name="oras"
                placeholder="Oras"
                value={orderData.oras}
                onChange={inputHandler}
              />
              {errors.oras && <span className={styles.error}>{errors.oras}</span>}
              <textarea
                className={errors.message ? styles.redInput : ""}
                name="message"
                placeholder="Mesaj"
                value={orderData.message}
                onChange={inputHandler}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
              <div className={styles.formBox}>
                <div>
                  <input type="checkbox" className={styles.formCheck} checked={consent} onChange={consentHandler} />
                  <label>Accept procesarea datelor cu caracter personal</label>{" "}
                </div>
                {errors.consent && <span className={styles.error}>{errors.consent}</span>}
              </div>
            </div>
            <div className={styles.sendBtn}>
              <button onClick={handleSendClick}>Trimite mesajul</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
