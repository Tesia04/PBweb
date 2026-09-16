import React from 'react';
import { User, Cpu } from 'lucide-react';

interface HeaderHudProps {
  onOpenTelemetry: () => void;
}

export const HeaderHud: React.FC<HeaderHudProps> = ({ onOpenTelemetry }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf8ff]/90 backdrop-blur-md border-b border-[#e2e8f0]">
      {/* Primary HUD Protocol Strip */}
      <div className="max-w-xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm bg-[#006591] flex items-center justify-center text-white text-[10px] font-mono-hud font-bold shadow-sm">
            TS
          </div>
          <span className="text-[12px] font-mono-hud font-bold tracking-wider text-[#0f172a]">
            TS // PROTOCOL
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></span>
          <span className="text-[11px] font-mono-hud text-[#64748b] hidden xs:inline tracking-tight">
            STATUS: <strong className="text-[#10b981] font-semibold">ONLINE</strong>
          </span>
          <span className="text-[11px] font-mono-hud text-[#64748b] hidden sm:inline">
            • LIGHT_HUD
          </span>
        </div>

        <button
          onClick={onOpenTelemetry}
          className="p-1.5 rounded-full hover:bg-[#f1f5f9] text-[#006591] transition-colors border border-transparent hover:border-[#cbd5e1] flex items-center gap-1 group"
          title="Open System Telemetry & Diagnostics"
          aria-label="Open Diagnostics"
        >
          <div className="w-7 h-7 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all shadow-xs">
            <User className="w-4 h-4" />
          </div>
        </button>
      </div>

      {/* Sub-strip Coordinates & Node ID */}
      <div className="bg-[#f1f5f9]/70 border-t border-[#e2e8f0]/60 px-4 py-1 text-[10px] font-mono-hud text-[#64748b]">
        <div className="max-w-xl mx-auto flex items-center justify-between tracking-wide">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>LOC: <span className="text-[#0f172a] font-semibold">BANGALORE // 13.0827°N</span></span>
          </div>
          <div>
            NODE: <span className="text-[#006591] font-semibold bg-[#e0f2fe] px-1 py-0.5 rounded text-[9px]">REVA.AI.DS_v29</span>
          </div>
        </div>
      </div>
    </header>
  );
};
