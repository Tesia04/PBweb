import React, { useState, useEffect } from 'react';
import { HeaderHud } from './components/HeaderHud';
import { HeroSection } from './components/HeroSection';
import { IdentityProfile } from './components/IdentityProfile';
import { TechStack } from './components/TechStack';
import { FieldExperience } from './components/FieldExperience';
import { FeaturedBuilds } from './components/FeaturedBuilds';
import { Chronology } from './components/Chronology';
import { ImpactLeadership } from './components/ImpactLeadership';
import { AcademicCredentials } from './components/AcademicCredentials';
import { KeyMilestones } from './components/KeyMilestones';
import { TransmissionProtocol } from './components/TransmissionProtocol';
import { BottomNav } from './components/BottomNav';
import { TelemetryDrawer } from './components/TelemetryDrawer';
import { DossierModal } from './components/DossierModal';
import { NeuralNode, SkillItem } from './types';
import { Terminal, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState('data');
  const [companionMessage, setCompanionMessage] = useState(
    'Ready to inspect telemetry. Click any node to explore!'
  );

  // Handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'journey', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Neural Node Click
  const handleNodeSelect = (node: NeuralNode) => {
    setSelectedNodeId(node.id);
    setCompanionMessage(
      `Core [${node.label}] active. Latency: ${node.telemetry.latency} // ${node.description}`
    );
  };

  // Skill click
  const handleSkillSelect = (skill: SkillItem) => {
    setCompanionMessage(
      `Capability loaded: ${skill.name} (${skill.subtitle}). Ready for production deployment.`
    );
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] bg-cyber-grid text-[#131b2e] font-sans antialiased relative selection:bg-[#0ea5e9]/20 selection:text-[#006591]">
      {/* Mobile/HUD Container */}
      <div className="max-w-xl mx-auto min-h-screen bg-white/70 backdrop-blur-xs shadow-[0_0_50px_rgba(0,0,0,0.03)] border-x border-[#e2e8f0] relative pb-16">
        {/* Top Protocol Header */}
        <HeaderHud onOpenTelemetry={() => setIsTelemetryOpen(true)} />

        <main>
          {/* Hero Section */}
          <HeroSection
            onExploreClick={() => scrollToSection('projects')}
            onDownloadClick={() => setIsDossierOpen(true)}
            onNodeSelect={handleNodeSelect}
            selectedNodeId={selectedNodeId}
          />

          {/* 01 // IDENTITY & PROFILE */}
          <IdentityProfile />

          {/* 02 // TECH_STACK & CAPABILITIES */}
          <TechStack onSelectSkill={handleSkillSelect} />

          {/* 03 // FIELD_EXPERIENCE */}
          <FieldExperience />

          {/* 04 // FEATURED_BUILDS */}
          <FeaturedBuilds />

          {/* 05 // THE_CHRONOLOGY */}
          <Chronology />

          {/* 06 // IMPACT & LEADERSHIP */}
          <ImpactLeadership />

          {/* 07 // ACADEMIC_CREDENTIALS */}
          <AcademicCredentials />

          {/* 08 // KEY_MILESTONES */}
          <KeyMilestones />

          {/* 09 // TRANSMISSION_PROTOCOL */}
          <TransmissionProtocol
            onDownloadDossier={() => setIsDossierOpen(true)}
            companionMessage={companionMessage}
          />
        </main>

        {/* Floating Cyber HUD Action Button (Terminal / Diagnostics) matching bottom right in screenshot */}
        <button
          onClick={() => setIsTelemetryOpen(true)}
          className="fixed bottom-16 right-4 sm:right-auto sm:left-[calc(50%+220px)] z-40 w-11 h-11 rounded-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(14,165,233,0.4)] transition-all hover:scale-105 active:scale-95"
          title="Open System Telemetry & Console"
          aria-label="Open System Telemetry"
        >
          <Terminal className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#10b981] rounded-full border-2 border-white animate-pulse"></span>
        </button>

        {/* Bottom Navigation Bar */}
        <BottomNav activeSection={activeSection} onNavigate={scrollToSection} />
      </div>

      {/* Telemetry Console Drawer */}
      <TelemetryDrawer
        isOpen={isTelemetryOpen}
        onClose={() => setIsTelemetryOpen(false)}
        selectedNodeId={selectedNodeId}
      />

      {/* Dossier Modal / Printable Resume */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
