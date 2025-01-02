interface TournamentRequirementsProps {
  requirements: string[];
}

export function TournamentRequirements({ requirements }: TournamentRequirementsProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Requirements</h3>
      <ul className="space-y-2">
        {requirements.map((req, index) => (
          <li key={index} className="text-gray-300 flex items-start gap-2">
            <span className="text-gray-500">•</span>
            {req}
          </li>
        ))}
      </ul>
    </div>
  );
}