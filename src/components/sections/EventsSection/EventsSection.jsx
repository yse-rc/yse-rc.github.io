import { useEffect, useRef } from 'react';
import { events } from '../../../data/events';
import { Calendar } from './Calendar';

export const EventsSection = () => {
  const eventsListRef = useRef(null);
  const eventRefs = useRef({});
  const hasScrolled = useRef(false);
  const isDirectVisit = useRef(true);

  // Sort events and add isPast flag
  const sortedEvents = events
    .map(event => ({
      ...event,
      dateObj: new Date(event.date),
      isPast: new Date(event.date) < new Date()
    }))
    .sort((a, b) => a.dateObj - b.dateObj);

  const nextEventIndex = sortedEvents.findIndex(event => !event.isPast);

  useEffect(() => {
    // Reset on mount
    isDirectVisit.current = !document.referrer.includes(window.location.origin);
    
    // Only scroll within the events list container
    if (nextEventIndex !== -1 && eventsListRef.current) {
      setTimeout(() => {
        const nextEvent = sortedEvents[nextEventIndex];
        if (eventRefs.current[nextEvent.date] && eventsListRef.current) {
          eventsListRef.current.scrollTop = eventRefs.current[nextEvent.date].offsetTop - eventsListRef.current.offsetTop;
        }
      }, 100);
    }

    return () => {
      hasScrolled.current = false;
    };
  }, [nextEventIndex]);

  const handleDateClick = (dateStr) => {
    const eventElement = eventRefs.current[dateStr];
    if (eventElement && eventsListRef.current) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add a brief highlight effect
      eventElement.classList.add('bg-purple-100');
      setTimeout(() => {
        eventElement.classList.remove('bg-purple-100');
      }, 1500);
    }
  };

  return (
    <div className="mt-12 bg-white p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
        Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200" style={{ height: '1000px' }}>
          <Calendar events={events} onDateClick={handleDateClick} />
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200" style={{ height: '1000px' }}>
          <div ref={eventsListRef} className="overflow-y-auto p-4 space-y-6" style={{ maxHeight: '1000px' }}>
            {sortedEvents.map((event) => (
              <div
                key={event.id}
                ref={el => eventRefs.current[event.date] = el}
                className={`bg-gray-50 rounded-lg p-5 transition-all duration-300
                  ${event.isPast ? 'opacity-50' : 'opacity-100'}`}
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {event.title}
                  {event.isPast && (
                    <span className="ml-2 text-sm font-normal text-gray-500">
                      (Past Event)
                    </span>
                  )}
                </h3>
                <div className="text-gray-600 mb-2">
                  <p>{event.date} • {event.time}</p>
                  <p>{event.location}</p>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                {event.registrationLink && !event.isPast && (
                  <a
                    href={event.registrationLink}
                    className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Register
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 