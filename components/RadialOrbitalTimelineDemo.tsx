"use client";

import { Globe, Calculator, Utensils } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Site Vitrine Pro",
    date: "99€",
    content: "Un site professionnel complet",
    category: "Vitrine",
    icon: Globe,
    relatedIds: [],
    status: "completed" as const,
    energy: 80,
    period: "par mois • Sans engagement",
    badge: "En ligne dans 48h",
    benefits: [
      "Vos clients vous trouvent enfin sur Google",
      "SEO optimisé",
      "Formulaire contact qui vous prévient instantanément",
      "Fonctionne même le dimanche à 23h",
      "Galerie photos pour montrer votre savoir-faire",
      "Hébergement et maintenance inclus"
    ],
    demo: "https://demo-digiqo.netlify.app/club-plongee-saint-leu/"
  },
  {
    id: 2,
    title: "Devis Automatique",
    date: "199€",
    content: "Vos devis se génèrent automatiquement",
    category: "Devis",
    icon: Calculator,
    relatedIds: [],
    status: "completed" as const,
    energy: 90,
    period: "par mois",
    badge: "Opérationnel en 72h",
    benefits: [
      "Plus jamais de devis oubliés ou perdus",
      "SEO optimisé",
      "Vos clients reçoivent leur devis en 30 secondes",
      "Notification instantanée à chaque demande",
      "Modifiez vos tarifs aussi facilement qu'un SMS",
      "Interface simple et intuitive"
    ],
    demo: "https://demo-digiqo.netlify.app/carreleur-devis/"
  },
  {
    id: 3,
    title: "Commande Restaurant",
    date: "299€",
    content: "Système de commande en ligne complet",
    category: "Restaurant",
    icon: Utensils,
    relatedIds: [],
    status: "completed" as const,
    energy: 100,
    period: "par mois",
    badge: "Menu en ligne en 72h",
    benefits: [
      "Commandes payées avant même de cuisiner",
      "SEO optimisé",
      "Fini les erreurs de commande au téléphone",
      "Changez vos plats du jour en 10 secondes",
      "Les clients commandent depuis leur canapé",
      "Gestion simplifiée de vos commandes"
    ],
    demo: "https://demo-digiqo.netlify.app/snack-vente/"
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="relative">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20">
        <h2 className="text-6xl md:text-7xl font-bold text-white text-center tracking-tight">
          Nos Formules
        </h2>
        <p className="text-xl text-white/80 text-center mt-4">
          Cliquez sur la formule adaptée à vos besoins
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}

const ExportedComponents = {
  RadialOrbitalTimelineDemo,
};

export default ExportedComponents;