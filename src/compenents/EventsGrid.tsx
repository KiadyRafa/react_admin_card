import { Grid } from '@mui/material';
import { EventCard } from './EventCard';
import { Event } from '../types/event';

interface EventsGridProps {
    events: Event[];
}

export const EventsGrid = ({ events }: EventsGridProps) => {
    return (
        <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }} // Espacement responsive
            sx={{
                padding: { xs: 2, sm: 3 }, // Marge intérieure
                justifyContent: 'center' 
            }}
        >
            {events.map((event) => (
                <Grid 
                    item 
                    key={event.id} 
                    xs={12} 
                    sm={6} 
                    md={4}
                    lg={3} // Ajout pour les grands écrans
                    sx={{
                        display: 'flex',
                        justifyContent: 'center', // Centrage horizontal
                        padding: '8px!important' // Marge interne
                    }}
                >
                    <EventCard event={event} />
                </Grid>
            ))}
        </Grid>
    );
};