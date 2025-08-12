"use client"

import {
  ContainerScroll,
  BentoGrid,
  BentoCell,
  ContainerScale,
} from "@/components/blocks/hero-gallery-scroll-animation"

export default function Hero() {
  return (
    <ContainerScroll className="h-[350vh] bg-gradient-to-b from-background to-muted">
      {/* Grille Bento sticky qui reste fixe pendant le scroll */}
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        <BentoCell className="overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="relative w-full h-full flex items-end p-6">
            <div className="text-white">
              <svg className="w-12 h-12 mb-3 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <h3 className="text-2xl font-bold">Innovation</h3>
              <p className="text-sm opacity-90 mt-1">Solutions avancées</p>
            </div>
          </div>
        </BentoCell>

        <BentoCell className="overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-green-500 to-teal-600">
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="text-white text-center">
              <svg className="w-10 h-10 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-lg font-bold">Fiabilité</h4>
            </div>
          </div>
        </BentoCell>

        <BentoCell className="overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-orange-500 to-red-600">
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="text-white text-center">
              <svg className="w-10 h-10 mb-2 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="text-lg font-bold">Performance</h4>
            </div>
          </div>
        </BentoCell>

        <BentoCell className="overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-pink-500 to-rose-600">
          <div className="w-full h-full flex items-center justify-center p-6">
            <div className="text-white text-center">
              <div className="text-4xl font-bold">24/7</div>
              <p className="text-sm mt-1">Support</p>
            </div>
          </div>
        </BentoCell>

        <BentoCell className="overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-indigo-500 to-blue-600">
          <div className="w-full h-full flex items-center justify-center p-6">
            <div className="text-white text-center">
              <div className="text-4xl font-bold">99.9%</div>
              <p className="text-sm mt-1">Uptime</p>
            </div>
          </div>
        </BentoCell>
      </BentoGrid>

      {/* Contenu principal centré avec animation */}
      <ContainerScale className="relative z-10 text-center">
        <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight">
          Bienvenue chez <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Kapabonnement</span>
        </h1>
        <p className="my-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
          Découvrez nos services et solutions innovantes pour transformer votre entreprise
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Commencer
          </button>
          <button className="px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-medium">
            En savoir plus
          </button>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}