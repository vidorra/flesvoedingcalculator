export const faqs = {
  calculator: [
    {
      id: 1,
      question: 'Hoe nauwkeurig is deze calculator?',
      answer: 'Onze calculator is gebaseerd op de officiële Nederlandse richtlijnen van het Voedingscentrum. De berekening gebruikt 150ml per kg lichaamsgewicht als uitgangspunt, aangepast voor leeftijd. Dit geeft een goede richtlijn, maar elke baby is uniek.'
    },
    {
      id: 2,
      question: 'Waarom wijkt het resultaat af van wat mijn dokter zei?',
      answer: 'Artsen kunnen specifieke aanbevelingen geven op basis van de individuele ontwikkeling van uw baby. Onze calculator geeft algemene richtlijnen. Volg altijd het advies van uw kinderarts.'
    }
  ],
  feeding: [
    {
      id: 3,
      question: 'Hoeveel flesvoeding heeft mijn baby per dag nodig?',
      answer: 'Dit hangt af van het gewicht en de leeftijd van uw baby. Als vuistregel geldt 150ml per kg lichaamsgewicht per dag, verdeeld over meerdere voedingen. Gebruik onze calculator voor een persoonlijke berekening.'
    },
    {
      id: 4,
      question: 'Kan mijn baby teveel flesvoeding krijgen?',
      answer: 'Ja, overvoeding kan voorkomen. Baby\'s hebben een natuurlijk verzadigingsgevoel. Stop met voeden als uw baby de fles wegduwt, zijn hoofd wegdraait of niet meer zuigt.'
    }
  ],
  medical: [
    {
      id: 5,
      question: 'Wanneer moet ik contact opnemen met de dokter?',
      answer: 'Neem contact op bij: ongewone gewichtstoename of -afname, braken na elke voeding, tekenen van uitdroging, of als u zich zorgen maakt over de voeding van uw baby.'
    }
  ],
  practical: [
    {
      id: 6,
      question: 'Hoe warm moet flesvoeding zijn?',
      answer: 'Flesvoeding moet lichaamstemperatuur hebben (37°C). Test de temperatuur door een druppel op uw pols te doen - het moet lauw aanvoelen, niet heet of koud.'
    }
  ]
}

export const faqItems = Object.values(faqs).flat().map(({ question, answer }) => ({ question, answer }))
