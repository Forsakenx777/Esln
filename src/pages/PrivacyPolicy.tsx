import React from 'react';
import { Shield, Lock, Eye, UserCheck, Globe, Bell, Database, Clock, HeartHandshake } from 'lucide-react';

const Section = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) => (
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

export default function PrivacyPolicy() {
  const lastUpdated = "January 1, 2025";

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl shadow-lg shadow-indigo-500/10 p-8 mb-8 border border-gray-800">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: {lastUpdated}</p>
          </div>

          <Section title="Introduction" icon={Lock}>
            <p>We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.</p>
          </Section>

          <Section title="Information We Collect" icon={Eye}>
            <ul className="list-disc pl-5">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information" icon={UserCheck}>
            <ul className="list-disc pl-5">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
            </ul>
          </Section>

          <Section title="Data Protection" icon={Database}>
            <p>We implement appropriate technical and organizational measures to maintain the security of your personal information, including encryption and secure server infrastructure.</p>
          </Section>

          <Section title="International Transfers" icon={Globe}>
            <p>Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.</p>
          </Section>

          <Section title="Your Rights" icon={HeartHandshake}>
            <ul className="list-disc pl-5">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </Section>

          <Section title="Updates to This Policy" icon={Bell}>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.</p>
          </Section>

          <Section title="Retention Period" icon={Clock}>
            <p>We will retain your personal data only for as long as necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>
          </Section>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 text-center">
              If you have any questions about this Privacy Policy, please contact us at esportsleaguenepal2024@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}