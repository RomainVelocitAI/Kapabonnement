"use client"

import {
  ContainerScroll,
  BentoGrid,
  BentoCell,
  ContainerScale,
} from "@/components/blocks/hero-gallery-scroll-animation"
import { 
  Zap, 
  Search, 
  FileText, 
  Smartphone, 
  Server,
  ArrowRight,
  Clock,
  TrendingUp,
  Bot,
  Monitor,
  Cloud
} from 'lucide-react'

export default function HeroDigiqo() {
  return (
    <ContainerScroll className="h-[350vh] bg-gradient-to-b from-digiqo-white via-digiqo-gray-light to-digiqo-white">
      {/* Grille Bento sticky qui reste fixe pendant le scroll */}
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        
        {/* Carte 1 : Rapidité - Site en 48h */}
        <BentoCell className="overflow-hidden rounded-2xl shadow-digiqo-lg bg-gradient-digiqo group hover:shadow-2xl transition-all duration-500">
          <div className="relative w-full h-full flex items-end p-6">
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
              <Clock className="w-16 h-16 text-digiqo-white" />
            </div>
            <div className="text-digiqo-white relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-8 h-8 text-digiqo-accent-light animate-pulse-subtle" />
                <span className="text-xs font-medium uppercase tracking-wider text-digiqo-accent-light">Ultra rapide</span>
              </div>
              <h3 className="text-2xl font-bold font-display mb-2">Site en 48h</h3>
              <p className="text-sm opacity-90 font-body">Votre site web professionnel livré en un temps record</p>
            </div>
          </div>
        </BentoCell>

        {/* Carte 2 : SEO Optimisé */}
        <BentoCell className="overflow-hidden rounded-2xl shadow-digiqo-lg bg-gradient-accent group hover:shadow-2xl transition-all duration-500">
          <div className="w-full h-full flex items-center justify-center p-6 relative">
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
              <TrendingUp className="w-12 h-12 text-digiqo-white" />
            </div>
            <div className="text-digiqo-white text-center relative z-10">
              <Search className="w-10 h-10 mb-3 mx-auto" />
              <h4 className="text-lg font-bold font-display">SEO Optimisé</h4>
              <p className="text-xs opacity-90 mt-1 font-body">Visibilité maximale</p>
            </div>
          </div>
        </BentoCell>

        {/* Carte 3 : Formulaires Automatisés */}
        <BentoCell className="overflow-hidden rounded-2xl shadow-digiqo-lg bg-gradient-secondary group hover:shadow-2xl transition-all duration-500">
          <div className="w-full h-full flex items-center justify-center p-6 relative">
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
              <Bot className="w-12 h-12 text-digiqo-white" />
            </div>
            <div className="text-digiqo-white text-center relative z-10">
              <FileText className="w-10 h-10 mb-3 mx-auto" />
              <h4 className="text-lg font-bold font-display">Formulaires</h4>
              <p className="text-xs opacity-90 mt-1 font-body">Automatisés & intelligents</p>
            </div>
          </div>
        </BentoCell>

        {/* Carte 4 : Responsive Mobile */}
        <BentoCell className="overflow-hidden rounded-2xl shadow-digiqo-lg bg-gradient-to-br from-digiqo-bordeaux via-digiqo-primary to-digiqo-primary-dark group hover:shadow-2xl transition-all duration-500">
          <div className="w-full h-full flex items-center justify-center p-6 relative">
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
              <Monitor className="w-12 h-12 text-digiqo-white" />
            </div>
            <div className="text-digiqo-white text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Smartphone className="w-8 h-8" />
                <span className="text-2xl font-bold font-display">100%</span>
              </div>
              <h4 className="text-base font-semibold font-display">Responsive</h4>
              <p className="text-xs opacity-90 mt-1 font-body">Parfait sur tous les écrans</p>
            </div>
          </div>
        </BentoCell>

        {/* Carte 5 : Hébergement Inclus */}
        <BentoCell className="overflow-hidden rounded-2xl shadow-digiqo-lg bg-gradient-to-br from-digiqo-accent via-digiqo-orange to-digiqo-accent-dark group hover:shadow-2xl transition-all duration-500">
          <div className="w-full h-full flex items-center justify-center p-6 relative">
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
              <Cloud className="w-12 h-12 text-digiqo-white" />
            </div>
            <div className="text-digiqo-white text-center relative z-10">
              <Server className="w-10 h-10 mb-3 mx-auto" />
              <div className="text-2xl font-bold mb-1 font-display">Hébergement</div>
              <p className="text-xs opacity-90 font-body">Inclus & sécurisé</p>
            </div>
          </div>
        </BentoCell>
      </BentoGrid>

      {/* Contenu principal centré avec animation */}
      <ContainerScale className="relative z-10 text-center px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge de qualité */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-digiqo-primary/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-digiqo-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-digiqo-primary font-body">Agence digitale n°1 à La Réunion</span>
          </div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display mb-6">
            Créez votre site web avec{" "}
            <span className="bg-gradient-digiqo bg-clip-text text-transparent relative">
              Digiqo
              <span className="absolute -inset-1 bg-gradient-digiqo opacity-20 blur-lg"></span>
            </span>
          </h1>
          
          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-digiqo-gray-dark max-w-2xl mx-auto mb-8 font-body">
            Solutions digitales innovantes pour propulser votre entreprise vers le succès. 
            Sites web professionnels, SEO performant et accompagnement personnalisé.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-digiqo text-digiqo-white rounded-xl hover:shadow-digiqo-lg transition-all duration-300 font-medium font-display text-base flex items-center gap-2">
              Découvrir nos offres
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-digiqo-primary text-digiqo-primary rounded-xl hover:bg-digiqo-primary hover:text-digiqo-white transition-all duration-300 font-medium font-display text-base">
              Demander un devis gratuit
            </button>
          </div>

          {/* Points forts */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-digiqo-gray-dark font-body">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-digiqo-accent rounded-full"></div>
              <span>+500 sites créés</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-digiqo-secondary rounded-full"></div>
              <span>98% de clients satisfaits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-digiqo-primary rounded-full"></div>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}