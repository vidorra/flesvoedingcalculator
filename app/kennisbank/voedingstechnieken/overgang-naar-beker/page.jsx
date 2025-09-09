import Layout from '../../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../../components/KennisbankSidebar'
import { AlertTriangle, Clock, TrendingUp, Users, Calendar, CheckCircle, XCircle, Target, ChevronRight, Star, Banknote, Heart, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'Overgang naar Beker: Nederlandse Gids voor de Volgende Stap | Flesvoeding Calculator',
  description: 'Complete Nederlandse gids voor de overgang van fles naar beker. Wanneer beginnen, welke bekers kiezen, en hoe de transitie succesvol maken voor je baby.',
  keywords: 'overgang naar beker, sippy cup, training cup, fles naar beker, baby bekers Nederland, beker training, flesvoeding afbouwen'
};

// Breadcrumb component
const Breadcrumb = ({ items }) => (
  <nav className="flex text-sm text-gray-500 mb-6">
    {items.map((item, index) => (
      <span key={index} className="flex items-center">
        {item.href ? (
          <a href={item.href} className="hover:text-gray-700">{item.label}</a>
        ) : (
          <span className="text-gray-700">{item.label}</span>
        )}
        {index < items.length - 1 && <ChevronRight className="w-4 h-4 mx-2" />}
      </span>
    ))}
  </nav>
);

// Warning Component
const Warning = ({ children, type = "warning" }) => {
  const styles = {
    warning: "bg-amber-50 border border-amber-200 text-amber-800",
    danger: "bg-red-50 border border-red-200 text-red-800",
    info: "bg-blue-50 border border-blue-200 text-blue-800"
  };
  
  return (
    <div className={`p-4 rounded-lg ${styles[type]} my-4`}>
      <div className="flex">
        <AlertTriangle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
        <div>{children}</div>
      </div>
    </div>
  );
};

// Timing indicators data
const timingIndicators = [
  { label: "Gewicht", criterion: ">8kg (meestal 10-12 maanden)", icon: TrendingUp },
  { label: "Motoriek", criterion: "Stabiel zitten zonder ondersteuning", icon: Target },
  { label: "Coördinatie", criterion: "Pincer grasp volledig ontwikkeld", icon: CheckCircle },
  { label: "Cognitief", criterion: "Volgt 2-stap instructies", icon: Target },
  { label: "Orale motoriek", criterion: "Kan slikken zonder zuigen reflex", icon: CheckCircle },
  { label: "Fles competentie", criterion: "Houdt fles zelfstandig vast", icon: CheckCircle }
];

// Dutch timing guidelines
const nlGuidelines = [
  { age: "10-12 maanden", activity: "Introductie training cups" },
  { age: "12-15 maanden", activity: "Hoofddrank methode overgang" },
  { age: "15-18 maanden", activity: "Volledige beker competentie" },
  { age: "18-24 maanden", activity: "Refinement + alle dranken" },
  { age: "24+ maanden", activity: "Adult-like drinking skills" }
];

// Cup progression data
const cupPhases = [
  {
    phase: "Fase 1: Training Cups",
    age: "10-12 maanden",
    features: [
      "Looks similar to bottle",
      "Handvatten voor kleine handen", 
      "Anti-leak valves",
      "Gentle op tandjes en tandvlees",
      "Controlled liquid release"
    ]
  },
  {
    phase: "Fase 2: Sippy Cups", 
    age: "12-15 maanden",
    features: [
      "Zelfstandig gebruik mogelijk",
      "Minder morsen dan open cups",
      "Makkelijk voor onderweg",
      "Success experiences",
      "Parents comfortable mess level"
    ]
  },
  {
    phase: "Fase 3: Straw Cups",
    age: "15-18 maanden", 
    features: [
      "Betere tong/lip coördinatie",
      "Facial muscle development",
      "Problem-solving skills",
      "More like adult drinking",
      "Accurate mouth targeting"
    ]
  },
  {
    phase: "Fase 4: Open Cups",
    age: "18+ maanden",
    features: [
      "Mature drinking technique",
      "No prolonged contact teeth",
      "Self-regulation liquid intake",
      "Full understanding cause-effect",
      "Normal adult/child interaction"
    ]
  }
];

