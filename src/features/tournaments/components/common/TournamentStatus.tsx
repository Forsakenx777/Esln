interface TournamentStatusProps {
  isOpen: boolean;
}

export function TournamentStatus({ isOpen }: TournamentStatusProps) {
  if (isOpen) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        <p className="text-green-400">Registration is open!</p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
      <p className="text-yellow-400">Registration coming soon</p>
    </div>
  );
}