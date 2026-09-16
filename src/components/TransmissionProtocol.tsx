import React, { useState } from 'react';
import { Mail, Share2, Code2, Download, ExternalLink, ShieldCheck, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TransmissionProtocolProps {
  onDownloadDossier: () => void;
  companionMessage: string;
}

export const TransmissionProtocol: React.FC<TransmissionProtocolProps> = ({
  onDownloadDossier,
  companionMessage
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="w-full pt-6 pb-24 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">09 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">TRANSMISSION_PROTOCOL</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          SECURE_LINK
        </div>
      </div>

      {/* Intro Narrative */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-5 shadow-xs mb-3.5">
        <p className="text-[#334155] text-xs sm:text-sm leading-relaxed">
          Interested in collaborating on AI research, IoT implementations, web frontends, or business strategy initiatives? Connect directly through the communication channels below.
        </p>
      </div>

      {/* Channels List */}
      <div className="space-y-2.5 mb-4">
        {/* Email Dispatch */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-3.5 flex items-center justify-between shadow-xs hover:border-[#0ea5e9] transition-colors group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center shrink-0 border border-[#e0f2fe]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider block">
                EMAIL DISPATCH
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs sm:text-sm font-bold text-[#0f172a] group-hover:text-[#0284c7] transition-colors"
              >
                Initiate Message
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded text-[#64748b] hover:text-[#0284c7] hover:bg-[#f1f5f9] transition-colors"
              title="Copy email address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#16a34a]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#94a3b8] group-hover:text-[#0284c7] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* LinkedIn Profile */}
        <a
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl border border-[#e2e8f0] p-3.5 flex items-center justify-between shadow-xs hover:border-[#7c3aed] transition-colors group block"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#faf5ff] text-[#7c3aed] flex items-center justify-center shrink-0 border border-[#f3e8ff]">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider block">
                PROFESSIONAL NETWORK
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0f172a] group-hover:text-[#7c3aed] transition-colors">
                LinkedIn Profile
              </span>
            </div>
          </div>

          <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-[#7c3aed] transition-colors" />
        </a>

        {/* GitHub Ecosystem */}
        <a
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-xl border border-[#e2e8f0] p-3.5 flex items-center justify-between shadow-xs hover:border-[#0284c7] transition-colors group block"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#f8fafc] text-[#0f172a] flex items-center justify-center shrink-0 border border-[#e2e8f0]">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono-hud text-[#64748b] uppercase tracking-wider block">
                CODE REPOSITORIES
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0f172a] group-hover:text-[#0284c7] transition-colors">
                GitHub Ecosystem
              </span>
            </div>
          </div>

          <ExternalLink className="w-4 h-4 text-[#94a3b8] group-hover:text-[#0284c7] transition-colors" />
        </a>
      </div>

      {/* Primary Dossier Download Action */}
      <button
        onClick={onDownloadDossier}
        className="w-full py-3 px-4 rounded-xl bg-[#006591] hover:bg-[#004c6e] text-white font-mono-hud font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(0,101,145,0.25)] transition-all active:scale-[0.99] mb-3"
      >
        <Download className="w-4 h-4" />
        <span>[ download_student_dossier.pdf ]</span>
      </button>

      {/* Protected Dossier Disclaimer */}
      <div className="flex items-center gap-1.5 text-[11px] font-mono-hud text-[#64748b] justify-center mb-6">
        <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
        <span>Official student dossier. Contact information protected.</span>
      </div>

      {/* TS // COMPANION Telemetry Bubble matching screenshot */}
      <div className="bg-white rounded-xl border border-[#e2e8f0] p-3 shadow-xs relative">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-mono-hud font-bold text-[#0284c7]">
            <span>TS // COMPANION</span>
          </div>
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
        </div>
        <p className="text-xs font-mono-hud text-[#334155] leading-relaxed">
          &ldquo;{companionMessage}&rdquo;
        </p>
      </div>
    </section>
  );
};
