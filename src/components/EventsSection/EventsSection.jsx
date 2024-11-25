import { events } from '../../data/events';
import { Calendar } from './Calendar';

export const EventsSection = () => {
  return (
    <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border-2 border-purple-400">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">
        Events
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Events List Column */}
        <div className="overflow-y-auto max-h-[400px] pr-2 space-y-6">
          {events.map(event => (
            <div
              key={event.id}
              className="bg-gray-50 rounded-lg p-5 border border-gray-100"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {event.title}
              </h3>
              <div className="text-gray-600 mb-2">
                <p>{event.date} • {event.time}</p>
                <p>{event.location}</p>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              {event.registrationLink && (
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
          <Calendar events={events} />
        </div>
      </div>
    </div>
  );
}; 