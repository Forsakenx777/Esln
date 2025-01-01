import { Scroll, Scale, AlertCircle, Users, Ban, MessageSquare, ShieldCheck, Handshake, FileTerminal } from 'lucide-react';
import LegalSection from './shared/LegalSection';
import LegalLayout from './shared/LegalLayout';

export default function TermsOfService() {
  const lastUpdated = "January 1, 2025";

  return (
    <LegalLayout
      title="Terms of Service"
      icon={Scroll}
      lastUpdated={lastUpdated}
    >
      <LegalSection title="Agreement to Terms" icon={Handshake}>
        <p>By accessing our service, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
      </LegalSection>

      <LegalSection title="Intellectual Property" icon={ShieldCheck}>
        <p>The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.</p>
      </LegalSection>

      <LegalSection title="User Responsibilities" icon={Users}>
        <ul className="list-disc pl-5">
          <li>You must be at least 18 years old to use this service</li>
          <li>You are responsible for maintaining the security of your account</li>
          <li>You agree not to share your account credentials</li>
          <li>You must provide accurate and complete information</li>
        </ul>
      </LegalSection>

      <LegalSection title="Acceptable Use" icon={Scale}>
        <p>You agree not to use the service for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks.</p>
      </LegalSection>

      <LegalSection title="Prohibited Activities" icon={Ban}>
        <ul className="list-disc pl-5">
          <li>Engaging in any illegal activities</li>
          <li>Attempting to gain unauthorized access</li>
          <li>Transmitting malware or viruses</li>
          <li>Harassing or threatening other users</li>
          <li>Posting false or misleading information</li>
        </ul>
      </LegalSection>

      <LegalSection title="Disclaimer" icon={AlertCircle}>
        <p>The service is provided "as is" without warranties of any kind, whether express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.</p>
      </LegalSection>

      <LegalSection title="Communication" icon={MessageSquare}>
        <p>By using our service, you agree to receive communications from us, including updates about the service and promotional materials.</p>
      </LegalSection>

      <LegalSection title="Technical Requirements" icon={FileTerminal}>
        <p>You are responsible for obtaining and maintaining all equipment and services needed to access and use our service, including but not limited to Internet access and compatible devices.</p>
      </LegalSection>

      <div className="mt-12 pt-8 border-t border-gray-800">
        <p className="text-sm text-gray-400 text-center">
          If you have any questions about these Terms of Service, please contact us at esportsleaguenepal2024@gmail.com
        </p>
      </div>
    </LegalLayout>
  );
}