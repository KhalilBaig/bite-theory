'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { siteContent } from '@/config/content';
import generatedItems from '@/config/menu-generated.json';
import { menuDetails } from '@/data/menu-details';

interface MenuGeneratedItem {
  id: string;
  filenameKey: string;
  category: string;
  imagePath: string;
  fallbackName: string;
  isDeal: boolean;
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'burger', label: 'Burgers' },
    { id: 'pizza', label: 'Pizzas' },
    { id: 'fastfood', label: 'Fast Food' },
    { id: 'deals', label: 'Deals & Combos' },
  ];

  const processedItems = useMemo(() => {
    return (generatedItems as MenuGeneratedItem[]).map((item) => {
      const details = menuDetails[item.filenameKey] || {};
      return {
        ...item,
        displayName: details.name || item.fallbackName,
        price: details.price || 'Rs. 750',
        description: details.description || 'Made fresh to order with premium ingredients and signature spices.',
        badge: details.badge,
      };
    });
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      // Show all regular product cards (exclude deals)
      return processedItems.filter((item) => !item.isDeal);
    }
    if (activeCategory === 'deals') {
      // Show ONLY deal cards
      return processedItems.filter((item) => item.isDeal);
    }
    // Specific category (burger, pizza, fastfood) and exclude deals
    return processedItems.filter(
      (item) => item.category === activeCategory && !item.isDeal
    );
  }, [activeCategory, processedItems]);

  return (
    <section
      id="menu"
      className="relative z-30 bg-[#FFFDF9] text-[#000000] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 shadow-2xl border-t border-[#F6A525]/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Light Logo Accent */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="relative w-48 sm:w-64 h-14 mb-6">
            <Image
              src="/images/logo-light.svg"
              alt="BITE THEORY Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xs font-black tracking-[0.3em] text-[#F6A525] uppercase mb-2">
            CRAFTSMANSHIP & FLAVOR
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F0906] uppercase font-heading leading-none">
            {siteContent.menu.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555555] font-semibold max-w-xl">
            {siteContent.menu.subheadline}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-200 border-2 ${
                    isActive
                      ? 'bg-[#F6A525] text-[#000000] border-[#F6A525] shadow-lg scale-[1.02]'
                      : 'bg-[#FFFFFF] text-[#1A110C] border-[#1A110C]/15 hover:border-[#F6A525] hover:text-[#F6A525]'
                  }`}
                  style={{ borderRadius: '0px' }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between bg-[#FFFFFF] border-2 border-[#EFE8DC] hover:border-[#F6A525] transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden"
              style={{ borderRadius: '0px' }}
            >
              <div>
                {/* Product Image Container */}
                <div className="relative w-full h-64 sm:h-72 bg-[#1A110C] overflow-hidden">
                  <Image
                    src={item.imagePath}
                    alt={item.displayName}
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0906]/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {/* Badge if Present */}
                  {item.badge && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#F6A525] text-[#000000] text-[10px] font-black tracking-widest uppercase shadow-md">
                      {item.badge}
                    </div>
                  )}

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 right-4 z-10 px-4 py-1.5 bg-[#0F0906]/90 border border-[#F6A525]/40 backdrop-blur-md text-[#F6A525] text-sm font-black tracking-wider shadow-lg">
                    {item.price}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F0906] font-heading leading-tight group-hover:text-[#F6A525] transition-colors">
                      {item.displayName}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] font-medium leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Order Button */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                <a
                  href={`${siteContent.cta.orderUrl}?text=${encodeURIComponent(
                    `Hi BITE THEORY, I'd like to order: ${item.displayName} (${item.price})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block w-full py-3.5 text-center text-xs sm:text-sm font-black tracking-widest uppercase shadow-md hover:shadow-xl transition-all"
                  style={{ borderRadius: '0px' }}
                >
                  Order {item.displayName}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
