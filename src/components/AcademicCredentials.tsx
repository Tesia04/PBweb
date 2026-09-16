import React from 'react';
import { ACADEMICS } from '../data/portfolioData';

export const AcademicCredentials: React.FC = () => {
  return (
    <section id="academics" className="w-full py-6 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">07 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">ACADEMIC_CREDENTIALS</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          VERIFIED
        </div>
      </div>

      <div className="space-y-3.5">
        {ACADEMICS.map((record, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-5 shadow-xs hover:border-[#cbd5e1] transition-all"
          >
            {/* Top row: Category level and score badge */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono-hud text-[#64748b] tracking-wider font-semibold uppercase">
                {record.level}
              </span>
              {record.badgeType === 'cgpa' ? (
                <span className="px-2 py-0.5 rounded bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] font-mono-hud text-xs font-bold">
                  {record.badge}
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded bg-[#f8fafc] border border-[#e2e8f0] text-[#0f172a] font-mono-hud text-xs font-bold">
                  {record.badge}
                </span>
              )}
            </div>

            {/* Institution */}
            <h3 className="text-base font-bold text-[#0f172a] tracking-tight mb-1">
              {record.institution}
            </h3>

            {/* Program */}
            <p className={`text-xs font-semibold mb-3 ${record.badgeType === 'cgpa' ? 'text-[#0284c7]' : 'text-[#475569]'}`}>
              {record.program}
            </p>

            {/* Bottom meta row */}
            <div className="flex items-center justify-between pt-2 border-t border-[#f1f5f9] text-[11px] font-mono-hud text-[#64748b]">
              <span>{record.meta}</span>
              <span>{record.expectedOrCompleted}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
