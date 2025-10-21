"use client";

import { useState } from "react";
import { Slider } from "./ui/slider";
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
  const [sliderPosition, setSliderPosition] = useState([50]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dramatic Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we turn distressed properties into premium investments
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden shadow-2xl">
          <div className="relative aspect-[16/10] overflow-hidden">
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img
                src={afterImage}
                alt="After renovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                After
              </div>
            </div>

            {/* Before Image (Sliding overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
            >
              <img
                src={beforeImage}
                alt="Before renovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition[0]}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-6 bg-gray-400" />
                  <div className="w-0.5 h-6 bg-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Slider Control */}
          <div className="p-8 bg-white">
            <Slider
              value={sliderPosition}
              onValueChange={setSliderPosition}
              max={100}
              step={1}
              className="w-full"
            />
            <p className="text-center text-gray-600 mt-4 font-medium">
              Drag to compare • {title}
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
              after: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80",
              label: "Exterior Upgrade"
            }
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative aspect-square">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    After
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold text-gray-900 text-center">{item.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
