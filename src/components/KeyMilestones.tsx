import React from 'react';
import { Star, Shield, Users } from 'lucide-react';
import { MILESTONES } from '../data/portfolioData';

export const KeyMilestones: React.FC = () => {
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'star':
        return (
          <div className="w-9 h-9 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#16a34a] shrink-0">
            <Star className="w-4 h-4 fill-[#16a34a]/20" />
          </div>
        );
      case 'shield':
        return (
          <div className="w-9 h-9 rounded-full bg-[#f0f9ff] border border-[#bae6fd] flex items-center justify-center text-[#0284c7] shrink-0">
            <Shield className="w-4 h-4 fill-[#0284c7]/20" />
          </div>
        );
      case 'users':
        return (
          <div className="w-9 h-9 rounded-full bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-[#9333ea] shrink-0">
            <Users className="w-4 h-4 fill-[#9333ea]/20" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="milestones" className="w-full py-6 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">08 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">KEY_MILESTONES</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          BADGES
        </div>
      </div>

      <div className="space-y-3">
        {MILESTONES.map((milestone, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex items-start gap-3.5 shadow-xs hover:border-[#cbd5e1] transition-all"
          >
            {renderIcon(milestone.icon)}
            <div>
              <h3 className="text-sm font-bold text-[#0f172a] leading-snug">
                {milestone.title}
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mt-1">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
