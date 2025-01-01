import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LegalSectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export default function LegalSection({ title, icon: Icon, children }: LegalSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-6 h-6 text-indigo-400" />
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <div className="text-gray-300 space-y-2">
        {children}
      </div>
    </div>
  );
}