import { useMemo, useState } from 'react';

export const Calendar = ({ events, onDateClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const eventDates = useMemo(() => {
    return events.reduce((acc, event) => {
      acc[event.date] = true;
      return acc;
    }, {});
  }, [events]);

  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const days = Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrevMonth}
          className="bg-purple-600 text-white hover:bg-purple-800 rounded-full p-2"
        >
          &lt;
        </button>
        <h3 className="text-xl font-semibold text-black">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h3>
        <button
          onClick={handleNextMonth}
          className="bg-purple-600 text-white hover:bg-purple-800 rounded-full p-2"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-sm font-medium text-gray-600 p-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 flex-grow">
        {Array(firstDay.getDay()).fill(null).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        {days.map(day => {
          const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasEvent = eventDates[dateStr];
          const isToday = 
            day === today.getDate() && 
            currentDate.getMonth() === today.getMonth() && 
            currentDate.getFullYear() === today.getFullYear();
          
          return (
            <div
              key={day}
              onClick={() => hasEvent && onDateClick(dateStr)}
              className={`aspect-square flex flex-col items-center justify-center text-lg rounded-lg relative
                ${hasEvent ? 'bg-purple-100 text-purple-700 font-semibold cursor-pointer hover:bg-purple-200' : 'text-black'}
                ${isToday ? 'ring-2 ring-blue-500' : ''}`}
            >
              {day}
              {hasEvent && <span className="w-2 h-2 bg-purple-500 rounded-full mt-1"></span>}
              {isToday && <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};