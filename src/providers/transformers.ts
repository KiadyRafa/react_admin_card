export const transformEventForBackend = (event: any) => ({
    title: event.title,
    descriptions: event.description,
    event_datetime: `${event.date.split('T')[0]} ${event.date.split('T')[1].slice(0, 5)}`,
    locations: event.location,
    organizer: event.organizer,
    category: event.category,
  });
  
  export const transformEventFromBackend = (event: any) => ({
    id: event.event_id || event.id,
    title: event.title,
    description: event.descriptions || event.description,
    date: event.event_datetime ? 
      `${new Date(event.event_datetime).toISOString().split('T')[0]}T${new Date(event.event_datetime).toTimeString().slice(0, 5)}` :
      `${event.date}T${event.time}`,
    location: event.locations || event.location,
    organizer: event.organizer,
    category: event.category,
    tickets: event.tickets || [],
    availableTickets: (event.tickets || []).filter((t: any) => t.available).length,
  });