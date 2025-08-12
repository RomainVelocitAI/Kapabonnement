import HeroDigiqoV3 from "@/components/HeroDigiqoV3"
import ProblemSolution from "@/components/ProblemSolution"
import { RadialOrbitalTimelineDemo } from "@/components/RadialOrbitalTimelineDemo"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroDigiqoV3 />
      <ProblemSolution />
      <RadialOrbitalTimelineDemo />
    </div>
  )
}