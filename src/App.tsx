import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { AdminSidebar } from './compenents/AdminSidebar';
import { EventsGrid } from './compenents/EventsGrid';
import { sampleEvents } from './data/events';
import jsonServerProvider from 'ra-data-json-server';
import { theme } from './styles/theme';
import { EventCard } from './compenents/EventCard';
import { Typography, Box } from '@mui/material';

const BasicList = () => (
  <Box sx={{ p: 3, backgroundColor: 'background.default', minHeight: '100vh' }}>
    <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', fontWeight: 'bold' }}>
      Liste
    </Typography>
    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
      Contenu à développer
    </Typography>
  </Box>
);

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const EventList = () => {
  return (
    <Box sx={{ 
      p: 3, 
      backgroundColor: 'background.default',
      minHeight: '100vh'
    }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontWeight: 'bold',
          color: 'primary.main',
          mb: 4
        }}
      >
        Gestion des Événements
      </Typography>
      <EventsGrid events={sampleEvents} />
    </Box>
  );
};

const App = () => {
  return (
    <Admin 
      theme={theme} 
      dataProvider={dataProvider}
      layout={({ children }) => (
        <Box sx={{ display: 'flex' }}>
          <AdminSidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: '240px', // Correspond à la largeur de la sidebar
              backgroundColor: 'background.default',
              minHeight: '100vh'
            }}
          >
            {children}
          </Box>
        </Box>
      )}
    >
      <Resource 
        name="events" 
        list={EventList}
        show={EventCard}
      />
      <Resource name="tickets" list={BasicList} />
      <Resource name="users" list={BasicList} />
      <Resource name="countries" list={BasicList} />
      <Resource name="venues" list={BasicList} />
      
      <CustomRoutes>
        <Route path="/reports" element={
          <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>Rapports</Typography>
            <Typography>Statistiques et analyses</Typography>
          </Box>
        } />
      </CustomRoutes>
    </Admin>
  );
};

export default App;