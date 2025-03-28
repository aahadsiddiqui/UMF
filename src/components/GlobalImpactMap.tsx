'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

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
  name: string;
  active: number;
  new: number;
  percentage: number;
  description: string;
  link: string;
  achievements: string[];
}

// Define the dataset with accurate country information from pages
const dataSet: { [key: string]: CountryData } = {
  TUR: {
    name: "Turkey",
    active: 3,
    new: 1,
    percentage: 85,
    description: "Emergency earthquake relief and education support for affected children. Our team personally traveled to provide direct assistance and implement educational initiatives.",
    link: "/global-impacts/turkey",
    achievements: [
      "Distributed emergency supplies",
      "Supported affected children's education",
      "Provided immediate disaster relief"
    ]
  },
  MAR: {
    name: "Morocco",
    active: 2,
    new: 1,
    percentage: 75,
    description: "Partnered with Moulana Tariq Jameel Foundation to provide immediate relief following the devastating earthquake.",
    link: "/global-impacts/morocco",
    achievements: [
      "Emergency earthquake response",
      "Community rebuilding support",
      "Essential aid distribution"
    ]
  },
  AFG: {
    name: "Afghanistan",
    active: 4,
    new: 2,
    percentage: 90,
    description: "Collaborated with School Time Charity to support 300 orphans with year-long nourishment programs.",
    link: "/global-impacts/afghanistan",
    achievements: [
      "Supported 1000+ orphans",
      "Provided year-long nourishment",
      "Educational support programs"
    ]
  },
  IDN: {
    name: "Indonesia",
    active: 3,
    new: 1,
    percentage: 80,
    description: "Partnered with Rumah Harapan to deliver healthcare initiatives, including 500+ vaccines and medical supplies.",
    link: "/global-impacts/indonesia",
    achievements: [
      "Delivered 500+ vaccines",
      "Provided medical supplies",
      "Supported pediatric surgeries"
    ]
  },
  CAN: {
    name: "Canada",
    active: 5,
    new: 2,
    percentage: 95,
    description: "Supporting local communities through women's shelters and food drives, making a lasting impact.",
    link: "/local-impacts",
    achievements: [
      "300+ warm meals distributed",
      "Women's shelter support",
      "Local community initiatives"
    ]
  },
  PAK: {
    name: "Pakistan",
    active: 3,
    new: 2,
    percentage: 85,
    description: "Supporting local communities through education initiatives and emergency relief efforts, focusing on sustainable development and youth empowerment.",
    link: "/global-impacts/pakistan",
    achievements: [
      "Educational support programs",
      "Emergency relief distribution",
      "Youth empowerment initiatives"
    ]
  },
  EGY: {
    name: "Egypt",
    active: 4,
    new: 1,
    percentage: 80,
    description: "Working with local partners to provide humanitarian aid and support educational programs, making a lasting impact in Egyptian communities.",
    link: "/global-impacts/egypt",
    achievements: [
      "Humanitarian aid distribution",
      "Educational program support",
      "Community development"
    ]
  }
};

export default function GlobalImpactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleResize = debounce(() => {
    if (mapRef.current) {
      try {
        if (mapInstance.current) {
          mapInstance.current.remove();
        }
        if (mapRef.current) {
          mapRef.current.innerHTML = '';
        }
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
      mapRef.current.innerHTML = '';

      mapInstance.current = new window.Datamap({
        element: mapRef.current,
        responsive: true,
        projection: 'mercator',
        fills: {
          defaultFill: '#ECEFF1',
          active: '#2c3e50',
          hover: '#3498db'
        },
        geographyConfig: {
          borderColor: '#607D8B',
          highlightBorderWidth: 2,
          highlightFillColor: '#3498db',
          highlightBorderColor: '#2c3e50',
          popupOnHover: false
        },
        done: function(datamap: any) {
          datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography: any) {
            const countryData = dataSet[geography.id];
            if (countryData) {
              setSelectedCountry(geography.id);
            }
          });

          datamap.svg.selectAll('.datamaps-subunit').on('mousemove', function(geography: any) {
            const countryData = dataSet[geography.id];
            if (countryData) {
              const bounds = window.d3.select(this).node().getBoundingClientRect();
              const x = bounds.left + bounds.width / 2;
              const y = bounds.top;
              setTooltipPosition({ x, y });
            }
          });

          datamap.svg.selectAll('.datamaps-subunit').each(function(geo: any) {
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
    setTimeout(initMap, 100);
  };

  const handleZoom = (factor: number) => {
    if (!mapInstance.current) return;
    const svg = window.d3.select(mapRef.current).select('svg');
    const currentScale = zoomLevel * factor;
    if (currentScale >= 0.5 && currentScale <= 4) {
      setZoomLevel(currentScale);
      svg.selectAll('g').attr('transform', `scale(${currentScale})`);
    }
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
      <div className="relative">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-white relative">
          <div ref={mapRef} className="w-full h-full" />
          
          {/* Zoom Controls */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleZoom(1.2)}
              className="bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#2c3e50] hover:bg-gray-100 transition-colors"
              aria-label="Zoom in"
            >
              +
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleZoom(0.8)}
              className="bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-[#2c3e50] hover:bg-gray-100 transition-colors"
              aria-label="Zoom out"
            >
              -
            </motion.button>
          </div>
        </div>

        {/* Country Details Panel */}
        <AnimatePresence mode="wait">
          {selectedCountry && dataSet[selectedCountry] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-xl p-6 md:p-8 mx-4 md:mx-8 transform translate-y-0 transition-transform duration-300"
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#2c3e50]">{dataSet[selectedCountry].name}</h3>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Active Projects</p>
                    <p className="text-2xl font-bold text-[#2c3e50]">{dataSet[selectedCountry].active}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">New Initiatives</p>
                    <p className="text-2xl font-bold text-[#2c3e50]">{dataSet[selectedCountry].new}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Impact Rate</p>
                    <p className="text-2xl font-bold text-[#2c3e50]">{dataSet[selectedCountry].percentage}%</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{dataSet[selectedCountry].description}</p>

                <div className="space-y-2 mb-4">
                  {dataSet[selectedCountry].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#3498db] mr-2" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <Link href={dataSet[selectedCountry].link}>
                  <motion.div
                    className="inline-flex items-center text-[#3498db] font-semibold hover:text-[#2c3e50] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile-friendly tooltip */}
        <AnimatePresence>
          {selectedCountry === null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg text-center"
            >
              <p className="text-gray-600">Click on a highlighted country to learn more about our impact</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 