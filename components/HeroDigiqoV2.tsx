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

// Composant personnalisé pour les cellules avec texte animé
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
  
  // Animation pour faire apparaître le texte descriptif
  const descriptionOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const descriptionY = useTransform(scrollYProgress, [0.3, 0.5], [20, 0])

  return (
    <BentoCell 
      ref={cellRef}
      className={`overflow-hidden rounded-2xl shadow-digiqo-lg ${gradient} group hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      <div className="relative w-full h-full flex flex-col justify-between p-6">
        {/* Icône de fond - maintenant en blanc */}
        {BgIcon && (
          <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-40 transition-opacity">
            <BgIcon className="w-16 h-16 text-white" />
          </div>
        )}
        
        {/* Contenu principal */}
        <div className="text-white relative z-10">
          {/* Badge optionnel */}
          {badge && (
            <div className="flex items-center gap-2 mb-3">
              <Icon className="w-6 h-6 text-white animate-pulse-subtle" />
              <span className="text-xs font-medium uppercase tracking-wider text-white/90">{badge}</span>
            </div>
          )}
          
          {/* Icône principale si pas de badge */}
          {!badge && (
            <Icon className="w-10 h-10 mb-3 text-white" />
          )}
          
          {/* Titre et sous-titre */}
          <h3 className="text-2xl font-bold font-display mb-1">{title}</h3>
          <p className="text-sm opacity-90 font-body">{subtitle}</p>
        </div>
        
        {/* Description animée qui apparaît au scroll */}
        <motion.div 
          className="mt-4 pt-4 border-t border-white/20"
          style={{ 
            opacity: descriptionOpacity,
            y: descriptionY
          }}
        >
          <p className="text-xs text-white/80 font-body leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </BentoCell>
  )
}

export default function HeroDigiqoV2() {
  return (
    <ContainerScroll className="h-[350vh] bg-gradient-to-b from-digiqo-white via-digiqo-gray-light to-digiqo-white">
      {/* Grille Bento sticky qui reste fixe pendant le scroll */}
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        
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
          description="Référencement naturel intégré dès la conception. Structure optimisée, performance et contenu pour dominer les résultats de recherche."
        />

        {/* Carte 3 : Formulaires Automatisés */}
        <AnimatedBentoCell
          gradient="bg-gradient-secondary"
          icon={FileText}
          backgroundIcon={Bot}
          title="Formulaires"
          subtitle="Automatisés & intelligents"
          description="Gestion automatique des contacts, devis et réservations. Intégration CRM et notifications en temps réel pour ne jamais manquer une opportunité."
        />

        {/* Carte 4 : Responsive Mobile */}
        <AnimatedBentoCell
          gradient="bg-gradient-to-br from-digiqo-bordeaux via-digiqo-primary to-digiqo-primary-dark"
          icon={Smartphone}
          backgroundIcon={Monitor}
          title="100% Responsive"
          subtitle="Parfait sur tous les écrans"
          description="Design adaptatif fluide pour mobile, tablette et desktop. Navigation intuitive et expérience utilisateur optimale sur chaque appareil."
        />

        {/* Carte 5 : Hébergement Inclus */}
        <AnimatedBentoCell
          gradient="bg-gradient-to-br from-digiqo-accent via-digiqo-orange to-digiqo-accent-dark"
          icon={Server}
          backgroundIcon={Cloud}
          title="Hébergement"
          subtitle="Inclus & sécurisé"
          description="Infrastructure haute performance avec SSL, sauvegardes automatiques et protection DDoS. Support technique 24/7 inclus dans votre forfait."
        />
      </BentoGrid>

      {/* Contenu principal centré avec animation */}
      <ContainerScale className="relative z-10 text-center px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge de qualité - repositionné pour éviter le chevauchement */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-digiqo-accent" />
            <span className="text-sm font-medium text-digiqo-primary font-body">Agence digitale n°1 à La Réunion</span>
          </motion.div>
          
          {/* Titre principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display mb-6">
            Créez votre site web avec{" "}
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-gradient-digiqo text-white rounded-xl hover:shadow-digiqo-lg transition-all duration-300 font-medium font-display text-base flex items-center gap-2">
              Découvrir nos offres
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-digiqo-primary text-digiqo-primary rounded-xl hover:bg-digiqo-primary hover:text-white transition-all duration-300 font-medium font-display text-base">
              Demander un devis gratuit
            </button>
          </div>

          {/* Points forts avec icônes */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-digiqo-gray-dark font-body">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-digiqo-accent" />
              <span>+500 sites créés</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-digiqo-secondary" />
              <span>98% de clients satisfaits</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-digiqo-primary" />
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}