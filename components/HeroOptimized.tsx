"use client"

import { useScroll, useTransform, motion } from "motion/react"
import { useRef } from "react"

export default function HeroOptimized() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Animation du titre principal
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  
  // Animation des cartes - elles commencent petites et visibles, puis grandissent
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2])
  const cardTranslateSmall = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"])
  const cardTranslateLarge = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"])

  return (
    <div ref={containerRef} className="relative min-h-[150vh] overflow-hidden bg-gradient-to-b from-background to-muted">
      
      {/* Conteneur principal avec hauteur fixe pour la section visible */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        
        {/* Titre central */}
        <motion.div 
          className="absolute z-20 px-4 text-center"
          style={{ opacity: titleOpacity, scale: titleScale }}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Bienvenue chez <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Kapabonnement</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos services et solutions innovantes pour votre entreprise
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Commencer
              </button>
              <button className="px-6 py-2.5 border border-border rounded-lg hover:bg-accent transition-colors">
                En savoir plus
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grille de cartes positionnées autour du texte */}
        <div className="absolute inset-0 w-full h-full">
          
          {/* Carte en haut à gauche */}
          <motion.div 
            className="absolute top-[10%] left-[5%] w-[200px] h-[150px] md:w-[250px] md:h-[180px]"
            style={{ scale: cardScale, y: cardTranslateSmall }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-xl p-4 flex flex-col justify-end">
              <div className="text-white">
                <svg className="w-8 h-8 mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
                <h3 className="text-lg font-bold">Innovation</h3>
                <p className="text-xs opacity-90">Solutions avancées</p>
              </div>
            </div>
          </motion.div>

          {/* Carte en haut à droite */}
          <motion.div 
            className="absolute top-[8%] right-[5%] w-[180px] h-[140px] md:w-[220px] md:h-[160px]"
            style={{ scale: cardScale, y: cardTranslateSmall }}
          >
            <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-xl p-4 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-8 h-8 mb-1 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-base font-bold">Fiabilité</h4>
                <p className="text-xs opacity-90">100% disponible</p>
              </div>
            </div>
          </motion.div>

          {/* Carte grande en bas à gauche */}
          <motion.div 
            className="absolute bottom-[15%] left-[8%] w-[220px] h-[160px] md:w-[280px] md:h-[200px]"
            style={{ scale: cardScale, y: cardTranslateLarge }}
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-xl p-6 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-10 h-10 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h4 className="text-lg font-bold">Performance</h4>
                <p className="text-sm opacity-90">Ultra rapide</p>
              </div>
            </div>
          </motion.div>

          {/* Carte en bas à droite */}
          <motion.div 
            className="absolute bottom-[10%] right-[10%] w-[200px] h-[150px] md:w-[250px] md:h-[180px]"
            style={{ scale: cardScale, y: cardTranslateSmall }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-xl p-4 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <p className="text-sm">Support disponible</p>
              </div>
            </div>
          </motion.div>

          {/* Carte au milieu à gauche */}
          <motion.div 
            className="absolute top-[45%] left-[2%] w-[160px] h-[120px] md:w-[200px] md:h-[150px]"
            style={{ scale: cardScale, y: cardTranslateSmall }}
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl shadow-xl p-4 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold mb-1">99.9%</div>
                <p className="text-xs">Uptime garanti</p>
              </div>
            </div>
          </motion.div>

          {/* Carte au milieu à droite */}
          <motion.div 
            className="absolute top-[50%] right-[3%] w-[170px] h-[130px] md:w-[210px] md:h-[160px]"
            style={{ scale: cardScale, y: cardTranslateSmall }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-xl p-4 flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-8 h-8 mb-1 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h4 className="text-base font-bold">Solutions</h4>
                <p className="text-xs opacity-90">Personnalisées</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section additionnelle qui pousse le scroll */}
      <div className="relative px-4 md:px-8 max-w-7xl mx-auto py-32">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pourquoi choisir Kapabonnement?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Rapidité</h3>
              <p className="text-muted-foreground text-sm">
                Mise en place rapide et efficace de vos solutions
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Sécurité</h3>
              <p className="text-muted-foreground text-sm">
                Protection maximale de vos données et infrastructures
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Support</h3>
              <p className="text-muted-foreground text-sm">
                Assistance technique disponible 24h/24 et 7j/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}