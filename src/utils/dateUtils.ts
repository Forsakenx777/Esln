export function isEventEnded(eventDate: string): boolean {
  // Handle "Coming Soon" or TBA cases
  if (eventDate.toLowerCase().includes('coming soon') || 
      eventDate.toLowerCase().includes('tba')) {
    return false;
  }

  // For date ranges (e.g., "December 15-20, 2023"), take the end date
  const dates = eventDate.split('-');
  const endDate = dates[dates.length - 1].trim();
  
  return new Date(endDate) < new Date();
}