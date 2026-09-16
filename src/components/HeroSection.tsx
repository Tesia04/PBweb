import React, { useState } from 'react';
import { Cpu, ArrowRight, Download, Radio, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, NEURAL_NODES } from '../data/portfolioData';
import { NeuralNode } from '../types';

interface HeroSectionProps {
  onExploreClick: () => void;
  onDownloadClick: () => void;
  onNodeSelect: (node: NeuralNode) => void;
  selectedNodeId: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onDownloadClick,
  onNodeSelect,
  selectedNodeId
}) => {
  const [imgError, setImgError] = useState(false);
  const [valLoss, setValLoss] = useState(0.0142);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulateMesh = () => {
    setIsSimulating(true);
    const newLoss = Math.max(0.008, +(valLoss - 0.0008 + (Math.random() * 0.0004)).toFixed(4));
    setTimeout(() => {
      setValLoss(newLoss);
      setIsSimulating(false);
    }, 400);
  };

  return (
    <section id="hero" className="w-full pt-6 pb-8 px-4 flex flex-col items-center text-center">
      {/* System Operational Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] text-[10px] font-mono-hud font-semibold uppercase tracking-wider mb-6 shadow-xs">
        <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-ping opacity-75"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] -ml-3.5"></span>
        <span>{PERSONAL_INFO.status}</span>
      </div>

      {/* Profile Avatar with Crystalline Cyber Glow & LIVE_FEED Badge */}
      <div className="relative mb-5 group">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#0ea5e9] via-[#818cf8] to-[#c084fc] shadow-[0_0_25px_rgba(14,165,233,0.3)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white relative">
            {!imgError ? (
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                alt="Tesia Srivastava"
                className="w-full h-full object-cover object-top filter contrast-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#006591] to-[#712ae2] text-white">
                <span className="text-3xl font-bold font-mono-hud">TS</span>
                <span className="text-[9px] font-mono-hud tracking-widest uppercase opacity-80 mt-1">RESEARCH_AI</span>
              </div>
            )}
          </div>
        </div>

        {/* LIVE_FEED Badge */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#cbd5e1] shadow-xs flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] animate-pulse"></span>
          <span className="text-[9px] font-mono-hud font-bold tracking-widest text-[#334155]">
            LIVE_FEED
          </span>
        </div>
      </div>

      {/* Name Title */}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-3 mt-1">
        {PERSONAL_INFO.name}
      </h1>

      {/* Specialization Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#faf5ff] border border-[#e9d5ff] text-[#7e22ce] text-xs sm:text-[13px] font-mono-hud font-semibold mb-4 shadow-xs">
        <Cpu className="w-3.5 h-3.5 text-[#9333ea]" />
        <span>{PERSONAL_INFO.title}</span>
      </div>

      {/* Bio Description */}
      <p className="max-w-md text-[#334155] text-sm leading-relaxed mb-6 font-normal">
        {PERSONAL_INFO.summary}
      </p>

      {/* NEURAL_MESH // ACTIVE Interactive Visualization */}
      <div className="w-full max-w-md bg-white rounded-xl border border-[#e2e8f0] p-3 sm:p-4 mb-6 shadow-xs relative overflow-hidden text-left">
        {/* Card Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-[10px] font-mono-hud font-bold tracking-wider text-[#0284c7]">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse"></span>
            <span>NEURAL_MESH // ACTIVE</span>
          </div>
          <button
            onClick={handleSimulateMesh}
            className="text-[9px] font-mono-hud text-[#64748b] hover:text-[#0284c7] flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded hover:bg-[#f1f5f9]"
            title="Step gradient descent update"
          >
            <Sparkles className="w-2.5 h-2.5" />
            <span>STEP_OPT</span>
          </button>
        </div>

        {/* SVG Interactive Graph */}
        <div className="relative bg-[#f8fafc] rounded-lg border border-[#e2e8f0]/80 p-2 h-44 flex items-center justify-center overflow-hidden">
          {/* Subtle Grid in Canvas */}
          <div className="absolute inset-0 bg-cyber-grid opacity-60 pointer-events-none"></div>

          <svg className="w-full h-full" viewBox="0 0 340 150">
            <defs>
              <linearGradient id="cyberLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Neural Links / Connections */}
            {/* DATA -> N1.AI */}
            <line x1="60" y1="95" x2="130" y2="35" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 2" className="opacity-70 animate-[dash_20s_linear_infinite]" />
            {/* DATA -> N2.IOT */}
            <line x1="60" y1="95" x2="145" y2="110" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 2" className="opacity-70" />
            {/* N1.AI -> N3.DEV */}
            <line x1="130" y1="35" x2="215" y2="40" stroke="#7c3aed" strokeWidth="1.8" />
            {/* N1.AI -> N4.STRAT */}
            <line x1="130" y1="35" x2="220" y2="115" stroke="#7c3aed" strokeWidth="1.2" strokeDasharray="2 2" className="opacity-60" />
            {/* N2.IOT -> N3.DEV */}
            <line x1="145" y1="110" x2="215" y2="40" stroke="#059669" strokeWidth="1.2" strokeDasharray="2 2" className="opacity-60" />
            {/* N2.IOT -> N4.STRAT */}
            <line x1="145" y1="110" x2="220" y2="115" stroke="#059669" strokeWidth="1.8" />
            {/* N3.DEV -> SYNTHESIS */}
            <line x1="215" y1="40" x2="285" y2="95" stroke="#0284c7" strokeWidth="1.8" />
            {/* N4.STRAT -> SYNTHESIS */}
            <line x1="220" y1="115" x2="285" y2="95" stroke="#10b981" strokeWidth="2" />

            {/* Animated Data Packets along main highways */}
            <circle r="2.5" fill="#0ea5e9">
              <animateMotion
                path="M60,95 L130,35 L215,40 L285,95"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#7c3aed">
              <animateMotion
                path="M60,95 L145,110 L220,115 L285,95"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Nodes */}
            {NEURAL_NODES.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <g
                  key={node.id}
                  onClick={() => onNodeSelect(node)}
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  {/* Outer glow ring if selected */}
                  {isSelected && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="12"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="2"
                      className="animate-ping opacity-60"
                    />
                  )}
                  {/* Node Body */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="6.5"
                    fill="#ffffff"
                    stroke={node.color}
                    strokeWidth={isSelected ? "3" : "2"}
                    filter="url(#glowFilter)"
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="3"
                    fill={node.color}
                  />
                  {/* Label */}
                  <text
                    x={node.x}
                    y={node.y < 70 ? node.y - 10 : node.y + 15}
                    textAnchor="middle"
                    fill="#1e293b"
                    fontSize="8.5"
                    fontFamily="Space Mono, monospace"
                    fontWeight="700"
                    className="select-none pointer-events-none"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Real-Time Loss Readout in bottom right */}
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded border border-[#e2e8f0] text-[9px] font-mono-hud text-[#475569] shadow-2xs">
            VAL_LOSS: <span className={`font-bold font-mono text-[#006591] ${isSimulating ? 'text-[#10b981]' : ''}`}>
              {valLoss.toFixed(4)}
            </span>
          </div>
        </div>

        {/* Micro helper caption */}
        <div className="mt-2 flex items-center justify-between text-[10px] font-mono-hud text-[#64748b]">
          <span>TAP ANY NODE TO INSPECT WEIGHTS</span>
          <span className="text-[#0284c7] font-semibold">6 ACTIVE CORES</span>
        </div>
      </div>

      {/* Action Buttons matching screenshot */}
      <div className="w-full max-w-md flex flex-col gap-2.5">
        <button
          onClick={onExploreClick}
          className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#006591] to-[#0ea5e9] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(14,165,233,0.3)] hover:brightness-105 active:scale-[0.99] transition-all"
        >
          <span>Explore My Work</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onDownloadClick}
          className="w-full py-2.5 px-4 rounded-lg bg-white border border-[#cbd5e1] text-[#0f172a] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#f8fafc] hover:border-[#94a3b8] active:scale-[0.99] transition-all shadow-xs"
        >
          <Download className="w-4 h-4 text-[#006591]" />
          <span>Download Resume</span>
        </button>
      </div>
    </section>
  );
};
