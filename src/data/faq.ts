export type FaqItem = {
  slug: string;
  vraag: string;
  antwoord: string;
  categorie: string;
  vraagEN: string;
  antwoordEN: string;
  categorieEN: string;
};

export type FaqCategory = {
  categorie: string;
  icon: string;
  items: FaqItem[];
};

export type FaqCategoryEN = {
  categorie: string;
  icon: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    categorie: 'Algemeen',
    icon: 'fa-car',
    items: [
      {
        slug: 'RijVrij-vs-handgeschakeld',
        vraag: 'Wat is het verschil tussen rijles met RijVrij en handgeschakeld?',
        antwoord: 'Bij RijVrij hoef je niet te schakelen, waardoor je je volledig op het verkeer kunt concentreren. Dit zorgt gemiddeld voor 10-30% minder lessen en een ontspannener rijervaring. Een RijVrij rijbewijs (code 78) geeft je toegang tot alle automatische voertuigen, en dat is tegenwoordig meer dan 70% van alle nieuwe auto\'s.',
        categorie: 'Algemeen',
        vraagEN: 'What is the difference between automatic and manual driving lessons?',
        antwoordEN: 'With an automatic car you don\'t need to change gears, so you can fully concentrate on traffic. This results in 10-30% fewer lessons on average and a more relaxed driving experience. An automatic driving licence (code 78) gives you access to all automatic vehicles, currently more than 70% of all new cars.',
        categorieEN: 'General',
      },
      {
        slug: 'overstappen-naar-handgeschakeld',
        vraag: 'Kan ik later alsnog overstappen naar handgeschakeld?',
        antwoord: 'Ja, als je later ook handgeschakeld wilt rijden, hoef je alleen het praktijkexamen opnieuw te doen in een handgeschakelde auto. Je theorie-examen hoef je niet opnieuw te doen. Veel mensen kiezen er echter voor om bij RijVrij te blijven, omdat de meeste nieuwe auto\'s toch RijVrij zijn.',
        categorie: 'Algemeen',
        vraagEN: 'Can I switch to manual driving later?',
        antwoordEN: 'Yes, if you later want to drive manual as well, you only need to redo the practical exam in a manual car. You don\'t need to redo the theory exam. However, many people choose to stay with automatic since most new cars are automatic anyway.',
        categorieEN: 'General',
      },
      {
        slug: 'code-78-rijbewijs',
        vraag: 'Wat is code 78 op mijn rijbewijs?',
        antwoord: 'Code 78 betekent dat je alleen automatische auto\'s mag besturen. Als je je examen haalt in een RijVrij, krijg je automatisch code 78 op je rijbewijs. Wil je later ook handgeschakeld rijden, dan doe je een aanvullend praktijkexamen in een handgeschakelde auto.',
        categorie: 'Algemeen',
        vraagEN: 'What is code 78 on my driving licence?',
        antwoordEN: 'Code 78 means you are only permitted to drive automatic vehicles. When you pass your exam in an automatic car, code 78 is automatically added to your licence. If you later want to drive manual as well, you sit an additional practical exam in a manual car.',
        categorieEN: 'General',
      },
    ],
  },
  {
    categorie: 'Lessen & Pakketten',
    icon: 'fa-book-open',
    items: [
      {
        slug: 'hoe-lang-duurt-een-rijles',
        vraag: 'Hoe lang duurt een rijles bij Rij-Vrij?',
        antwoord: 'Een standaard rijles bij Rij-Vrij duurt 90 minuten. De proefles duurt 60 minuten. Wij kiezen bewust voor 90 minuten per les: zo heb je voldoende tijd om te oefenen, bij te leren en de les goed af te ronden zonder dat het te vermoeiend wordt.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'How long does a driving lesson take at Rij-Vrij?',
        antwoordEN: 'A standard driving lesson at Rij-Vrij lasts 90 minutes. The trial lesson is 60 minutes. We deliberately choose 90-minute lessons: this gives you enough time to practise, learn and finish the lesson properly without it becoming too tiring.',
        categorieEN: 'Lessons & Packages',
      },
      {
        slug: 'hoeveel-lessen-nodig',
        vraag: 'Hoeveel lessen heb ik nodig?',
        antwoord: 'Dit verschilt per persoon. Gemiddeld zijn er zo\'n 30-40 rijuren nodig, maar met een RijVrij heb je doorgaans 10-30% minder lessen nodig. Tijdens de proefles maken we een inschatting van jouw niveau en geven we een eerlijk advies over het aantal lessen dat je waarschijnlijk nodig hebt.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'How many lessons do I need?',
        antwoordEN: 'This varies per person. On average around 30-40 driving hours are needed, but with an automatic you typically need 10-30% fewer lessons. During the trial lesson we assess your level and give honest advice about how many lessons you will likely need.',
        categorieEN: 'Lessons & Packages',
      },
      {
        slug: 'wat-is-inbegrepen-pakket',
        vraag: 'Wat is inbegrepen bij een pakket?',
        antwoord: 'Elk startpakket bevat rijlessen van 90 minuten, een gratis proefles (t.w.v. €49,-), gratis theorieopleiding via de On My Way app (t.w.v. €59,-) en het CBR praktijkexamen. Bij het pakket van 20 lessen kun je in twee termijnen betalen, bij 30 lessen in drie termijnen. Zo weet je precies waar je aan toe bent.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'What is included in a package?',
        antwoordEN: 'Every starter package includes 90-minute driving lessons, a free trial lesson (worth €49), free theory training via the On My Way app (worth €59) and the CBR practical exam. The 20-lesson package allows payment in two instalments, the 30-lesson package in three instalments. No hidden costs.',
        categorieEN: 'Lessons & Packages',
      },
      {
        slug: 'betalen-in-termijnen',
        vraag: 'Kan ik betalen in termijnen?',
        antwoord: 'Ja. Bij het pakket van 20 lessen (€2.399,-) betaal je gratis in twee termijnen. Bij het pakket van 30 lessen (€3.299,-) in drie termijnen. Zo wordt het financieel toegankelijker om direct te starten met een groter pakket.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'Can I pay in instalments?',
        antwoordEN: 'Yes. The 20-lesson package (€2,399) can be paid in two free instalments. The 30-lesson package (€3,299) in three instalments. This makes it financially easier to start directly with a larger package.',
        categorieEN: 'Lessons & Packages',
      },
      {
        slug: 'in-wat-voor-auto-les',
        vraag: 'In wat voor auto krijg ik les?',
        antwoord: 'Je volgt rijlessen in een nette les-auto van maximaal 5 jaar oud, volledig RijVrij. De auto is voorzien van de nieuwste veiligheidsstandaarden en dual controls zodat de instructeur indien nodig kan ingrijpen.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'What type of car will I learn in?',
        antwoordEN: 'You will take lessons in a well-maintained automatic lesson car no more than 5 years old. The car is equipped with the latest safety standards and dual controls so the instructor can intervene if necessary.',
        categorieEN: 'Lessons & Packages',
      },
      {
        slug: 'zelfde-auto-instructeur',
        vraag: 'Rij ik altijd in dezelfde auto bij dezelfde instructeur?',
        antwoord: 'Ja. Alleen bij overmacht of op eigen verzoek wordt hiervan afgeweken. Wij geloven dat continuïteit belangrijk is: je bouwt een vertrouwensband op met je instructeur en raakt gewend aan de auto. Dat bevordert je leerproces.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'Will I always drive in the same car with the same instructor?',
        antwoordEN: 'Yes. Only in exceptional circumstances or at your own request will this differ. We believe continuity is important: you build trust with your instructor and get used to the car, which promotes your learning process.',
        categorieEN: 'Lessons & Packages',
      },
      {
        slug: 'avond-weekend-toeslag',
        vraag: 'Zijn avond- en weekendlessen duurder?',
        antwoord: 'Lessen na 17:00 uur en in het weekend hebben een toeslag van €20,- per 90 minuten. Dit geldt zowel voor losse lessen als voor lessen uit een pakket.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'Are evening and weekend lessons more expensive?',
        antwoordEN: 'Lessons after 17:00 and at weekends have a surcharge of €20 per 90 minutes. This applies to both individual lessons and lessons from a package.',
        categorieEN: 'Lessons & Packages',
      },
      {
        slug: 'opfrisles',
        vraag: 'Is een opfrisles mogelijk?',
        antwoord: 'Ja, een opfrisles duurt 1,5 uur of een veelvoud daarvan. Heb je al eerder rijlessen gehad of je rijbewijs een tijdje niet gebruikt? Dan is een opfrisles een uitstekende manier om weer vertrouwen te krijgen achter het stuur. Neem contact op voor de mogelijkheden en tarieven.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'Is a refresher lesson possible?',
        antwoordEN: 'Yes, a refresher lesson lasts 1.5 hours or a multiple thereof. Had driving lessons before or not driven for a while? A refresher lesson is an excellent way to regain confidence behind the wheel. Contact us for options and rates.',
        categorieEN: 'Lessons & Packages',
      },
      {
        slug: 'theorie-voor-rijles',
        vraag: 'Moet ik geslaagd zijn voor theorie voordat ik rijles neem?',
        antwoord: 'Nee, je kunt gelijktijdig rijles nemen en theorie leren via de On My Way app. Voor de tussentijdse toets en het praktijkexamen heb je wél je theoriebewijs nodig. Wij adviseren je om zo vroeg mogelijk te beginnen met theorie leren via de app.',
        categorie: 'Lessen & Pakketten',
        vraagEN: 'Do I need to pass the theory test before taking driving lessons?',
        antwoordEN: 'No, you can take driving lessons and study theory via the On My Way app at the same time. For the interim test and the practical exam you will need your theory certificate. We advise you to start studying theory as early as possible using the app.',
        categorieEN: 'Lessons & Packages',
      },
    ],
  },
  {
    categorie: 'Proefles',
    icon: 'fa-calendar-check',
    items: [
      {
        slug: 'wat-houdt-proefles-in',
        vraag: 'Wat houdt de proefles in?',
        antwoord: 'De proefles duurt 60 minuten. Je maakt kennis met Peter en de lesmethode, rijdt een stukje mee en krijgt gratis en vrijblijvend advies over jouw rijbewijs traject. We bespreken hoeveel lessen je waarschijnlijk nodig hebt en welk pakket het beste bij je past. Geen verplichtingen, gewoon kennismaken.',
        categorie: 'Proefles',
        vraagEN: 'What does the trial lesson involve?',
        antwoordEN: 'The trial lesson lasts 60 minutes. You meet Peter and get to know the teaching method, take a short drive and receive free, no-obligation advice about your driving licence journey. We discuss how many lessons you will likely need and which package suits you best. No commitments, just getting acquainted.',
        categorieEN: 'Trial Lesson',
      },
      {
        slug: 'kosten-proefles',
        vraag: 'Wat kost de proefles?',
        antwoord: 'De proefles kost €49,-. Bij afname van een startpakket is de proefles gratis! De proefles is een uitstekende manier om te ontdekken of RijVrij rijles bij Rij-Vrij bij jou past, zonder grote financiële verplichting.',
        categorie: 'Proefles',
        vraagEN: 'How much does the trial lesson cost?',
        antwoordEN: 'The trial lesson costs €49. When you purchase a starter package, the trial lesson is free! The trial lesson is an excellent way to discover whether automatic driving lessons at Rij-Vrij suit you, without a large financial commitment.',
        categorieEN: 'Trial Lesson',
      },
    ],
  },
  {
    categorie: 'Examen',
    icon: 'fa-trophy',
    items: [
      {
        slug: 'cbr-examen-aanvragen',
        vraag: 'Regelt Rij-Vrij het CBR examen voor mij?',
        antwoord: 'Ja, als je Rij-Vrij machtigt via mijn.cbr.nl, kunnen wij het CBR praktijkexamen voor je aanvragen. Ons CBR opleidersnummer is 1460F3. Wij regelen de planning en zorgen dat je tijdig op de examenlocatie bent.',
        categorie: 'Examen',
        vraagEN: 'Does Rij-Vrij arrange my CBR exam?',
        antwoordEN: 'Yes, if you authorise Rij-Vrij via mijn.cbr.nl, we can apply for the CBR practical exam on your behalf. Our CBR instructor number is 1460F3. We arrange the scheduling and ensure you arrive at the exam location in time.',
        categorieEN: 'Exam',
      },
      {
        slug: 'waar-examens-plaats',
        vraag: 'Waar vinden de examens plaats?',
        antwoord: 'De CBR examens vinden plaats in Rijswijk of Zoetermeer. Wij rijden je naar de examenlocatie zodat je ontspannen aan je examen kunt beginnen.',
        categorie: 'Examen',
        vraagEN: 'Where do the exams take place?',
        antwoordEN: 'CBR exams take place in Rijswijk or Zoetermeer. We drive you to the exam location so you can start your exam in a relaxed state.',
        categorieEN: 'Exam',
      },
      {
        slug: 'tussentijdse-toets-ttt',
        vraag: 'Moet ik een tussentijdse toets (TTT) doen?',
        antwoord: 'Een tussentijdse toets is niet verplicht, maar kan nuttig zijn om te toetsen of je klaar bent voor het praktijkexamen. Het geeft je inzicht in je niveau en laat zien op welke punten je nog kunt verbeteren.',
        categorie: 'Examen',
        vraagEN: 'Do I need to take an interim test (TTT)?',
        antwoordEN: 'An interim test is not compulsory, but it can be useful to check whether you are ready for the practical exam. It gives you insight into your level and shows where you can still improve.',
        categorieEN: 'Exam',
      },
    ],
  },
  {
    categorie: 'Rijbewijs halen',
    icon: 'fa-id-card',
    items: [
      {
        slug: 'wat-is-2todrive',
        vraag: 'Wat is 2toDrive?',
        antwoord: 'Met 2toDrive kun je al vanaf 17 jaar je rijbewijs halen. Je rijdt dan tot je 18e verjaardag altijd met een coach mee (minimaal 27 jaar oud, minimaal 5 jaar rijbewijs). Daarna rij je volledig zelfstandig. Het is een uitstekende manier om extra rijervaring op te doen voor je 18e.',
        categorie: 'Rijbewijs halen',
        vraagEN: 'What is 2toDrive?',
        antwoordEN: 'With 2toDrive you can get your driving licence from the age of 17. Until your 18th birthday you always drive with a supervising coach (at least 27 years old, at least 5 years of driving experience). After that you drive fully independently. It is an excellent way to gain extra driving experience before turning 18.',
        categorieEN: 'Getting Your Licence',
      },
      {
        slug: 'hoe-lang-rijbewijs-halen',
        vraag: 'Hoe lang duurt het gemiddeld om je rijbewijs te halen?',
        antwoord: 'Gemiddeld zo\'n 43 rijuren volgens CBR-onderzoek (2021). Met een RijVrij heb je doorgaans 10-30% minder lessen nodig. Hoe snel je rijbewijs haalt hangt af van je aanleg, hoe vaak je les neemt en of je regelmatig oefent. Wij geven je een eerlijke inschatting tijdens de proefles.',
        categorie: 'Rijbewijs halen',
        vraagEN: 'How long does it take on average to get your driving licence?',
        antwoordEN: 'On average around 43 driving hours according to CBR research (2021). With an automatic you typically need 10-30% fewer lessons. How quickly you get your licence depends on your aptitude, how often you have lessons and whether you practise regularly. We give you an honest estimate during the trial lesson.',
        categorieEN: 'Getting Your Licence',
      },
    ],
  },
  {
    categorie: 'Autisme & ADHD',
    icon: 'fa-heart',
    items: [
      {
        slug: 'rijles-autisme-adhd',
        vraag: 'Kan ik rijles nemen als ik autisme of ADHD heb?',
        antwoord: 'Ja, zeker! Rij-Vrij is specialist in het begeleiden van leerlingen met autisme of ADHD. We passen de opleiding aan jouw individuele behoeften aan, met structuur, geduld en herkenbaarheid. We zijn geregistreerd bij rijles-en-autisme.nl, onderdeel van Spectrum Brabant.',
        categorie: 'Autisme & ADHD',
        vraagEN: 'Can I take driving lessons if I have autism or ADHD?',
        antwoordEN: 'Absolutely! Rij-Vrij specialises in guiding students with autism or ADHD. We tailor the training to your individual needs with structure, patience and familiarity. We are registered with rijles-en-autisme.nl, part of Spectrum Brabant.',
        categorieEN: 'Autism & ADHD',
      },
      {
        slug: 'speciale-examenmogelijkheden-autisme-adhd',
        vraag: 'Zijn er speciale examenmogelijkheden voor autisme of ADHD?',
        antwoord: 'Ja, het CBR biedt mogelijk aangepaste examens aan, zoals een verlengd examen, Engelstalig examen of een voorgelezen examen. We bespreken de opties tijdens de proefles en regelen dit samen met jou. Er kan een kleine toeslag gelden voor sommige aanpassingen.',
        categorie: 'Autisme & ADHD',
        vraagEN: 'Are there special exam options for autism or ADHD?',
        antwoordEN: 'Yes, the CBR may offer adapted exams, such as an extended exam, an English-language exam or a read-aloud exam. We discuss the options during the trial lesson and arrange everything together with you. A small surcharge may apply for some adaptations.',
        categorieEN: 'Autism & ADHD',
      },
      {
        slug: 'rijles-dyslexie-concentratieproblemen',
        vraag: 'Ik heb dyslexie of concentratieproblemen, kan ik dan rijles nemen?',
        antwoord: 'Zeker! Wij bieden aangepaste opties zoals verlengde examens, Engelstalige examens of voorgelezen examens. We kijken samen naar wat jij nodig hebt en stemmen de lessen daar op af. Neem contact op om de opties vrijblijvend te bespreken.',
        categorie: 'Autisme & ADHD',
        vraagEN: 'I have dyslexia or concentration difficulties: can I take driving lessons?',
        antwoordEN: 'Absolutely! We offer adapted options such as extended exams, English-language exams or read-aloud exams. We look together at what you need and tailor the lessons accordingly. Contact us to discuss the options with no obligation.',
        categorieEN: 'Autism & ADHD',
      },
    ],
  },
];

export const allFaqItems: FaqItem[] = faqCategories.flatMap((cat) => cat.items);

export const faqCategoriesEN: FaqCategoryEN[] = faqCategories.map((cat) => ({
  categorie: cat.items[0]?.categorieEN ?? cat.categorie,
  icon: cat.icon,
  items: cat.items,
}));
