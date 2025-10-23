"use client";

import { useState, useRef } from "react";
import { Card } from "./ui/card";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
  afterImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  title = "Complete Renovation"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 animate-slide-up-fade">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 backdrop-blur-sm rounded-full mb-6 border border-slate-200">
            <span className="text-sm font-jakarta font-semibold text-slate-700">Before & After</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-jakarta font-bold text-gray-900 mb-4 tracking-tight">
            Proven Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-dm">
            From real estate to media ventures - see our <span className="font-semibold text-emerald-600">diverse portfolio</span>
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden shadow-luxury-lg hover:shadow-luxury transition-all duration-500 animate-scale-up" style={{ animationDelay: '0.2s' }}>
          <div
            ref={containerRef}
            className="relative aspect-[16/10] overflow-hidden cursor-col-resize select-none bg-gray-200"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsDragging(false)}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img
                src={afterImage}
                alt="After renovation"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg font-jakarta font-semibold shadow-lg shadow-emerald-500/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                After
              </div>
            </div>

            {/* Before Image (Sliding overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={beforeImage}
                alt="Before renovation"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-jakarta font-semibold shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Before
              </div>
            </div>

            {/* Slider Handle - Enhanced */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 shadow-lg shadow-emerald-500/30 transition-none"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-luxury flex items-center justify-center hover:shadow-luxury-lg hover:scale-110 transition-all duration-300 cursor-grab active:cursor-grabbing border-2 border-emerald-500/20">
                <div className="flex gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full animate-pulse-soft" />
                  <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full animate-pulse-soft" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="p-8 bg-gradient-to-br from-slate-50 to-white text-center border-t border-slate-100">
            <p className="text-gray-600 font-dm font-medium">
              <span className="inline-flex items-center gap-2">
                <span className="animate-bounce-subtle">👈</span>
                <span>Drag to compare</span>
                <span className="font-jakarta font-bold text-emerald-600 mx-2">{title}</span>
                <span className="animate-bounce-subtle">👉</span>
              </span>
            </p>
          </div>
        </Card>

        {/* Additional Examples Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {[
            {
              before: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&q=80",
              after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
              label: "Kitchen Remodel"
            },
            {
              before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
              after: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
              label: "Living Space"
            },
            {
              before: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&q=80",
              after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
              label: "Exterior Upgrade"
            }
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 group animate-scale-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div className="grid grid-cols-2">
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-jakarta font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.after} alt="After" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded text-xs font-jakarta font-semibold">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-slate-50 to-white">
                <p className="font-jakarta font-semibold text-gray-900 text-center group-hover:text-emerald-600 transition-colors duration-300">{item.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
