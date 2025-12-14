import React, { useState } from 'react';
import { AuthView } from './components/AuthView';
import { WelcomeView } from './components/WelcomeView';
import { ScannerView } from './components/ScannerView';
import { AnalysisView } from './components/AnalysisView';
import { AppView, UserProfile } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.AUTH);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const renderView = () => {
    switch (currentView) {
      case AppView.AUTH:
        return (
            <AuthView onComplete={(profile) => {
                setUserProfile(profile);
                setCurrentView(AppView.WELCOME);
            }} />
        );
      
      case AppView.WELCOME:
        return <WelcomeView onContinue={() => setCurrentView(AppView.SCAN)} />;
      
      case AppView.SCAN:
        return (
          <ScannerView 
            onCapture={(image) => {
              setCapturedImage(image);
              setCurrentView(AppView.ANALYSIS);
            }} 
          />
        );
      
      case AppView.ANALYSIS:
        return (
          <AnalysisView 
            imageSrc={capturedImage!} 
            userProfile={userProfile}
            onReset={() => {
              setCapturedImage(null);
              setCurrentView(AppView.SCAN);
            }} 
          />
        );
      
      default:
        return <div>Unknown View</div>;
    }
  };

  return (
    <div className="w-full h-full sm:max-w-md sm:h-[90vh] sm:rounded-3xl bg-cyber-900 shadow-2xl overflow-hidden relative border border-cyber-800">
      {/* Status Bar Simulation */}
      <div className="w-full h-6 bg-black flex justify-between px-4 items-center text-[10px] text-gray-400 select-none z-50 relative">
        <span>09:41</span>
        <div className="flex gap-1">
          <span>5G</span>
          <span>100%</span>
        </div>
      </div>
      
      <main className="w-full h-[calc(100%-1.5rem)] relative">
        {renderView()}
      </main>
    </div>
  );
};

export default App;