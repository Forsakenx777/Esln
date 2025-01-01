interface IconWrapperProps {
  children: React.ReactNode;
}

export function IconWrapper({ children }: IconWrapperProps) {
  return (
    <div className="relative mb-6">
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-lg"></div>
      {children}
    </div>
  );
}