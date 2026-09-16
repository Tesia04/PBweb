import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const IdentityProfile: React.FC = () => {
  return (
    <section id="about" className="w-full py-6 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">01 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">IDENTITY & PROFILE</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          {PERSONAL_INFO.sysId}
        </div>
      </div>

      {/* Narrative Profile Card */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-5 shadow-xs mb-3">
        <p className="text-[#334155] text-sm leading-relaxed">
          {PERSONAL_INFO.identityStatement}
        </p>
      </div>

      {/* 6-Cell Specification Matrix */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Cell 1: Field of Study */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-3 shadow-xs">
          <span className="block text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider mb-1">
            FIELD OF STUDY
          </span>
          <p className="text-[13px] font-bold text-[#0284c7] leading-tight">
            B.Tech AI & Data Science
          </p>
        </div>

        {/* Cell 2: Institution */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-3 shadow-xs">
          <span className="block text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider mb-1">
            INSTITUTION
          </span>
          <p className="text-[13px] font-bold text-[#0f172a] leading-tight">
            REVA University
          </p>
          <span className="text-[11px] text-[#64748b] block mt-0.5">Bangalore, India</span>
        </div>

        {/* Cell 3: Timeline */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-3 shadow-xs">
          <span className="block text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider mb-1">
            TIMELINE
          </span>
          <p className="text-[13px] font-bold text-[#0f172a] leading-tight">
            Class of 2029
          </p>
          <span className="text-[11px] text-[#64748b] block mt-0.5">Expected July 2029</span>
        </div>

        {/* Cell 4: Year 1 Performance */}
        <div className="bg-white rounded-xl border border-[#bbf7d0]/80 p-3 shadow-xs relative overflow-hidden bg-gradient-to-br from-white to-[#f0fdf4]/50">
          <div className="flex items-center justify-between">
            <span className="block text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider mb-1">
              YEAR 1 PERFORMANCE
            </span>
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
          </div>
          <p className="text-base font-bold text-[#15803d] leading-tight">
            8.2 CGPA
          </p>
          <span className="text-[11px] text-[#16a34a] font-medium block mt-0.5">Academic Excellence</span>
        </div>

        {/* Cell 5: Engineering Role */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-3 shadow-xs">
          <span className="block text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider mb-1">
            ENGINEERING ROLE
          </span>
          <p className="text-[13px] font-bold text-[#006591] leading-tight">
            Web Dev Trainee
          </p>
          <span className="text-[11px] text-[#64748b] block mt-0.5">Venturing Digitally</span>
        </div>

        {/* Cell 6: Business Role */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-3 shadow-xs">
          <span className="block text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider mb-1">
            BUSINESS ROLE
          </span>
          <p className="text-[13px] font-bold text-[#7c3aed] leading-tight">
            Business Dev Intern
          </p>
          <span className="text-[11px] text-[#64748b] block mt-0.5">Consulting Lead</span>
        </div>
      </div>
    </section>
  );
};
