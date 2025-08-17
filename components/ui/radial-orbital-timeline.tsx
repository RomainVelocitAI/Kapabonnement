"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  period?: string;
  badge?: string;
  benefits?: string[];
  demo?: string;
  paymentLink?: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isSmallMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const radius = isSmallMobile ? 120 : (isMobile ? 150 : 250);
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-digiqo-primary to-digiqo-primary-dark overflow-hidden px-2 md:px-4 pb-20 md:pb-8"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
          suppressHydrationWarning={true}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-digiqo-accent via-digiqo-secondary to-digiqo-primary animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-digiqo-accent/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-digiqo-secondary/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white backdrop-blur-md"></div>
          </div>

          <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-digiqo-orange/20"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                suppressHydrationWarning={true}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-digiqo-accent text-white"
                      : isRelated
                      ? "bg-digiqo-secondary/80 text-white"
                      : "bg-white text-digiqo-primary"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-digiqo-accent shadow-lg shadow-digiqo-accent/50"
                      : isRelated
                      ? "border-digiqo-secondary animate-pulse"
                      : "border-white/60"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : ""}
                `}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>

                <div
                  className={`
                  absolute top-14 md:top-16 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[10px] md:text-xs font-semibold tracking-wider text-center
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-110" : "text-white/70"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-xs md:w-80 bg-white backdrop-blur-lg border-digiqo-orange/30 shadow-xl shadow-digiqo-orange/20 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-digiqo-orange/50"></div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-digiqo-primary">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-4xl font-bold text-digiqo-orange">
                          {item.date}
                        </span>
                        <span className="text-sm text-gray-600">/mois</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-gray-700">
                      <p className="text-digiqo-primary italic mb-4 font-medium">&ldquo;{item.content}&rdquo;</p>
                      
                      {item.period && (
                        <p className="text-xs text-gray-600 mb-2">{item.period}</p>
                      )}
                      
                      {item.badge && (
                        <div className="inline-block px-3 py-1 bg-digiqo-orange/10 border border-digiqo-orange/30 rounded-full text-xs text-digiqo-orange font-semibold mb-4">
                          {item.badge}
                        </div>
                      )}
                      
                      {item.benefits && (
                        <div className="space-y-2 mt-4">
                          {item.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-digiqo-orange mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
                        {item.demo && (
                          <a 
                            href={item.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-2.5 px-4 bg-digiqo-primary hover:bg-digiqo-primary-dark text-white font-medium rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                          >
                            <span>Voir la démo</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {item.paymentLink && (
                          <a 
                            href={item.paymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 px-4 bg-digiqo-orange hover:bg-digiqo-orange/90 text-white font-semibold rounded-lg transition-all transform hover:scale-105 block text-center"
                          >
                            Je choisis cette formule
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}