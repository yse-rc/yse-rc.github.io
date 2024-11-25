import { useMemo } from 'react';

export const Calendar = ({ events }) => {
  const eventDates = useMemo(() => {
    return events.reduce((acc, event) => {
      acc[event.date] = true;
      return acc;
    }, {});
  }, [events]);

  // Get current month's days
  const currentDate = new Date();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const days = Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">
        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array(firstDay.getDay()).fill(null).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map(day => {
          const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasEvent = eventDates[dateStr];
          
          return (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center text-sm rounded-full
                ${hasEvent ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-700'}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};