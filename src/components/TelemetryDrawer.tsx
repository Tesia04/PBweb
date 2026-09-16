import React, { useState } from 'react';
import { X, Terminal, Cpu, Radio, Activity, RefreshCw, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, NEURAL_NODES } from '../data/portfolioData';

interface TelemetryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNodeId: string;
}

export const TelemetryDrawer: React.FC<TelemetryDrawerProps> = ({
  isOpen,
  onClose,
  selectedNodeId
}) => {
  const [pingRunning, setPingRunning] = useState(false);
  const [pingLogs, setPingLogs] = useState<string[]>([
    "INITIALIZING TELEMETRY BUS...",
    "LINK ESTABLISHED: REVA.AI.DS_v29",
    "CORE SENSORS: ONLINE [KY-037 & ESP8266]",
    "SYSTEM STATUS: NOMINAL (8.2 CGPA RUNTIME)"
  ]);

  const handleRunDiagnostics = () => {
    setPingRunning(true);
    const newEntry = `[${new Date().toLocaleTimeString()}] PING REVA NODE OK (0.34ms) // INTEGRITY: 100%`;
    setTimeout(() => {
      setPingLogs(prev => [newEntry, ...prev.slice(0, 5)]);
      setPingRunning(false);
    }, 500);
  };

  if (!isOpen) return null;

  const currentNode = NEURAL_NODES.find(n => n.id === selectedNodeId) || NEURAL_NODES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#0f172a]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-[#ffffff] rounded-t-2xl sm:rounded-2xl border border-[#cbd5e1] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#006591] text-white p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#7dd3fc]" />
            <span className="text-xs font-mono-hud font-bold tracking-wider">
              TS // SYSTEM_TELEMETRY_CONSOLE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto space-y-4 font-mono-hud text-xs">
          {/* Identity Bar */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-[10px] text-[#64748b] block">OPERATOR</span>
              <strong className="text-sm text-[#0f172a]">{PERSONAL_INFO.name}</strong>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[#64748b] block">STATUS</span>
              <span className="text-[#16a34a] font-bold flex items-center gap-1 justify-end">
                <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse"></span>
                ACTIVE
              </span>
            </div>
          </div>

          {/* Active Node Telemetry */}
          <div className="bg-[#faf5ff] border border-[#e9d5ff] p-3 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-[#7c3aed]">
                SELECTED_NODE // {currentNode.label}
              </span>
              <span className="text-[10px] text-[#7c3aed] uppercase font-bold">
                {currentNode.telemetry.state}
              </span>
            </div>
            <p className="text-xs text-[#334155] mb-2 font-sans">
              {currentNode.description}
            </p>
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#f3e8ff] text-[10px]">
              <div>
                <span className="text-[#64748b] block">WEIGHTS</span>
                <strong className="text-[#0f172a]">{currentNode.telemetry.weights}</strong>
              </div>
              <div>
                <span className="text-[#64748b] block">LATENCY</span>
                <strong className="text-[#0284c7]">{currentNode.telemetry.latency}</strong>
              </div>
              <div>
                <span className="text-[#64748b] block">TYPE</span>
                <strong className="text-[#7c3aed] uppercase">{currentNode.type}</strong>
              </div>
            </div>
          </div>

          {/* Real-Time Telemetry Logs */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] text-[#64748b] font-bold uppercase tracking-wider">
                RUNTIME CONSOLE LOGS
              </span>
              <button
                onClick={handleRunDiagnostics}
                disabled={pingRunning}
                className="text-[10px] text-[#006591] hover:text-[#004c6e] flex items-center gap-1"
              >
                <RefreshCw className={`w-3 h-3 ${pingRunning ? 'animate-spin' : ''}`} />
                <span>PING BUS</span>
              </button>
            </div>
            <div className="bg-[#0f172a] text-[#38bdf8] p-3 rounded-xl space-y-1 text-[10px] font-mono select-text">
              {pingLogs.map((log, idx) => (
                <div key={idx} className="leading-relaxed">
                  <span className="text-[#10b981] mr-1.5">&gt;</span>
                  {log}
                </div>
              ))}
            </div>
          </div>

          {/* Quick specs matrix */}
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="p-2.5 rounded-lg border border-[#e2e8f0] bg-white">
              <span className="text-[#64748b] block">LOCATION</span>
              <strong className="text-[#0f172a]">{PERSONAL_INFO.location}</strong>
            </div>
            <div className="p-2.5 rounded-lg border border-[#e2e8f0] bg-white">
              <span className="text-[#64748b] block">CAMPUS REPO</span>
              <strong className="text-[#006591]">REVA University</strong>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8fafc] border-t border-[#e2e8f0] p-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[10px] text-[#64748b]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
            <span>ENCRYPTED PROTOCOL ACTIVE</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#0f172a] text-white text-xs font-semibold hover:bg-[#1e293b]"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
