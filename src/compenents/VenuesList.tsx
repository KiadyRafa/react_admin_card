import { Typography, Box, Card, CardContent, Chip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const VenuesList = () => {
  const venues = [
    { id: 1, name: "Salle Pleyel", city: "Paris", capacity: 2000 },
    { id: 2, name: "Forest National", city: "Bruxelles", capacity: 8000 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Lieux d'événements
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        {venues.map((venue) => (
          <Card key={venue.id} sx={{ width: 300 }}>
            <CardContent>
              <Typography variant="h6">{venue.name}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                <Typography>{venue.city}</Typography>
              </Box>
              <Chip 
                label={`Capacité: ${venue.capacity}`} 
                size="small" 
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};