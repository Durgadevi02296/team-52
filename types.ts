export enum AppView {
  AUTH = 'AUTH',
  WELCOME = 'WELCOME',
  SCAN = 'SCAN',
  ANALYSIS = 'ANALYSIS',
  RESULT = 'RESULT'
}

export type Language = 'english' | 'telugu';

export interface UserProfile {
  name: string;
  age: string;
  gender: string;
  mobile: string;
}

export interface HealthData {
  diagnosis: string;
  severity: 'Initial' | 'Moderate' | 'Advanced';
  health_issues: string[];
  precautions: string[];
  neural_network_analysis: string;
}

export interface AnalysisResult {
  english: HealthData;
  telugu: HealthData;
}