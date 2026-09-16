import React, { useState } from 'react';
import { X, Download, Printer, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE, ACADEMICS, SKILLS } from '../data/portfolioData';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}
Institution: ${PERSONAL_INFO.institution} (Class of 2029) | Year 1 CGPA: 8.2
Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.linkedinUrl}

SUMMARY:
${PERSONAL_INFO.summary}

EXPERIENCE:
1. Business Development Intern - Independent Consultant - Strategy & Transformation Consulting (2026 - Present)
2. Web Development Trainee - Venturing Digitally (July 2025 - August 2025)

FEATURED PROJECTS:
- ProfAlert: Campus Professor Availability & Appointment System (Validated MVP)
- IoT-Based Noise Level Indicator: ESP8266 + KY-037 Sound Sensor + 16x2 LCD Display

EDUCATION:
- B.Tech in Artificial Intelligence & Data Science, REVA University (CGPA: 8.2)
- ISC Higher Secondary (12th), Riverdale International Residential School (84%)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0f172a]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-[#cbd5e1] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Actions */}
        <div className="bg-[#006591] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono-hud text-xs font-bold tracking-wider">
            <span>DOSSIER // {PERSONAL_INFO.sysId}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-xs"
              title="Copy Plain Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#86efac]" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline font-mono-hud text-[11px]">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 text-xs"
              title="Print Dossier"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono-hud text-[11px]">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Dossier Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          {/* Dossier Top Banner */}
          <div className="border-b border-[#e2e8f0] pb-5">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-[#006591] font-mono-hud mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] font-mono-hud text-xs font-bold">
                  8.2 CGPA
                </span>
                <span className="block text-[10px] text-[#64748b] font-mono-hud mt-1">
                  REVA UNIVERSITY
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-hud text-[#64748b] mt-3">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>Bangalore, India</span>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="text-[#0284c7] hover:underline flex items-center gap-1">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono-hud font-bold text-[#0284c7] uppercase tracking-wider mb-2">
              01 // PROFESSIONAL PROFILE
            </h2>
            <p className="text-xs text-[#334155] leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono-hud font-bold text-[#0284c7] uppercase tracking-wider mb-3">
              02 // FIELD EXPERIENCE
            </h2>
            <div className="space-y-4">
              {EXPERIENCE.map((role) => (
                <div key={role.id} className="border-l-2 border-[#0ea5e9] pl-3 py-0.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#0f172a]">{role.title}</h3>
                    <span className="text-[11px] font-mono-hud text-[#64748b]">{role.timeline}</span>
                  </div>
                  <p className="text-xs text-[#475569] font-medium mb-1.5">{role.organization} • {role.location}</p>
                  <ul className="space-y-1">
                    {role.bullets.map((b, idx) => (
                      <li key={idx} className="text-xs text-[#334155] flex items-start gap-1.5">
                        <span className="text-[#0284c7] font-bold">&gt;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div>
            <h2 className="text-xs font-mono-hud font-bold text-[#0284c7] uppercase tracking-wider mb-3">
              03 // FEATURED BUILDS & RESEARCH
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc]">
                <strong className="text-xs font-bold text-[#0f172a] block">ProfAlert</strong>
                <span className="text-[10px] font-mono-hud text-[#006591] block mb-1">Campus Availability & Appointment System</span>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  Developed and student-validated faculty appointment scheduling MVP with real-time room availability status.
                </p>
              </div>

              <div className="p-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc]">
                <strong className="text-xs font-bold text-[#0f172a] block">IoT Noise Level Indicator</strong>
                <span className="text-[10px] font-mono-hud text-[#059669] block mb-1">NodeMCU ESP8266 + KY-037 + 16x2 LCD</span>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  Physical compute system capturing acoustic decibel levels with visual warning and 75dB threshold triggers.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Background */}
          <div>
            <h2 className="text-xs font-mono-hud font-bold text-[#0284c7] uppercase tracking-wider mb-3">
              04 // ACADEMIC CREDENTIALS
            </h2>
            <div className="space-y-2.5">
              {ACADEMICS.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg border border-[#e2e8f0]">
                  <div>
                    <h3 className="text-xs font-bold text-[#0f172a]">{item.institution}</h3>
                    <p className="text-[11px] text-[#006591]">{item.program}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono-hud font-bold text-xs text-[#0f172a]">{item.badge}</span>
                    <span className="block text-[10px] text-[#64748b] font-mono-hud">{item.expectedOrCompleted}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8fafc] border-t border-[#e2e8f0] p-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#64748b] font-mono-hud">
            <ShieldCheck className="w-4 h-4 text-[#10b981]" />
            <span>CONFIRMED STUDENT RECORD // REVA.AI.DS_v29</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0f172a] text-white text-xs font-bold hover:bg-[#1e293b] transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
