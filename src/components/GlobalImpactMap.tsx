'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

// Debounce utility function
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Extend Window interface to include Datamaps
declare global {
  interface Window {
    Datamap: any;
    d3: any;
  }
}

interface CountryData {
  peopleHelped: string;
  projectsCompleted: string;
  fillKey: string;
  short: string;
  customName: string;
}

interface DataSet {
  [key: string]: CountryData;
}

// Define the dataset with country information
const dataSet = {
  TUR: { active: 3, new: 1, percentage: 85 },
  MAR: { active: 2, new: 1, percentage: 75 },
  AFG: { active: 4, new: 2, percentage: 90 },
  IDN: { active: 3, new: 1, percentage: 80 },
  CAN: { active: 5, new: 2, percentage: 95 },
  SYR: { active: 2, new: 1, percentage: 70 },
  PAK: { active: 3, new: 2, percentage: 85 }
};

export default function GlobalImpactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const isInitialized = useRef(false);

  const handleResize = debounce(() => {
    if (mapRef.current) {
      try {
        // Clear existing map
        if (mapInstance.current) {
          mapInstance.current.remove();
        }
        // Reset the container
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
        }
        // Reinitialize the map
        initMap();
      } catch (error) {
        console.error('Error during map resize:', error);
      }
    }
  }, 250);

  useEffect(() => {
    initMap();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      // Cleanup map instance
      if (mapInstance.current) {
        try {
          mapInstance.current.remove();
        } catch (error) {
          console.error('Error cleaning up map:', error);
        }
      }
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    try {
      // Clear any existing content
      mapRef.current.innerHTML = '';

      // Initialize the map
      mapInstance.current = new window.Datamap({
        element: mapRef.current,
        responsive: true,
        projection: 'mercator',
        fills: {
          defaultFill: '#ECEFF1',
          active: '#2c3e50'
        },
        geographyConfig: {
          borderColor: '#607D8B',
          highlightBorderWidth: 2,
          highlightFillColor: '#3498db',
          highlightBorderColor: '#2c3e50',
          popupTemplate: (geo, data) => {
            if (!data) return null;
            return `
              <div class="hover:scale-105 transition-transform bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div class="flex items-center gap-3 mb-2">
                  <img src="/flags/${geo.id.toLowerCase()}.svg" alt="${geo.properties.name} Flag" class="w-8 h-8 rounded-sm shadow-sm" />
                  <h3 class="text-lg font-bold text-gray-800">${geo.properties.name}</h3>
                </div>
                <div class="space-y-1">
                  <p class="text-sm text-gray-600">Active Projects: ${data.active || 0}</p>
                  <p class="text-sm text-gray-600">New Initiatives: ${data.new || 0}</p>
                  <p class="text-sm text-gray-600">Impact Rate: ${data.percentage}%</p>
                </div>
              </div>
            `;
          }
        },
        done: function(datamap) {
          datamap.svg.selectAll('.datamaps-subunit').each(function(geo) {
            const country = this;
            const countryData = dataSet[geo.id];
            
            if (countryData) {
              country.setAttribute('data-info', 'true');
              country.style.fill = '#2c3e50';
              country.style.cursor = 'pointer';
            }
          });
        }
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleScriptLoad = () => {
    // Small delay to ensure all scripts are properly loaded
    setTimeout(initMap, 100);
  };

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"
        strategy="afterInteractive"
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/datamaps/0.5.9/datamaps.all.min.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <div className="w-full h-[500px] bg-white relative">
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </>
  );
} 