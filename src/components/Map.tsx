'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const selectedCountries = {
  CAN: {
    name: "Canada",
    description: "Partnering with Nisa Homes, UMF provided essential items to survivors of domestic violence, which included women and children. As well, with the help of 53 division police officers, we provided over 300 meals to families of Thorncliffe Park in response to rising food insecurity."
  },
  MAR: { name: "Morocco", description: "Description coming soon" },
  TUR: { name: "Turkey", description: "Description coming soon" },
  SDN: { name: "Sudan", description: "Description coming soon" },
  AFG: { name: "Afghanistan", description: "Description coming soon" },
  IDN: { name: "Indonesia", description: "Description coming soon" }
};

export default function Map() {
  const [tooltip, setTooltip] = useState<{ content: string; x: number; y: number } | null>(null);

  return (
    <div className="relative w-full h-[600px]">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
          center: [0, 0]
        }}
        width={980}
        height={551}
        style={{
          width: "100%",
          height: "auto"
        }}
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isSelected = selectedCountries[geo.properties.ISO_A3];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isSelected ? "#2c3e50" : "#e5e7eb"}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: isSelected ? "#3a4f63" : "#d1d5db",
                        outline: "none",
                        cursor: isSelected ? "pointer" : "default"
                      }
                    }}
                    onMouseEnter={(e) => {
                      const country = selectedCountries[geo.properties.ISO_A3];
                      if (country) {
                        setTooltip({
                          content: geo.properties.ISO_A3,
                          x: e.clientX,
                          y: e.clientY
                        });
                      }
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute z-50 max-w-md bg-white rounded-xl shadow-lg p-4"
            style={{
              left: tooltip.x + 10,
              top: tooltip.y + 10,
            }}
          >
            <h3 className="text-xl font-bold text-[#2c3e50] mb-2 border-b border-gray-200 pb-2">
              {selectedCountries[tooltip.content]?.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {selectedCountries[tooltip.content]?.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 