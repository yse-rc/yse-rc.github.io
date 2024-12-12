import { useEffect, useRef } from 'react';
import { events } from '../../../data/events';
import { Calendar } from './Calendar';
import externalLinkIcon from '/src/assets/images/external-link.png';

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <Calendar events={events} onDateClick={handleDateClick} />
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div ref={eventsListRef} className="overflow-y-auto p-4 space-y-6" style={{ maxHeight: '80vh' }}>
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
                  <p>
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 19h14M5 15h14M5 7h14" />
                      </svg>
                      {event.date} • {event.time}
                    </span>
                  </p>
                  <p>
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z" />
                      </svg>
                      {event.location}
                    </span>
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  <span className="font-bold text-purple-600">{event.description.split(']')[0]}]</span>
                  {event.description.slice(event.description.indexOf(']') + 1)}
                </p>
                {event.registrationLink && !event.isPast && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors hover:bg-white hover:text-purple-600 border border-purple-600 group"
                  >
                    Register
                    <img 
                      src={externalLinkIcon}
                      alt="External link" 
                      className="w-4 h-4 filter brightness-0 invert group-hover:invert-0 group-hover:brightness-100"
                    />
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