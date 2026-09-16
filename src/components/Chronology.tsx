import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Tag } from 'lucide-react';
import { CHRONOLOGY_STAGES } from '../data/portfolioData';

export const Chronology: React.FC = () => {
  // Allow toggling multiple or single stage
  const [expandedStages, setExpandedStages] = useState<string[]>(['stage_02']);

  const toggleStage = (id: string) => {
    setExpandedStages(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <section id="journey" className="w-full py-6 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">05 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">THE_CHRONOLOGY</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          6 STAGES
        </div>
      </div>

      {/* Accordion Stages */}
      <div className="space-y-2.5">
        {CHRONOLOGY_STAGES.map((stage) => {
          const isExpanded = expandedStages.includes(stage.id);

          return (
            <div
              key={stage.id}
              className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden shadow-xs transition-all hover:border-[#cbd5e1]"
            >
              {/* Header Button */}
              <button
                onClick={() => toggleStage(stage.id)}
                className="w-full p-3.5 flex items-center justify-between text-left gap-3 focus:outline-hidden hover:bg-[#faf8ff]/60 transition-colors"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Number Badge */}
                  <div className="w-7 h-7 rounded-lg bg-[#e0f2fe] text-[#0284c7] font-mono-hud font-bold text-xs flex items-center justify-center shrink-0 border border-[#bae6fd]">
                    {stage.number}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#0f172a] truncate leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#64748b] truncate mt-0.5">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-[#94a3b8]">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-[#0284c7]" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              </button>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 border-t border-[#f1f5f9] bg-[#faf8ff]/40 text-xs">
                  {stage.period && (
                    <div className="flex items-center gap-1 text-[11px] font-mono-hud text-[#006591] mb-2.5">
                      <Calendar className="w-3 h-3 text-[#0ea5e9]" />
                      <span>{stage.period}</span>
                    </div>
                  )}

                  <ul className="space-y-1.5 mb-3">
                    {stage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#334155] leading-relaxed">
                        <span className="text-[#0284c7] font-mono-hud font-bold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {stage.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white border border-[#e2e8f0] text-[10px] font-mono-hud text-[#475569]"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#94a3b8]" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
