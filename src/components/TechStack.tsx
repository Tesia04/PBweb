import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Users, 
  Radio, 
  Layers, 
  Clock, 
  CheckCircle2, 
  Award, 
  FileSpreadsheet, 
  Zap,
  ChevronRight
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

interface TechStackProps {
  onSelectSkill?: (skill: SkillItem) => void;
}

export const TechStack: React.FC<TechStackProps> = ({ onSelectSkill }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'eng' | 'lead'>('all');
  const [inspectedSkill, setInspectedSkill] = useState<SkillItem | null>(null);

  const programmingSkills = SKILLS.filter(s => s.category === 'engineering' || s.category === 'hardware');
  const operationalSkills = SKILLS.filter(s => s.category === 'leadership' || s.category === 'operational');

  const showProgramming = activeTab === 'all' || activeTab === 'eng';
  const showOperational = activeTab === 'all' || activeTab === 'lead';

  const renderIcon = (type: string) => {
    switch (type) {
      case 'html5':
        return <span className="text-[11px] font-mono-hud font-bold text-[#ea580c] bg-[#fff7ed] px-1.5 py-0.5 rounded border border-[#ffedd5]">HTML</span>;
      case 'css3':
        return <span className="text-[11px] font-mono-hud font-bold text-[#0284c7] bg-[#f0f9ff] px-1.5 py-0.5 rounded border border-[#e0f2fe]">CSS</span>;
      case 'javascript':
        return <span className="text-[11px] font-mono-hud font-bold text-[#ca8a04] bg-[#fefce8] px-1.5 py-0.5 rounded border border-[#fef08a]">JS</span>;
      case 'iot':
        return <Radio className="w-4 h-4 text-[#059669]" />;
      case 'nodemcu':
        return <Cpu className="w-4 h-4 text-[#7c3aed]" />;
      case 'teamwork':
        return <Users className="w-4 h-4 text-[#7c3aed]" />;
      case 'leadership':
        return <Award className="w-4 h-4 text-[#db2777]" />;
      case 'time':
        return <Clock className="w-4 h-4 text-[#0284c7]" />;
      case 'org':
        return <FileSpreadsheet className="w-4 h-4 text-[#059669]" />;
      case 'detail':
        return <CheckCircle2 className="w-4 h-4 text-[#0891b2]" />;
      case 'adapt':
        return <Zap className="w-4 h-4 text-[#9333ea]" />;
      default:
        return <Layers className="w-4 h-4 text-[#64748b]" />;
    }
  };

  const handleCardClick = (skill: SkillItem) => {
    setInspectedSkill(skill);
    if (onSelectSkill) onSelectSkill(skill);
  };

  return (
    <section id="skills" className="w-full py-6 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">02 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">TECH_STACK & CAPABILITIES</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          CAP_MATRIX
        </div>
      </div>

      {/* Filter Tabs matching design */}
      <div className="flex items-center gap-1.5 mb-5 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-mono-hud font-semibold transition-all whitespace-nowrap ${
            activeTab === 'all'
              ? 'bg-[#006591] text-white shadow-xs'
              : 'bg-white border border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc]'
          }`}
        >
          ALL CAPABILITIES
        </button>

        <button
          onClick={() => setActiveTab('eng')}
          className={`px-3 py-1.5 rounded-full text-xs font-mono-hud font-semibold transition-all whitespace-nowrap ${
            activeTab === 'eng'
              ? 'bg-[#006591] text-white shadow-xs'
              : 'bg-white border border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc]'
          }`}
        >
          ENGINEERING & IOT
        </button>

        <button
          onClick={() => setActiveTab('lead')}
          className={`px-3 py-1.5 rounded-full text-xs font-mono-hud font-semibold transition-all whitespace-nowrap ${
            activeTab === 'lead'
              ? 'bg-[#006591] text-white shadow-xs'
              : 'bg-white border border-[#e2e8f0] text-[#475569] hover:bg-[#f8fafc]'
          }`}
        >
          LEADERSHIP & OPS
        </button>
      </div>

      {/* Sub-Group 1: PROGRAMMING & HARDWARE SYSTEMS */}
      {showProgramming && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 text-[11px] font-mono-hud font-bold tracking-wider text-[#0284c7]">
            <Code2 className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>PROGRAMMING & HARDWARE SYSTEMS</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {programmingSkills.map((skill) => (
              <div
                key={skill.id}
                onClick={() => handleCardClick(skill)}
                className={`bg-white rounded-xl border p-3 shadow-xs cursor-pointer hover:border-[#0ea5e9] hover:shadow-sm transition-all group ${
                  inspectedSkill?.id === skill.id ? 'border-[#0ea5e9] ring-1 ring-[#0ea5e9]' : 'border-[#e2e8f0]'
                } ${skill.id === 'nodemcu' ? 'col-span-2' : ''}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 flex items-center justify-center rounded bg-[#f8fafc]">
                    {renderIcon(skill.iconType)}
                  </div>
                  <h3 className="text-sm font-bold text-[#0f172a] group-hover:text-[#0284c7] transition-colors leading-tight">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-[11px] text-[#64748b] leading-tight pl-8">
                  {skill.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Group 2: PROFESSIONAL & OPERATIONAL SKILLS */}
      {showOperational && (
        <div>
          <div className="flex items-center gap-2 mb-3 text-[11px] font-mono-hud font-bold tracking-wider text-[#7c3aed]">
            <Users className="w-3.5 h-3.5 text-[#7c3aed]" />
            <span>PROFESSIONAL & OPERATIONAL SKILLS</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {operationalSkills.map((skill) => (
              <div
                key={skill.id}
                onClick={() => handleCardClick(skill)}
                className={`bg-white rounded-xl border p-3 shadow-xs cursor-pointer hover:border-[#8b5cf6] hover:shadow-sm transition-all group ${
                  inspectedSkill?.id === skill.id ? 'border-[#8b5cf6] ring-1 ring-[#8b5cf6]' : 'border-[#e2e8f0]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 flex items-center justify-center rounded bg-[#faf5ff]">
                    {renderIcon(skill.iconType)}
                  </div>
                  <h3 className="text-sm font-bold text-[#0f172a] group-hover:text-[#7c3aed] transition-colors leading-tight">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-[11px] text-[#64748b] leading-tight pl-8">
                  {skill.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detail Inspector Drawer/Card when tapped */}
      {inspectedSkill && (
        <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-[#f0f9ff] to-[#faf5ff] border border-[#bae6fd] text-xs shadow-xs relative">
          <button
            onClick={() => setInspectedSkill(null)}
            className="absolute top-2 right-2 text-[#64748b] hover:text-[#0f172a] font-mono-hud text-[11px]"
          >
            [CLOSE]
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono-hud font-bold text-[#0284c7]">CAPABILITY_SPEC //</span>
            <strong className="text-[#0f172a] font-semibold">{inspectedSkill.name}</strong>
          </div>
          <p className="text-[#334155] leading-relaxed">
            {inspectedSkill.description}
          </p>
        </div>
      )}
    </section>
  );
};
