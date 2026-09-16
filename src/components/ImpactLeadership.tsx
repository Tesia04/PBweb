import React from 'react';
import { Music, HeartHandshake } from 'lucide-react';

export const ImpactLeadership: React.FC = () => {
  return (
    <section id="leadership" className="w-full py-6 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">06 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">IMPACT & LEADERSHIP</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          COMMUNITY
        </div>
      </div>

      <div className="space-y-4">
        {/* Card 1: The Rhythm */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-5 shadow-xs hover:border-[#cbd5e1] transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-[#9333ea] shrink-0">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f172a] leading-tight">
                The Rhythm – Music Club
              </h3>
              <span className="text-xs font-semibold text-[#9333ea] font-mono-hud">
                Club Co-Lead
              </span>
            </div>
          </div>

          <ul className="space-y-2 text-xs text-[#334155] leading-relaxed pl-1">
            <li className="flex items-start gap-2">
              <span className="text-[#9333ea] font-bold text-sm leading-none mt-0.5">•</span>
              <span>Coordinated team members and organized musical activities.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9333ea] font-bold text-sm leading-none mt-0.5">•</span>
              <span>Managed regular practice sessions for university performances.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9333ea] font-bold text-sm leading-none mt-0.5">•</span>
              <span>Assisted in organizing live performances and campus-wide events.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9333ea] font-bold text-sm leading-none mt-0.5">•</span>
              <span>Collaborated across teams for smooth event preparation and execution.</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Red Pawz */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-5 shadow-xs hover:border-[#cbd5e1] transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#16a34a] shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f172a] leading-tight">
                Red Pawz
              </h3>
              <span className="text-xs font-semibold text-[#16a34a] font-mono-hud">
                Animal Welfare Volunteer
              </span>
            </div>
          </div>

          <ul className="space-y-2 text-xs text-[#334155] leading-relaxed pl-1">
            <li className="flex items-start gap-2">
              <span className="text-[#16a34a] font-bold text-sm leading-none mt-0.5">•</span>
              <span>Assisted with rescue and daily care of abandoned or injured animals.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#16a34a] font-bold text-sm leading-none mt-0.5">•</span>
              <span>Supported scheduled feeding, basic care routines, and transportation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#16a34a] font-bold text-sm leading-none mt-0.5">•</span>
              <span>Helped with community animal welfare drives and adoption activities.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