// Brand comparison data
const premiumBrands = [
  {
    brand: "Tommee Tippee Closer to Nature",
    price: "€8-15 per cup",
    rating: "4.6/5",
    availability: "Kruidvat, Etos, baby stores",
    pros: [
      "Complete ecosystem cups",
      "Proven transition success rate", 
      "Wide Nederlandse distribution",
      "Reasonable pricing"
    ],
    cons: [
      "Plastic construction only",
      "Some valve cleaning complexity"
    ]
  },
  {
    brand: "Philips AVENT Overgang Serie",
    price: "€10-18 per cup",
    rating: "4.7/5", 
    availability: "Premium baby stores + online",
    pros: [
      "Highest quality materials",
      "Extensive research backing",
      "Compatible bottle ecosystem",
      "Excellent Nederlandse service"
    ],
    cons: [
      "Premium pricing",
      "Limited discount availability"
    ]
  },
  {
    brand: "MAM Perfect Start Serie",
    price: "€7-14 per cup",
    rating: "4.5/5",
    availability: "Breed Nederlandse netwerk", 
    pros: [
      "Focus op oral health",
      "Compact + travel friendly",
      "Innovative valve technology",
      "Good value proposition"
    ],
    cons: [
      "Smaller capacity than competitors",
      "Limited color options Netherlands"
    ]
  }
];

// Weekly transition plan
const weeklyPlan = [
  {
    week: "Week 1: Introductie & Familiarisatie",
    goals: [
      "Nieuwe beker introduceren",
      "Baby laten wennen aan vorm/gevoel", 
      "1-2 sessions per dag (5-10 min)",
      "Minimale volume verwachting (30-60ml)",
      "Positieve associatie opbouwen"
    ],
    tips: [
      "No pressure - pure exploratie",
      "Laat baby beker vasthouden tijdens fles",
      "Model drinking behavior",
      "Celebrate small interactions",
      "Keep regular fles feeding intact"
    ]
  },
  {
    week: "Week 2: Skill Building & Volume",
    goals: [
      "Volume verhogen (60-120ml)",
      "Targeting mouth accuracy",
      "Langere sessions (10-15 min)",
      "Hand-over-hand guidance", 
      "Begin routine integration"
    ],
    tips: [
      "Multiple times per dag beker gebruik",
      "Different liquids proberen (water/melk)",
      "Turn into game (drink zoals mama)",
      "Reward successful sips",
      "Practice different positions"
    ]
  },
  {
    week: "Week 3: Independence & Integration", 
    goals: [
      "More independent holding",
      "Meal time integration",
      "Volume target 120-180ml",
      "Spill management improving",
      "Consistent daily routine"
    ],
    tips: [
      "Beker bij elke maaltijd present",
      "Replace 1 daily fles with beker",
      "Social drinking (family meals)",
      "Focus on technique refinement",
      "Track progress more systematically"
    ]
  },
  {
    week: "Week 4: Mastery & Confidence",
    goals: [
      "Confident independent use",
      "Volume 180-250ml sessions", 
      "Natural meal integration",
      "Reasonable spill control",
      "Enjoys drinking experience"
    ],
    tips: [
      "Multiple beker types introduction",
      "Different room locations",
      "Social situations practice",
      "Various times of day",
      "Problem-solving independence"
    ]
  }
];

// Common problems data
const commonProblems = [
  {
    problem: "Volledige Weigering Beker",
    causes: [
      "Overwhelming change: Te veel tegelijk nieuw",
      "Strong bottle preference: Comfort associatie",
      "Texture difference: Onbekende mond sensatie",
      "Wrong timing: Te hongerig/moe/stressed"
    ],
    solutions: [
      "Slower introduction: Nog geleidelijker",
      "Play-based approach: Beker als toy eerst", 
      "Hybrid method: Beker + fles combo",
      "Timing adjustment: Relaxed momenten kiezen"
    ]
  },
  {
    problem: "Nutritional Intake Drop",
    causes: [
      ">20% reduction total liquid intake",
      "Weight loss or stagnation",
      "Dehydration symptoms",
      "Rejecting all liquids multiple days"
    ],
    solutions: [
      "Backup bottle: Keep 1-2 fles feedings",
      "Multiple opportunities: More frequent offers",
      "Liquid variety: Water, milk, diluted sap",
      "Close monitoring: Daily intake tracking"
    ]
  },
  {
    problem: "Regressie Na Vooruitgang",
    causes: [
      "Illness: Temporary comfort seeking",
      "Teething: Mouth discomfort",
      "Environment change: New caregiver/location", 
      "Developmental leap: Focus andere skills"
    ],
    solutions: [
      "Patience: Temporary setback expectation",
      "Return basics: Earlier stage techniques",
      "Extra support: More hands-on guidance",
      "Lower expectations: Reduced pressure"
    ]
  }
];

