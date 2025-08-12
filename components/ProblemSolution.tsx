"use client"

import { Clock, Euro, Code2, RefreshCw, CheckCircle2, Shield, Smartphone, Wrench, Calendar, Phone, Globe, ArrowRight } from "lucide-react"

export default function ProblemSolution() {
  const frustrations = [
    {
      icon: Clock,
      title: "Ça prend des semaines",
      description: "Vous n'avez pas ce temps"
    },
    {
      icon: Euro,
      title: "Ça coûte une fortune",
      description: "5000€ à 15000€ pour un site pro"
    },
    {
      icon: Code2,
      title: "C'est techniquement complexe",
      description: "Vous n'êtes pas développeur"
    },
    {
      icon: RefreshCw,
      title: "C'est jamais vraiment fini",
      description: "Maintenance, mises à jour, sécurité..."
    }
  ]

  const steps = [
    {
      icon: Phone,
      day: "Lundi 9h",
      title: "Brief de 30 minutes par téléphone",
      description: "On discute de vos besoins"
    },
    {
      icon: Globe,
      day: "Mardi 17h",
      title: "Vous validez votre site sur mesure",
      description: "Aperçu complet avant mise en ligne"
    },
    {
      icon: CheckCircle2,
      day: "Mercredi 9h",
      title: "Votre site est en ligne et opérationnel",
      description: "Prêt à accueillir vos clients"
    }
  ]

  const garanties = [
    {
      icon: Calendar,
      title: "Engagement 3 mois seulement",
      description: "Liberté et flexibilité"
    },
    {
      icon: Shield,
      title: "Sécurité incluse et gérée",
      description: "SSL, backups, protection"
    },
    {
      icon: Smartphone,
      title: "100% responsive",
      description: "Parfait sur tous les écrans"
    },
    {
      icon: Wrench,
      title: "Maintenance technique assurée",
      description: "On s'occupe de tout"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-digiqo-gray-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Accroche empathique */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-digiqo-black mb-6">
            Vous savez que votre entreprise a besoin d&apos;être visible en ligne,
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-digiqo-gray-dark font-body">
              mais créer un site web, c&apos;est...
            </span>
          </h2>
        </div>

        {/* Les 4 frustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {frustrations.map((frustration, index) => {
            const Icon = frustration.icon
            return (
              <div 
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-digiqo border border-digiqo-gray hover:border-digiqo-accent transition-all duration-300 hover:shadow-digiqo-lg group"
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-digiqo-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                <Icon className="w-10 h-10 text-digiqo-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold font-display text-lg text-digiqo-black mb-2">
                  {frustration.title}
                </h3>
                <p className="text-digiqo-gray-dark font-body text-sm">
                  {frustration.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Le pont transformationnel */}
        <div className="text-center py-16 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-digiqo-gray"></div>
          </div>
          <div className="relative inline-block bg-gradient-to-r from-digiqo-primary to-digiqo-primary-dark text-white px-8 py-6 rounded-xl shadow-digiqo-lg">
            <p className="text-xl md:text-2xl font-bold font-display">
              Et si on vous disait qu&apos;en 48h, votre site professionnel
              <span className="block">est en ligne, sans y toucher ?</span>
            </p>
          </div>
        </div>

        {/* Comment ça marche - Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-digiqo-black">
            Comment ça marche
          </h3>
          <div className="relative">
            {/* Ligne de connexion desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-digiqo-accent via-digiqo-secondary to-digiqo-primary transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon
                const gradients = [
                  'from-digiqo-accent to-digiqo-accent-dark',
                  'from-digiqo-secondary to-digiqo-secondary-dark',
                  'from-digiqo-primary to-digiqo-primary-dark'
                ]
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-digiqo hover:shadow-digiqo-lg transition-all duration-300 transform hover:-translate-y-2 border border-digiqo-gray">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-5xl font-bold text-digiqo-gray">
                          {index + 1}
                        </span>
                        <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-digiqo-primary font-bold font-display text-lg">
                          {step.day}
                        </p>
                        <h4 className="font-bold font-display text-xl text-digiqo-black">
                          {step.title}
                        </h4>
                        <p className="text-digiqo-gray-dark font-body text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Les garanties concrètes */}
        <div className="bg-gradient-to-br from-digiqo-primary to-digiqo-primary-dark rounded-xl p-12 shadow-digiqo-lg">
          <h3 className="text-3xl md:text-4xl font-bold font-display text-center mb-12 text-white">
            Vos garanties
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {garanties.map((garantie, index) => {
              const Icon = garantie.icon
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-digiqo-secondary rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold font-display text-white mb-2">
                    {garantie.title}
                  </h4>
                  <p className="text-white/80 font-body text-sm">
                    {garantie.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-digiqo-primary to-digiqo-primary-dark text-white rounded-xl hover:shadow-digiqo-lg transition-all duration-300 font-bold font-display text-lg flex items-center gap-2 mx-auto">
            Voir nos formules d&apos;abonnement
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-digiqo-gray-dark mt-4 text-sm font-body">
            Engagement minimum 3 mois • Résiliation simple
          </p>
        </div>

      </div>
    </section>
  )
}