"use client"

import { useScroll, useTransform, motion } from "motion/react"
import { useRef } from "react"
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
  Cloud,
  CheckCircle,
  Sparkles,
  Shield
} from 'lucide-react'

// Composant personnalisé pour les cellules avec texte animé redesigné
function AnimatedBentoCell({ 
  gradient, 
  icon: Icon, 
  backgroundIcon: BgIcon,
  badge,
  title, 
  subtitle,
  description,
  className = "" 
}: {
  gradient: string
  icon: any
  backgroundIcon?: any
  badge?: string
  title: string
  subtitle: string
  description: string
  className?: string
}) {
  const cellRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cellRef,
    offset: ["start end", "end start"]
  })
  
  // Animation pour faire apparaître le texte descriptif de manière dramatique
  const descriptionOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
  const descriptionScale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1])
  
  // Animation pour faire disparaître le contenu principal
  const mainContentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0])
  const mainContentScale = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.85])

  return (
    <BentoCell 
      ref={cellRef}
      className={`overflow-hidden rounded-2xl shadow-digiqo-lg ${gradient} group hover:shadow-2xl transition-all duration-500 relative ${className}`}
    >
      <div className="relative w-full h-full">
        {/* Icône de fond - maintenant en blanc */}
        {BgIcon && (
          <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-60 transition-opacity z-0">
            <BgIcon className="w-16 h-16 text-white" />
          </div>
        )}
        
        {/* Contenu principal qui se réduit */}
        <motion.div 
          className="relative z-10 p-6 h-full flex flex-col"
          style={{ 
            opacity: mainContentOpacity,
            scale: mainContentScale
          }}
        >
          <div className="text-white">
            {/* Badge optionnel */}
            {badge && (
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-6 h-6 text-white animate-pulse-subtle" />
                <span className="text-xs font-medium uppercase tracking-wider text-white">{badge}</span>
              </div>
            )}
            
            {/* Icône principale si pas de badge */}
            {!badge && (
              <Icon className="w-10 h-10 mb-3 text-white" />
            )}
            
            {/* Titre et sous-titre */}
            <h3 className="text-2xl font-bold font-display mb-1 text-white">{title}</h3>
            <p className="text-sm font-body text-white">{subtitle}</p>
          </div>
        </motion.div>
        
        {/* Description animée qui prend toute la carte */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none"
          style={{ 
            opacity: descriptionOpacity,
            scale: descriptionScale
          }}
        >
          <div className="text-center">
            <Icon className="w-16 h-16 text-white mb-4 mx-auto" />
            <p className="text-lg md:text-xl lg:text-2xl text-white font-body leading-relaxed font-semibold">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </BentoCell>
  )
}

