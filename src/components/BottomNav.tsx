import React from 'react';
import { 
  LayoutGrid, 
  User, 
  Cpu, 
  Briefcase, 
  FolderGit2, 
  Milestone, 
  Send 
} from 'lucide-react';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: LayoutGrid },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Exp', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'journey', label: 'Journey', icon: Milestone },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e2e8f0] shadow-lg">
      <div className="max-w-xl mx-auto px-2 py-1.5 flex items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1 transition-all rounded-lg ${
                isActive
                  ? 'text-[#006591] font-bold'
                  : 'text-[#64748b] hover:text-[#0f172a]'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 transition-transform ${isActive ? 'scale-115 text-[#006591]' : ''}`} />
              <span className="text-[10px] font-mono-hud leading-none tracking-tight">
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#006591] mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
