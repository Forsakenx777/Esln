import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  icon: LucideIcon;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, icon: Icon, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl shadow-lg shadow-indigo-500/10 p-8 mb-8 border border-gray-800">
          <div className="text-center mb-12">
            <Icon className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-gray-400">Last updated: {lastUpdated}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}