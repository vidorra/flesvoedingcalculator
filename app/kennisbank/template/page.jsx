import Layout from '../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../components/KennisbankSidebar'
import { BookOpen, CheckCircle, AlertTriangle, Users, Calculator, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Kennisbank Article Template: Complete Nederlandse Gids 2025',
  description: 'Perfect template demonstrating all approved styling patterns, layouts, and components for kennisbank articles. Based on overstappen-van-borst-naar-fles structure.',
}

export default function KennisbankTemplatePage() {
  // Sidebar configuration - 2-3 relevant images
  const sidebarImages = [
    {
      src: "/template-example-1.png",
      alt: "Example of proper article layout",
      caption: "Clean layout without card violations"
    },
    {
      src: "/template-example-2.png", 
      alt: "Correct bullet point styling",
      caption: "Primary color bullets and proper spacing"
    },
    {
      src: "/template-example-3.png",
      alt: "Visual hierarchy demonstration", 
      caption: "Proper text hierarchy and colors"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Template Usage", "Styling Guidelines", "Development Best Practices"]

  // Example data arrays - customize as needed
  const stylingPrinciples = [
    "Maintain clear visual hierarchy with proper text colors",
    "Use primary color only for headings and emphasis elements", 
    "Keep body text in gray shades for optimal readability",
    "Avoid borders without background colors (causes alignment issues)",
    "Use proper bullet points with bg-primary rounded elements",
    "Include breadcrumbs with text-gray-500 for navigation"
  ]

  const approvedColors = [
    "text-primary - For headings, icons, and emphasis",
    "text-gray-500 - For breadcrumbs and intro text",
    "text-gray-600 - For body paragraphs and content",
    "text-gray-700 - For list items and secondary text",
    "bg-white/80 - For main content cards",
    "bg-gray-50 - For subtle backgrounds and related articles"
  ]

  const forbiddenElements = [
    "UTF-8 icons/emojis (❌ ✅ ⭐ 📊 💰) - Use Lucide icons instead",
    "Red/green colors (text-red-600, bg-green-400) - Use neutral colors", 
    "Borders without backgrounds (border border-gray-200 p-4) - Creates floating boxes",
    "Gray bullet points - Always use bg-primary rounded-full",
    "Missing breadcrumbs - Required for all articles",
    "Text-primary for body content - Reserve for headings only"
  ]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            
            {/* Header - ALWAYS outside of card containers */}
            <div>
              <div className="text-sm text-gray-500 mb-2">Kennisbank • Template</div>
              <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                Perfect Article Template: Complete Styling Guide
              </h1>
              <p className="text-gray-500 leading-relaxed">
                This page demonstrates all approved styling patterns, layouts, and components for kennisbank articles. 
                Based on the excellent overstappen-van-borst-naar-fles structure.
              </p>
            </div>

            {/* Introduction Section - REQUIRED */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Template Overzicht</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deze template toont de perfecte implementatie van alle goedgekeurde styling patronen voor kennisbank artikelen. 
                Gebruik deze structuur als basis voor alle nieuwe artikelen om consistentie en kwaliteit te waarborgen.
              </p>
              
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Gebaseerd op:</strong> overstappen-van-borst-naar-fles (beste artikel structuur) • 
                  <strong>Versie:</strong> 2.0 • 
                  <strong>Status:</strong> Approved Template
                </p>
              </div>
            </section>

            {/* Styling Principles */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Kern Styling Principes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Deze principes vormen de basis voor alle kennisbank artikelen en zorgen voor consistente, toegankelijke content.
              </p>
              
              {/* Grid layout - NO card-within-card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Goedgekeurde Kleuren:</h3>
                  <ul className="space-y-2">
                    {approvedColors.map((color, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{color}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Styling Richtlijnen:</h3>
                  <ul className="space-y-2">
                    {stylingPrinciples.map((principle, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section with Visual Separator - Alternative to card-within-card */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Layout Structuur</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gebruik schone grid layouts en border separators in plaats van geneste containers voor optimale leesbaarheid.
              </p>
              
              {/* Use border-t separator instead of nested cards */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Verboden Elementen</h3>
                <p className="text-gray-600 mb-4">Deze elementen moeten vermeden worden in alle artikelen:</p>
                
                <ul className="space-y-2">
                  {forbiddenElements.map((element, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Warning/Alert Section - ONLY approved colored section */}
            <section className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Belangrijk voor Ontwikkelaars</h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    Dit is het enige goedgekeurde gebruik van gekleurde achtergronden (amber) - alleen voor waarschuwingen en belangrijke mededelingen. 
                    Alle andere content moet neutrale kleuren gebruiken.
                  </p>
                </div>
              </div>
            </section>

            {/* Code Example Section */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Code Voorbeelden</h2>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Juiste Header Structuur</h3>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
{`{/* ✅ CORRECT: Clean header outside cards */}
<div>
  <div className="text-sm text-gray-500 mb-2">Category • Subcategory</div>
  <h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
    <Icon className="w-6 h-6 mr-3 text-primary" />
    Article Title
  </h1>
  <p className="text-gray-500 leading-relaxed">Intro text</p>
</div>`}
                  </pre>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Border Usage Policy</h3>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
{`{/* ✅ CORRECT: Borders WITH background colors */}
<div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
  Content with proper visual context
</div>

{/* ❌ WRONG: Borders WITHOUT background colors */}
<div className="border border-gray-200 rounded-lg p-4">
  Creates floating box effect - alignment issues
</div>

{/* ✅ CORRECT: Clean content flow */}
<div className="p-4">
  Clean content without visual clutter
</div>`}
                  </pre>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-primary mb-4">Juiste Bullet Points</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <pre className="text-sm text-gray-800 overflow-x-auto">
{`{/* ✅ CORRECT: Primary color bullets */}
<li className="flex items-center space-x-2">
  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
  <span className="text-gray-700">List item text</span>
</li>`}
                  </pre>
                </div>
              </div>
            </section>

            {/* FAQ Section Example */}
            <section className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde Vragen over Template</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Mag ik dit template aanpassen?</h3>
                  <p className="text-gray-600 text-sm">A: Ja, maar houd je aan de goedgekeurde styling patronen. Pas inhoud aan, niet de structuur of kleuren.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Waar vind ik de volledige styling richtlijnen?</h3>
                  <p className="text-gray-600 text-sm">A: In het styling-guidelines-article.md bestand in de project root. Dit bevat alle gedetailleerde richtlijnen.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Q: Wat als ik een nieuwe layout patroon nodig heb?</h3>
                  <p className="text-gray-600 text-sm">A: Vraag eerst goedkeuring en update de styling guide. Volg de bestaande principes voor consistentie.</p>
                </div>
              </div>
            </section>

            {/* Development Notes */}
            <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 text-sm text-center mb-4">
                <strong>Voor Ontwikkelaars:</strong> Dit template demonstreert alle goedgekeurde patronen. 
                Kopieer de structuur voor nieuwe artikelen en pas de inhoud aan terwijl je de styling behoudt.
              </p>
              
              <div className="text-center">
                <Link 
                  href="https://github.com/vidorra/flesvoedingcalculator/blob/main/styling-guidelines-article.md"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:border-primary hover:bg-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-primary font-medium">Bekijk Volledige Styling Guide →</span>
                </Link>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Hulp nodig met flesvoeding berekeningen? →</div>
                    <div className="text-sm text-gray-600">Gebruik onze calculator voor gepersonaliseerd advies</div>
                  </div>
                </Link>
              </div>
            </section>

            {/* Related Articles - APPROVED card-within-card exception */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Gerelateerde Artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/basis-flesvoeding/overstappen-van-borst-naar-fles" className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Overstappen van borst naar fles →</div>
                  <div className="text-sm text-gray-600">Het originele artikel waar deze template op gebaseerd is</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven" className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Eerste keer flesvoeding →</div>
                  <div className="text-sm text-gray-600">Compleet aangepast met template patronen</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding/verschil-startvoeding-opvolgmelk" className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Startvoeding vs Opvolgmelk →</div>
                  <div className="text-sm text-gray-600">Voorbeeld van fixes toegepast op complex artikel</div>
                </Link>
                <Link href="/kennisbank/basis-flesvoeding" className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors">
                  <div className="font-medium text-primary">Alle Basis Flesvoeding →</div>
                  <div className="text-sm text-gray-600">Overzicht van alle basis artikelen</div>
                </Link>
              </div>
            </section>

          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}