export interface SkillItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'engineering' | 'hardware' | 'leadership' | 'operational';
  iconType: string;
  level?: number;
  description?: string;
}

export interface ExperienceRole {
  id: string;
  roleNumber: string;
  title: string;
  organization: string;
  status: 'PRESENT' | 'COMPLETED';
  location: string;
  timeline: string;
  bullets: string[];
}

export interface ChronologyStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  period?: string;
  details: string[];
  tags: string[];
}

export interface AcademicRecord {
  level: string;
  badge: string;
  badgeType: 'cgpa' | 'percentage';
  institution: string;
  program: string;
  meta: string;
  expectedOrCompleted: string;
}

export interface MilestoneItem {
  title: string;
  description: string;
  icon: 'star' | 'shield' | 'users';
}

export interface NeuralNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: 'input' | 'hidden' | 'output' | 'eval';
  color: string;
  description: string;
  telemetry: {
    weights: number;
    latency: string;
    state: string;
  };
}
