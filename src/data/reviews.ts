export interface ReviewEntry {
  name: string;
  rating: number;
  text: string;
  photo?: string;      // lokaal pad bijv. /reviews/gilberto.png
  photoUri?: string;   // Google CDN URL
  profileUrl?: string; // Google Maps profiel link
  date: string;
}

export const siteReviews: ReviewEntry[] = [
  {
    name: 'Shiyanna Lucifer (Lucy)',
    rating: 5,
    text: 'Geweldige rijschool! Peter is heel rustig, kalm, geduldig en bovenal eerlijk! Ook heb ik heerlijk met hem kunnen praten over van alles en nog wat. Er was een relaxte sfeer in de auto en alles was bespreekbaar. Hierdoor is mijn zelfvertrouwen achter het stuur ook flink gestegen. Aan het eind van dit rij-avontuur ben ik in 1x geslaagd dankzij de super begeleiding van Peter! Dit was al met een extra moeilijkheidsgraad vanwege mijn ADHD, maar Peter wist hier heel goed mee om te gaan. Hij kon mij als het ware lezen en las al een pauze in, nog voordat ik zelf doorhad dat ik het toch eigenlijk wel nodig had. Super bedankt Peter, zonder jouw hulp had ik dit nooit gelijk gehaald! Veel succes met je rijschool in de toekomst!',
    photo: '/reviews/lucy.webp',
    profileUrl: 'https://www.google.com/maps/contrib/109616687297179080099/reviews',
    date: '',
  },
  {
    name: 'G. Sepúlveda',
    rating: 5,
    text: 'Peter is een uitstekende en geduldige instructeur die me van complete beginner tot zelfverzekerde bestuurder heeft begeleid. Zoals velen weten, is het CBR-examen een zware procedure met een hoog slagingspercentage, maar Peter heeft me bij elke stap gesteund en was oprecht begaan met mijn succes. Zijn lesstijl is helder, aanmoedigend en zeer effectief. Of je nu Engels of Nederlands spreekt, hij heeft een uniek talent om contact te maken met zijn leerlingen en hen te helpen het hoge niveau te bereiken dat vereist is om in Nederland te mogen rijden.',
    photo: '/reviews/gilberto.webp',
    date: '',
  },
  {
    name: 'Tim Vollering',
    rating: 5,
    text: 'Ik heb mijn rijbewijs gehaald bij Rij-Vrij, en ik ben erg tevreden over de rijlessen, Peter geeft je duidelijk en op leuke manier les. En er is altijd veel ruimte, om aan te geven wat je wilt verbeteren. Peter is erg behulpzaam bij het regelen van afspraken met het CBR. Al met al een hele fijne ervaring gehad bij deze rijschool en ik zou het iedereen aanraden.',
    photo: '/reviews/tim-vollering.webp',
    date: '',
  },
  {
    name: 'afurreraj',
    rating: 5,
    text: 'Een rijbewijs halen is geen gemakkelijke weg, en nog minder makkelijk is het vinden van een instructeur die zich aanpast aan jouw behoeften en zich inzet voor jouw succes. Dat is precies het type instructeur dat Peter is.\n\nPeter is een zeer geduldige en attente instructeur. Hij probeert je eerst als leerling te begrijpen om te bepalen wat het beste bij je past in je leertraject en stemt de training af op jouw behoeften. Tegelijkertijd zorgt hij ervoor dat de sfeer in de auto prettig is en probeert hij je altijd te laten ontspannen, zodat je optimaal kunt rijden. Hij weet dat zelfvertrouwen en rijtechniek hand in hand gaan, dus werkt hij met je samen zodat je in de toekomst een geweldige, zelfstandige bestuurder kunt worden. Zoals Peter zegt: "Ik wil niet alleen dat mijn leerlingen slagen voor hun examen, ik wil dat ze slagen voor hun examen én de meest capabele bestuurders worden die ze kunnen zijn; die elke situatie op de weg aankunnen." Ik denk dat dat alles zegt wat je over Peter moet weten. :)\n\nBedankt Peter voor je vertrouwen in mij en voor je geweldige begeleiding! Ik wens je veel succes in de toekomst!',
    photo: '/reviews/alecia.webp',
    date: '',
  },
  {
    name: 'Kartik Veerakumar',
    rating: 5,
    text: 'Peter is een erg goede instructeur. Hij heeft me uitstekend begeleid en me alle tips gegeven om te slagen voor het examen. Hij is beleefd, vriendelijk en empathisch. Ik beveel hem van harte aan als je je rijbewijs wilt halen.',
    photo: '/reviews/kartiq.webp',
    date: '',
  },
];