// Volume requirements by age
const volumeRequirements = [
  {
    age: "10-12 maanden",
    totalLiquid: "600-800ml/dag",
    milkMinimum: "400-500ml/dag", 
    water: "200-300ml/dag",
    distribution: "60% milk, 40% water"
  },
  {
    age: "12-15 maanden",
    totalLiquid: "700-900ml/dag",
    milkMinimum: "300-400ml/dag",
    water: "400-500ml/dag", 
    distribution: "45% milk, 55% water"
  },
  {
    age: "15-18 maanden",
    totalLiquid: "800-1000ml/dag",
    milkMinimum: "250-350ml/dag",
    water: "550-650ml/dag",
    distribution: "35% milk, 65% water"
  }
];

export default function OvergangNaarBekerPage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/flesvoeding.webp",
      alt: "Flesvoeding als startpunt voor beker overgang",
      caption: "De juiste timing kan de overgang veel soepeler maken"
    },
    {
      src: "/kunstsvoeding-2.webp", 
      alt: "Transitie van fles naar beker training",
      caption: "Geleidelijke overgang naar zelfstandigheid"
    },
    {
      src: "/top-view-sleeping-baby.webp",
      alt: "Tevreden baby tijdens overgangsperiode", 
      caption: "Rust en geduld tijdens de overgang"
    }
  ]

  // Ad targeting keywords
  const adTopics = ["Beker Training", "Sippy Cup", "Fles Afbouwen"]

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50">
      {/* Header buiten de card */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: 'Kennisbank', href: '/kennisbank' },
            { label: 'Voedingstechnieken', href: '/kennisbank/voedingstechnieken' },
            { label: 'Overgang naar Beker' }
          ]} />
          
          <div className="flex items-start gap-4 mb-6">
            <Target className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Overgang naar Beker: Nederlandse Gids voor de Volgende Stap
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                De overgang van fles naar beker is een natuurlijke progressie in je baby's ontwikkeling. Deze uitgebreide gids helpt Nederlandse ouders deze belangrijke transitie succesvol en stressvrij te maken.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-8">

            {/* Introduction */}
            <section className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Inleiding</h2>
              <p className="text-gray-700 leading-relaxed">
                De overgang naar beker is een belangrijke mijlpaal die meestal tussen 10-18 maanden plaatsvindt. Het Nederlandse consultatiebureau adviseert starten rond 12 maanden. Deze overgang ontwikkelt motorische vaardigheden, stimuleert mondhygiëne en bereidt je baby voor op zelfstandiger eten en drinken.
              </p>
            </section>

            {/* Wanneer overstappen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Wanneer overstappen naar beker?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Optimale timing indicatoren</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Baby is klaar voor beker overgang:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Gewicht &gt;8kg (meestal 10-12 maanden)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Stabiel zitten zonder ondersteuning</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Pincer grasp volledig ontwikkeld</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Kan slikken zonder zuigreflex</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700 text-sm">Houdt fles zelfstandig vast</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Nederlandse consultatiebureau richtlijnen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">10-12 maanden: Training cups introductie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">12-15 maanden: Hoofddrank methode</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">15-18 maanden: Volledige competentie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">18-24 maanden: Alle dranken uit beker</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Nederlandse overgang statistieken</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2">Leeftijd</th>
                          <th className="text-left py-2">Gestart</th>
                          <th className="text-left py-2">Competent</th>
                          <th className="text-left py-2">Volledig</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-1">
                        <tr className="border-b border-gray-100">
                          <td className="py-2">10 maanden</td>
                          <td className="py-2">15%</td>
                          <td className="py-2">2%</td>
                          <td className="py-2">0%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">12 maanden</td>
                          <td className="py-2">65%</td>
                          <td className="py-2">25%</td>
                          <td className="py-2">5%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">15 maanden</td>
                          <td className="py-2">85%</td>
                          <td className="py-2">70%</td>
                          <td className="py-2">35%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2">18 maanden</td>
                          <td className="py-2">95%</td>
                          <td className="py-2">90%</td>
                          <td className="py-2">75%</td>
                        </tr>
                        <tr>
                          <td className="py-2">24 maanden</td>
                          <td className="py-2">99%</td>
                          <td className="py-2">98%</td>
                          <td className="py-2">95%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Readiness assessment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-2">Positieve signalen:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-700 text-sm">Interest in volwassen drinkgedrag</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-700 text-sm">Verliest zuigreflex tijdens voeding</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-700 text-sm">Zit stabiel in kinderstoel 15+ min</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-700 text-sm">Frustratie bij hulp (wil zelf doen)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-medium text-red-800 mb-2">Uitstellen overgang bij:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <span className="text-red-700 text-sm">Recente ziekte of ziekenhuisopname</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <span className="text-red-700 text-sm">Grote levensveranderingen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <span className="text-red-700 text-sm">Gewichtsverlies of groei problemen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <span className="text-red-700 text-sm">Extreme voedingsselectiviteit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soorten bekers */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Soorten bekers voor verschillende leeftijden</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">Overgang hiërarchie</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium text-gray-700 mb-2">Fase 1: Training Cups (10-12 maanden)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Lijkt op fles - vertrouwde vorm</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Handvatten voor kleine handjes</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Anti-leak valves</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Zachte tuit - zacht voor tandjes</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-medium text-gray-700 mb-2">Fase 2: Sippy Cups (12-15 maanden)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Zelfstandig gebruik mogelijk</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Minder morsen dan open cups</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Makkelijk voor onderweg</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Bouwt zelfvertrouwen op</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-medium text-gray-700 mb-2">Fase 3: Straw Cups (15-18 maanden)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Betere tong/lip coördinatie</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Ontwikkeling gezichtsspieren</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Problem-solving vaardigheden</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">Meer zoals volwassen drinken</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-medium text-gray-700 mb-2">Fase 4: Open Cups (18+ maanden)</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Volwassen drinktechniek</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Optimaal voor tandgezondheid</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Zelfregulatie vloeistofinname</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-600 text-sm">Normale sociale interactie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Nederlandse top beker merken</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-700 mb-2">Tommee Tippee Closer to Nature (€8-15)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Voordelen:</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Complete overgang serie</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Breed verkrijgbaar (Kruidvat, Etos)</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>BPA-vrij + vaatwasserbestendig</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Nederlandse customer service</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Nadelen:</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Alleen plastic constructie</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Kleppen kunnen complex zijn om te reinigen</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-700 mb-2">Philips AVENT Overgang Serie (€10-18)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Voordelen:</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Naadloze fles-naar-beker overgang</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Medische kwaliteit materialen</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Compatible met AVENT systeem</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Nederlandse merk + support</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Nadelen:</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Premium prijzen</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Beperkte kortingen beschikbaar</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-700 mb-2">IKEA BÖRJA Serie (€2-6) - Budget optie</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Voordelen:</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Uitstekende prijs-kwaliteit verhouding</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Duurzame materialen focus</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Scandinavisch design</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Breed beschikbaar Nederland</span></li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Nadelen:</p>
                          <ul className="text-sm space-y-1">
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Basisfuncties alleen</span></li>
                            <li className="text-gray-600"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Beperkte anti-mors technologie</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Geleidelijke overgang */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Geleidelijke overgang strategieën
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-primary mb-3">4-Weken overgang plan</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-700 mb-2">Week 1: Introductie & Familiarisatie</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Doelen:</h5>
                            <ul className="space-y-1">
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">Nieuwe beker introduceren</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">1-2 sessions per dag (5-10 min)</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">Positieve associatie opbouwen</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Tips:</h5>
                            <ul className="space-y-1">
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Geen druk - pure exploratie</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Laat baby beker vasthouden tijdens fles</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Model drinking behavior</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Vier kleine interacties</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-700 mb-2">Week 2: Skill Building & Volume</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Doelen:</h5>
                            <ul className="space-y-1">
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">Volume verhogen (60-120ml)</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">Langere sessions (10-15 min)</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">Begin routine integratie</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Activiteiten:</h5>
                            <ul className="space-y-1">
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Meerdere keren per dag gebruik</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Verschillende vloeistoffen proberen</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Maak er spel van</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Beloon succesvolle slokjes</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-700 mb-2">Week 3: Independence & Integration</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Doelen:</h5>
                            <ul className="space-y-1">
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">Meer onafhankelijk vasthouden</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">Volume target 120-180ml</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">Consistente dagelijkse routine</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Strategieën:</h5>
                            <ul className="space-y-1">
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Beker bij elke maaltijd</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Vervang 1 dagelijkse fles</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Sociaal drinken (familie maaltijden)</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Focus op techniek verfijning</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-700 mb-2">Week 4: Mastery & Confidence</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Success metrics:</h5>
                            <ul className="space-y-1">
                              <li className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-gray-600 text-sm">Drinkt &gt;150ml onafhankelijk</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-gray-600 text-sm">Minimale ouder assistentie</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-gray-600 text-sm">Toont voorkeur voor beker</span>
                              </li>
                              <li className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-gray-600 text-sm">Comfortabel in verschillende settings</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Ontwikkelingen:</h5>
                            <ul className="space-y-1">
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Meerdere beker types proberen</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Verschillende locaties</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Sociale situaties oefenen</span></li>
                              <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Zelfstandig probleem oplossen</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-primary mb-3">Geleidelijk vs versneld aanpak</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-green-800 mb-2">Geleidelijke aanpak (aanbevolen):</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-700 text-sm">Minder stress voor baby</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-700 text-sm">Behoudt voeding inname</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-700 text-sm">Bouwt zelfvertrouwen geleidelijk op</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-700 text-sm">Hogere lange termijn succes</span>
                        </li>
                      </ul>
                      <p className="text-sm text-green-700 mt-2"><strong>Timeline:</strong> 4-8 weken</p>
                      <p className="text-sm text-green-700"><strong>Best voor:</strong> Gevoelige baby's, eerste-tijd ouders</p>
                    </div>
                    
                    <div className="bg-amber-50 rounded-lg p-4">
                      <h4 className="font-medium text-amber-800 mb-2">Versnelde aanpak:</h4>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span className="text-amber-700 text-sm">Tijdsdruk (kinderdagverblijf deadline)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span className="text-amber-700 text-sm">Baby toont sterke readiness</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span className="text-amber-700 text-sm">Sterke fles voorkeur problemen</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span className="text-amber-700 text-sm">Familie vakantie/reis behoeften</span>
                        </li>
                      </ul>
                      <p className="text-sm text-amber-700 mt-2"><strong>Timeline:</strong> 1-2 weken</p>
                      <p className="text-sm text-amber-700"><strong>Risico's:</strong> Hogere stress, mogelijke regressie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Veelvoorkomende problemen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelvoorkomende overgangsproblemen</h2>
              
              <div className="space-y-6">
                <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800 mb-2">Let op</h3>
                      <p className="text-sm text-amber-700 leading-relaxed">Bij &gt;20% reductie vloeistofinname, gewichtsverlies, dehydratie symptomen, of afwijzing van alle vloeistoffen meerdere dagen: consulteer het consultatiebureau.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-primary mb-3">Probleem 1: Volledige weigering beker</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Waarom baby weigert:</h4>
                        <ul className="space-y-1">
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Overweldigende verandering</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Sterke fles voorkeur</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Onbekende mond sensatie</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Verkeerde timing</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Te veel druk ouders</span></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Strategische interventies:</h4>
                        <ul className="space-y-1">
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Langzamere introductie</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Spel-gebaseerde benadering</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Hybride methode (beker + fles)</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Peer modeling</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Druk verminderen</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-primary mb-3">Probleem 2: Voeding inname daling</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Waarschuwingssignalen:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-sm">&gt;20% reductie totale vloeistof</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Gewichtsverlies of stagnatie</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Dehydratie symptomen</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Verhoogde prikkelbaarhied</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Intake behoud strategieën:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Backup fles behouden</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Meerdere aanbiedingen</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Vloeistof variëteit</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-gray-600 text-sm">Dagelijkse intake tracking</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-primary mb-3">Probleem 3: Regressie na vooruitgang</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Regressie triggers:</h4>
                        <ul className="space-y-1">
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Ziekte (tijdelijk comfort zoeken)</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Tandjes doorkomen</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Omgeving verandering</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Ontwikkelingssprong</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Slaap verstoring</span></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Regressie management:</h4>
                        <ul className="space-y-1">
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Geduld - tijdelijke terugval</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Terug naar basics</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Extra ondersteuning</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Lagere verwachtingen</span></li>
                          <li className="text-gray-600 text-sm"><div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div><span>Focus op emotionele behoeften</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Veelgestelde vragen */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Veelgestelde vragen</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Wanneer moet ik beginnen met de overgang naar beker?</h3>
                  <p className="text-gray-600 text-sm">Het Nederlandse consultatiebureau adviseert te starten tussen 10-12 maanden, wanneer baby stabiel zit, goede hand-oog coördinatie heeft en interesse toont in volwassen drinkgedrag.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Hoelang duurt de overgang gemiddeld?</h3>
                  <p className="text-gray-600 text-sm">Bij geleidelijke overgang: 4-8 weken voor volledige competentie. Bij versnelde aanpak: 1-2 weken, maar met hoger risico op regressie. Elke baby heeft zijn eigen tempo.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Welke beker is het beste om mee te beginnen?</h3>
                  <p className="text-gray-600 text-sm">Start met een training cup met zachte tuit en handvatten. Tommee Tippee, AVENT en MAM hebben goede overgangsseries. IKEA biedt betaalbare alternatieven.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Mijn baby weigert de beker compleet. Wat nu?</h3>
                  <p className="text-gray-600 text-sm">Neem de druk weg, introduceer langzamer, laat de beker eerst als speelgoed fungeren. Probeer verschillende tijdstippen en laat anderen de beker aanbieden. Geduld is key.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Wanneer moet ik me zorgen maken over vloeistofinname?</h3>
                  <p className="text-gray-600 text-sm">Bij &gt;20% reductie totale vloeistof, gewichtsverlies, dehydratie symptomen (droge mond, minder natte luiers), of complete weigering &gt;48 uur: contact consultatiebureau.</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Kan ik de overgang versnellen voor kinderdagverblijf?</h3>
                  <p className="text-gray-600 text-sm">Ja, maar idealiter start je 4-6 weken van tevoren. Overleg met leidsters over hun aanpak en zorg voor consistentie tussen thuis en opvang. Backup plan altijd handig.</p>
                </div>
              </div>
            </div>

            <div className="">
              <p className="text-gray-700 text-sm text-center">
                De overgang naar beker is een natuurlijke ontwikkelingsstap die geduld en consistentie vereist. Met de juiste aanpak en realistische verwachtingen slaagt bijna elke baby binnen enkele weken.
              </p>
            </div>

            {/* Call to action */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
              <div className="text-center">
                <Link 
                  href="/calculator"
                  className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
                >
                  <div className="text-center">
                    <div className="font-medium text-primary">Bereken overgang hoeveelheden →</div>
                    <div className="text-sm text-gray-600">Aanpassing volumes tijdens beker overgang</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Related articles */}
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <RefreshCw className="w-5 h-5 mr-2" />
                Gerelateerde artikelen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/kennisbank/voedingstechnieken/juiste-houding-bij-flesvoeding" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Juiste houding bij flesvoeding →</div>
                  <div className="text-sm text-gray-600">Optimale posities voor baby en ouder</div>
                </Link>
                <Link href="/kennisbank/voedingstechnieken/verschillende-spenen-uitproberen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Verschillende spenen uitproberen →</div>
                  <div className="text-sm text-gray-600">Vinden van de perfecte speen</div>
                </Link>
                <Link href="/kennisbank/soorten-flesvoeding/wanneer-overstappen-opvolgmelk" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Overstappen naar opvolgmelk →</div>
                  <div className="text-sm text-gray-600">Timing en voorbereiding opvolgmelk</div>
                </Link>
                <Link href="/kennisbank/praktische-tips/voedingsritme-opbouwen" className="p-3 bg-default border border-gray-200 rounded-lg hover:border-primary transition-colors">
                  <div className="font-medium text-primary">Voedingsritme opbouwen →</div>
                  <div className="text-sm text-gray-600">Structuur in voeding ontwikkelen</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </div>
    </Layout>
  )
}