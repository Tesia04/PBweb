import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Search, 
  Radio, 
  Cpu, 
  Monitor, 
  Volume2, 
  VolumeX, 
  AlertTriangle, 
  Zap, 
  X, 
  Check 
} from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/portfolioData';

export const FeaturedBuilds: React.FC = () => {
  // ProfAlert State
  const [facultySearch, setFacultySearch] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState<typeof FACULTY_MEMBERS[0] | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [studentName, setStudentName] = useState('Ananya Sen');

  // IoT Hardware Simulation State
  const [ambientDb, setAmbientDb] = useState(54);
  const [isSpiking, setIsSpiking] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [sensorStatus, setSensorStatus] = useState<'NORMAL' | 'ALERT'>('NORMAL');

  // Filtered faculty for ProfAlert
  const filteredFaculty = FACULTY_MEMBERS.filter(f => 
    f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
    f.dept.toLowerCase().includes(facultySearch.toLowerCase())
  );

  // IoT Spike Simulation
  const handleSimulateSpike = () => {
    setIsSpiking(true);
    setAmbientDb(88);
    setSensorStatus('ALERT');

    // Beep sound simulation if audio is enabled
    if (soundEnabled && typeof window !== 'undefined' && window.AudioContext) {
      try {
        const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
      } catch {
        // AudioContext ignored if blocked
      }
    }

    setTimeout(() => {
      setAmbientDb(54);
      setSensorStatus('NORMAL');
      setIsSpiking(false);
    }, 2800);
  };

  // Subtle ambient jitter for realism
  useEffect(() => {
    if (isSpiking) return;
    const interval = setInterval(() => {
      setAmbientDb(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const val = prev + delta;
        return Math.max(48, Math.min(62, val));
      });
    }, 2500);
    return () => clearInterval(interval);
  }, [isSpiking]);

  return (
    <section id="projects" className="w-full py-6 px-4 max-w-xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono-hud font-bold text-[#0284c7]">04 //</span>
          <h2 className="text-lg font-bold text-[#0f172a] tracking-tight">FEATURED_BUILDS</h2>
        </div>
        <div className="bg-[#f1f5f9] border border-[#e2e8f0] px-2 py-0.5 rounded text-[10px] font-mono-hud text-[#64748b] tracking-wider">
          PROTOTYPES
        </div>
      </div>

      <div className="space-y-6">
        {/* ================= BUILD 1: ProfAlert ================= */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-5 shadow-xs">
          {/* Header Badges */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1 text-[11px] font-mono-hud font-bold text-[#006591]">
              <Calendar className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>CAMPUS SOFTWARE SYSTEM</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#f0fdf4] border border-[#bbf7d0] text-[#15803d] text-[10px] font-mono-hud font-bold tracking-wider">
              VALIDATED MVP
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">
            ProfAlert
          </h3>
          <p className="text-xs font-semibold text-[#475569] mb-2 font-mono-hud">
            Professor Availability & Appointment System
          </p>

          <p className="text-xs text-[#334155] leading-relaxed mb-3">
            Campus application concept designed to help students find professors, check their availability, and schedule appointments efficiently.
          </p>

          {/* MVP Validation Banner */}
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-2.5 mb-3.5 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
            <p className="text-xs text-[#15803d] leading-snug font-medium">
              MVP validation conducted with campus students to gather feedback & user needs.
            </p>
          </div>

          {/* Feature Tags */}
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            <span className="bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 rounded text-[11px] text-[#475569] font-medium">
              Professor Search
            </span>
            <span className="bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 rounded text-[11px] text-[#475569] font-medium">
              Real-Time Availability
            </span>
            <span className="bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 rounded text-[11px] text-[#475569] font-medium">
              Appointment Booking
            </span>
            <span className="bg-[#f8fafc] border border-[#e2e8f0] px-2.5 py-1 rounded text-[11px] text-[#475569] font-medium">
              Notifications
            </span>
          </div>

          {/* Interactive Live Mockup Window */}
          <div className="rounded-lg border border-[#cbd5e1] overflow-hidden bg-[#f8fafc] shadow-xs">
            {/* Mockup Window Bar */}
            <div className="bg-[#f1f5f9] px-3 py-1.5 border-b border-[#e2e8f0] flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></span>
              </div>
              <span className="text-[10px] font-mono-hud text-[#64748b] tracking-wider">
                PROFALERT_MOCKUP_v1.0
              </span>
            </div>

            {/* Mockup Body */}
            <div className="p-3">
              {/* Search Bar */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 text-[#94a3b8] absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={facultySearch}
                  onChange={(e) => setFacultySearch(e.target.value)}
                  placeholder="Search Department or Faculty..."
                  className="w-full bg-white border border-[#cbd5e1] rounded-md pl-8 pr-3 py-1.5 text-xs text-[#0f172a] placeholder-[#94a3b8] focus:outline-hidden focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                />
              </div>

              {/* Faculty Card */}
              <div className="space-y-2">
                {filteredFaculty.slice(0, 2).map((faculty) => (
                  <div
                    key={faculty.id}
                    className="bg-white rounded-lg border border-[#e2e8f0] p-2.5 flex items-center justify-between gap-2 shadow-2xs hover:border-[#bae6fd] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-md bg-[#e0f2fe] text-[#0284c7] font-mono-hud font-bold text-xs flex items-center justify-center shrink-0">
                        {faculty.avatar}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-[#0f172a] truncate">
                          {faculty.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[10px] text-[#64748b]">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                          <span className="text-[#15803d] font-semibold">{faculty.status}</span>
                          <span>•</span>
                          <span className="truncate">{faculty.room}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedFaculty(faculty);
                        setBookingConfirmed(false);
                      }}
                      className="px-3 py-1.5 rounded bg-[#0284c7] hover:bg-[#0369a1] text-white text-[11px] font-semibold tracking-wide shrink-0 shadow-xs transition-colors"
                    >
                      Book Slot
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal / Booking Sheet for ProfAlert */}
          {selectedFaculty && (
            <div className="mt-3 p-3 bg-gradient-to-r from-[#f0f9ff] to-[#f8fafc] border border-[#7dd3fc] rounded-lg text-xs relative">
              <button
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-2 right-2 text-[#64748b] hover:text-[#0f172a]"
              >
                <X className="w-4 h-4" />
              </button>

              {!bookingConfirmed ? (
                <div>
                  <div className="flex items-center gap-2 mb-2 font-mono-hud text-[11px] text-[#0284c7] font-bold">
                    <span>RESERVATION PROTOCOL //</span>
                    <span className="text-[#0f172a]">{selectedFaculty.name}</span>
                  </div>

                  <p className="text-[11px] text-[#64748b] mb-2">
                    Office Hours: {selectedFaculty.officeHours} ({selectedFaculty.timing}) • {selectedFaculty.room}
                  </p>

                  <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                    {['10:30 AM', '11:15 AM', '02:00 PM'].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-1 px-1.5 text-center rounded border font-mono-hud text-[10px] transition-colors ${
                          selectedTime === slot
                            ? 'bg-[#0284c7] text-white border-[#0284c7]'
                            : 'bg-white text-[#334155] border-[#cbd5e1] hover:bg-[#f1f5f9]'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Student Name / Roll"
                      className="bg-white border border-[#cbd5e1] rounded px-2 py-1 text-xs text-[#0f172a] grow"
                    />
                    <button
                      onClick={() => setBookingConfirmed(true)}
                      className="px-3 py-1 bg-[#15803d] hover:bg-[#166534] text-white font-semibold rounded text-xs transition-colors shrink-0"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-[#15803d]">
                  <Check className="w-5 h-5 bg-[#bbf7d0] p-0.5 rounded-full" />
                  <div>
                    <strong className="block text-xs font-bold">Appointment Confirmed!</strong>
                    <span className="text-[11px] text-[#166534]">
                      {selectedFaculty.name} at {selectedTime} for {studentName}. An automated alert was routed.
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ================= BUILD 2: IoT Noise Level Indicator ================= */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 sm:p-5 shadow-xs">
          {/* Header Badges */}
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1 text-[11px] font-mono-hud font-bold text-[#059669]">
              <Radio className="w-3.5 h-3.5 text-[#10b981]" />
              <span>EMBEDDED HARDWARE SYSTEM</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#f1f5f9] border border-[#cbd5e1] text-[#475569] text-[10px] font-mono-hud font-bold tracking-wider">
              PHYSICAL COMPUTE
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl font-bold text-[#0f172a] tracking-tight">
            IoT-Based Noise Level Indicator
          </h3>
          <p className="text-xs font-semibold text-[#475569] mb-2 font-mono-hud">
            Real-Time Ambient Sound Telemetry
          </p>

          <p className="text-xs text-[#334155] leading-relaxed mb-3">
            IoT-based system designed to monitor ambient noise levels and provide visual warnings when noise exceeds a predefined threshold.
          </p>

          {/* Hardware Components Grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2 text-center">
              <Cpu className="w-4 h-4 text-[#0284c7] mx-auto mb-1" />
              <p className="text-[11px] font-bold text-[#0f172a] leading-tight">NodeMCU</p>
              <span className="text-[9px] font-mono-hud text-[#64748b]">ESP8266 WiFi</span>
            </div>

            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2 text-center">
              <Radio className="w-4 h-4 text-[#059669] mx-auto mb-1" />
              <p className="text-[11px] font-bold text-[#0f172a] leading-tight">KY-037</p>
              <span className="text-[9px] font-mono-hud text-[#64748b]">Sound Sensor</span>
            </div>

            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2 text-center">
              <Monitor className="w-4 h-4 text-[#7c3aed] mx-auto mb-1" />
              <p className="text-[11px] font-bold text-[#0f172a] leading-tight">16×2 LCD</p>
              <span className="text-[9px] font-mono-hud text-[#64748b]">I2C Display</span>
            </div>
          </div>

          {/* Interactive Circuit Bus Simulation Panel */}
          <div className="rounded-xl border border-[#cbd5e1] p-3.5 bg-[#f8fafc] mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono-hud font-bold text-[#64748b] tracking-wider">
                CIRCUIT_SIGNAL_BUS // INTERACTIVE
              </span>
              <button
                onClick={handleSimulateSpike}
                disabled={isSpiking}
                className="px-2.5 py-1 rounded bg-white hover:bg-[#e0f2fe] text-[#0284c7] border border-[#0284c7] text-[10px] font-mono-hud font-bold transition-all shadow-xs active:scale-95 disabled:opacity-50"
              >
                {isSpiking ? 'SPIKING...' : 'Simulate Spike'}
              </button>
            </div>

            {/* Signal Flow Diagram */}
            <div className="flex items-center justify-between px-2 py-3 bg-white rounded-lg border border-[#e2e8f0] mb-3 relative overflow-hidden">
              {/* Sensor Node */}
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono-hud text-xs font-bold transition-colors ${
                  isSpiking ? 'border-[#ef4444] bg-[#fef2f2] text-[#dc2626]' : 'border-[#0ea5e9] bg-[#f0f9ff] text-[#0284c7]'
                }`}>
                  S
                </div>
                <span className="text-[9px] font-mono-hud text-[#64748b] mt-1">KY-037</span>
              </div>

              {/* Arrow 1 */}
              <div className="flex-1 flex items-center justify-center px-1 relative">
                <div className={`h-0.5 w-full transition-colors ${isSpiking ? 'bg-[#ef4444]' : 'bg-[#0ea5e9]'}`}></div>
                <span className={`text-[10px] font-mono-hud font-bold mx-1 ${isSpiking ? 'text-[#ef4444]' : 'text-[#0ea5e9]'}`}>
                  &rarr;
                </span>
              </div>

              {/* Microcontroller Node */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#7c3aed] bg-[#faf5ff] text-[#7c3aed] flex items-center justify-center font-mono-hud text-[10px] font-bold">
                  MCU
                </div>
                <span className="text-[9px] font-mono-hud text-[#64748b] mt-1">ESP8266</span>
              </div>

              {/* Arrow 2 */}
              <div className="flex-1 flex items-center justify-center px-1 relative">
                <div className={`h-0.5 w-full transition-colors ${isSpiking ? 'bg-[#ef4444]' : 'bg-[#7c3aed]'}`}></div>
                <span className={`text-[10px] font-mono-hud font-bold mx-1 ${isSpiking ? 'text-[#ef4444]' : 'text-[#7c3aed]'}`}>
                  &rarr;
                </span>
              </div>

              {/* Display Node */}
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-md border-2 flex items-center justify-center font-mono-hud text-[10px] font-bold transition-colors ${
                  isSpiking ? 'border-[#ef4444] bg-[#fef2f2] text-[#dc2626]' : 'border-[#10b981] bg-[#ecfdf5] text-[#059669]'
                }`}>
                  LCD
                </div>
                <span className="text-[9px] font-mono-hud text-[#64748b] mt-1">16x2 I2C</span>
              </div>
            </div>

            {/* LCD Display Readout */}
            <div className={`p-3 rounded-lg border font-mono-hud text-xs transition-all shadow-inner relative ${
              isSpiking
                ? 'bg-[#1e293b] text-[#ef4444] border-[#ef4444]'
                : 'bg-[#f0fdf4] text-[#15803d] border-[#86efac]'
            }`}>
              <div className="flex items-center justify-between text-[10px] border-b pb-1 mb-1.5 opacity-80">
                <span>I2C ADDR: 0x27</span>
                <span className={`w-2 h-2 rounded-full ${isSpiking ? 'bg-[#ef4444] animate-ping' : 'bg-[#10b981]'}`}></span>
              </div>

              <div className="font-bold text-sm sm:text-base tracking-wide flex items-center justify-between">
                <span>AMBIENT: {ambientDb} dB // {sensorStatus === 'ALERT' ? 'THRESHOLD EXCEEDED' : 'NORMAL'}</span>
                {isSpiking && <AlertTriangle className="w-4 h-4 text-[#ef4444] animate-bounce" />}
              </div>

              <div className="text-[10px] opacity-90 mt-1">
                STATUS: {isSpiking ? 'WARNING: HIGH NOISE LEVEL [LIMIT: 75dB]' : 'SYSTEM OK [THRESHOLD: 75dB]'}
              </div>
            </div>
          </div>

          {/* Checkmark Features matching screenshot */}
          <div className="grid grid-cols-2 gap-2 text-xs text-[#334155]">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>Real-time monitoring</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>Noise status display</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>Warning indication</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span>Visual alert system</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
