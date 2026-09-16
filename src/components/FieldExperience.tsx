import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const FieldExperience: React.FC = () => {
  return (
    <section id="experience" className="w-full py-6 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">03 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">FIELD_EXPERIENCE</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          LOGS_RECORDED: 2
        </div>
      </div>

      {/* Role Cards */}
      <div className="space-y-4">
        {EXPERIENCE.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-5 shadow-xs hover:border-[#cbd5e1] transition-all"
          >
            {/* Role Header Status */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono-hud font-bold text-[#7c3aed] tracking-wider">
                {role.roleNumber}
              </span>
              {role.status === 'PRESENT' ? (
                <span className="px-2 py-0.5 rounded bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] text-[10px] font-mono-hud font-bold tracking-wider">
                  PRESENT
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded bg-[#f8fafc] border border-[#e2e8f0] text-[#475569] text-[10px] font-mono-hud font-bold tracking-wider">
                  COMPLETED
                </span>
              )}
            </div>

            {/* Title & Organization */}
            <h3 className="text-base font-bold text-[#0f172a] tracking-tight">
              {role.title}
            </h3>
            <p className="text-xs text-[#475569] mt-0.5 mb-2.5 font-medium">
              {role.organization}
            </p>

            {/* Location & Dates */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono-hud text-[#64748b] mb-3.5 pb-2.5 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#94a3b8]" />
                <span>{role.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#94a3b8]" />
                <span>{role.timeline}</span>
              </div>
            </div>

            {/* Contribution Bullets with cyan > marker */}
            <ul className="space-y-2">
              {role.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                  <span className="font-mono-hud font-bold text-[#0ea5e9] select-none text-sm leading-none mt-0.5">&gt;</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
