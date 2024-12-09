import { useEffect, useRef } from 'react';
import { events } from '../../../data/events';
import { Calendar } from './Calendar';

export const EventsSection = () => {
  const eventsListRef = useRef(null);

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
    if (eventsListRef.current && nextEventIndex !== -1) {
      // Instead of using scrollIntoView, directly set the scrollTop property
      const container = eventsListRef.current;
      const eventElement = container.children[nextEventIndex];
      
      if (eventElement) {
        container.scrollTop = eventElement.offsetTop - container.offsetTop;
      }
    }
  }, []); // Run only once on mount

  return (
    <div className="mt-12 bg-white p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3 text-center">
        Events
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Events List Column */}
        <div 
          ref={eventsListRef}
          className="overflow-y-auto max-h-[400px] pr-2 space-y-6"
        >
          {sortedEvents.map(event => (
            <div
              key={event.id}
              className={`bg-gray-50 rounded-lg p-5 transition-opacity
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
        {/* Calendar Column */}
        <div className="lg:col-span-1">
          <Calendar events={sortedEvents} />
        </div>
      </div>
    </div>
  );
}; 