export default function HeroDigiqoV3() {
  return (
    <div className="min-h-screen">
      {/* Mobile version without animation */}
      <div className="block lg:hidden bg-gradient-to-b from-digiqo-white via-digiqo-gray-light to-digiqo-white pt-32 pb-12 px-4">
        {/* Hero text for mobile */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-digiqo-accent" />
            <span className="text-sm font-medium text-digiqo-primary font-body">
              Agence digitale n°1 à La Réunion
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-display mb-4">
            <span className="text-digiqo-secondary">Créez votre site web avec</span>{" "}
            <span className="bg-gradient-digiqo bg-clip-text text-transparent relative inline-block">
              Digiqo
            </span>
          </h1>
          
          <p className="text-base text-digiqo-gray-dark max-w-xl mx-auto mb-6 font-body">
            Sites web professionnels, SEO performant et accompagnement personnalisé pour votre réussite digitale.
          </p>
          
          <div className="flex justify-center">
            <a href="#pricing" className="group px-6 py-3 bg-gradient-digiqo text-white rounded-xl hover:shadow-digiqo-lg transition-all duration-300 font-medium font-display text-sm flex items-center justify-center gap-2">
              Découvrir nos offres
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Feature cards for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-digiqo rounded-xl p-4 text-white">
            <Zap className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg mb-1">Site en 48h</h3>
            <p className="text-sm opacity-90">Votre site web professionnel livré en un temps record</p>
          </div>
          
          <div className="bg-gradient-accent rounded-xl p-4 text-white">
            <Search className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg mb-1">SEO Optimisé</h3>
            <p className="text-sm opacity-90">Visibilité maximale</p>
          </div>
          
          <div className="bg-gradient-secondary rounded-xl p-4 text-white">
            <FileText className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg mb-1">Formulaires</h3>
            <p className="text-sm opacity-90">Automatisés & intelligents</p>
          </div>
          
          <div className="bg-gradient-digiqo rounded-xl p-4 text-white">
            <Smartphone className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg mb-1">100% Responsive</h3>
            <p className="text-sm opacity-90">Parfait sur tous les écrans</p>
          </div>
          
          <div className="bg-gradient-to-br from-digiqo-accent via-digiqo-orange to-digiqo-accent-dark rounded-xl p-4 text-white sm:col-span-2">
            <Server className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-lg mb-1">Hébergement</h3>
            <p className="text-sm opacity-90">Inclus & sécurisé</p>
          </div>
        </div>
      </div>

      {/* Desktop version with animation */}
      <ContainerScroll className="hidden lg:block h-[350vh] bg-gradient-to-b from-digiqo-white via-digiqo-gray-light to-digiqo-white pt-40">
      {/* Grille Bento sticky qui reste fixe pendant le scroll */}
      <BentoGrid className="sticky left-0 top-0 z-10 h-screen w-full p-4">
        
        {/* Carte 1 : Rapidité - Site en 48h */}
        <AnimatedBentoCell
          gradient="bg-gradient-digiqo"
          icon={Zap}
          backgroundIcon={Clock}
          badge="Ultra rapide"
          title="Site en 48h"
          subtitle="Votre site web professionnel livré en un temps record"
          description="Conception et développement express sans compromis sur la qualité. Processus optimisé et équipe dédiée pour respecter vos délais les plus serrés."
        />

        {/* Carte 2 : SEO Optimisé */}
        <AnimatedBentoCell
          gradient="bg-gradient-accent"
          icon={Search}
          backgroundIcon={TrendingUp}
          title="SEO Optimisé"
          subtitle="Visibilité maximale"
          description="Référencement naturel intégré dès la conception pour dominer les résultats de recherche."
        />

        {/* Carte 3 : Formulaires Automatisés */}
        <AnimatedBentoCell
          gradient="bg-gradient-secondary"
          icon={FileText}
          backgroundIcon={Bot}
          title="Formulaires"
          subtitle="Automatisés & intelligents"
          description="Gestion automatique des contacts et devis. Ne manquez plus jamais une opportunité."
        />

        {/* Carte 4 : Responsive Mobile */}
        <AnimatedBentoCell
          gradient="bg-gradient-digiqo"
          icon={Smartphone}
          backgroundIcon={Monitor}
          title="100% Responsive"
          subtitle="Parfait sur tous les écrans"
          description="Design adaptatif fluide pour une expérience optimale sur chaque appareil."
        />

        {/* Carte 5 : Hébergement Inclus */}
        <AnimatedBentoCell
          gradient="bg-gradient-to-br from-digiqo-accent via-digiqo-orange to-digiqo-accent-dark"
          icon={Server}
          backgroundIcon={Cloud}
          title="Hébergement"
          subtitle="Inclus & sécurisé"
          description="Infrastructure haute performance avec SSL et support technique 24/7 inclus."
        />
      </BentoGrid>

      {/* Contenu principal centré avec animation */}
      <ContainerScale className="relative z-20 text-center px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge de qualité - repositionné pour éviter le chevauchement */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-8 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-digiqo-accent" />
            <span className="text-sm font-medium text-digiqo-primary font-body">Agence digitale n°1 à La Réunion</span>
          </motion.div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display mb-6">
            <span className="text-digiqo-secondary">Créez votre site web avec</span>{" "}
            <span className="bg-gradient-digiqo bg-clip-text text-transparent relative inline-block">
              Digiqo
              <span className="absolute -inset-1 bg-gradient-digiqo opacity-10 blur-2xl"></span>
            </span>
          </h1>
          
          {/* Sous-titre simplifié */}
          <p className="text-lg md:text-xl text-digiqo-gray-dark max-w-2xl mx-auto mb-8 font-body">
            Sites web professionnels, SEO performant et accompagnement personnalisé pour votre réussite digitale.
          </p>
          
          {/* CTAs */}
          <div className="flex items-center justify-center">
            <a href="#pricing" className="group px-8 py-4 bg-gradient-digiqo text-white rounded-xl hover:shadow-digiqo-lg transition-all duration-300 font-medium font-display text-base flex items-center gap-2">
              Découvrir nos offres
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Points forts avec icônes */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-digiqo-gray-dark font-body">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-digiqo-accent" />
              <span>+80 sites créés</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-digiqo-secondary" />
              <span>98% de clients satisfaits</span>
            </div>
          </div>
        </div>
      </ContainerScale>
      </ContainerScroll>
    </div>
  )
}