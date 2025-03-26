import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { AdminSidebar } from './compenents/AdminSidebar';
import { EventsGrid } from './compenents/EventsGrid';
import { CountriesList } from './compenents/CountriesList';
import { TicketsList } from './compenents/TicketsList';
import { UsersList } from './compenents/UsersList';
import { VenuesList } from './compenents/VenuesList';
import { sampleEvents } from './data/events';
import jsonServerProvider from 'ra-data-json-server';
import { theme } from './styles/theme';
import { EventCard } from './compenents/EventCard';
import { Typography, Box } from '@mui/material';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const Dashboard = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      Tableau de bord
    </Typography>
    <Typography>
      Bienvenue dans l'administration de votre billetterie
    </Typography>
  </Box>
);

const ReportsPage = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      Rapports
    </Typography>
    <Typography>
      Statistiques et analyses des ventes
    </Typography>
  </Box>
);

const SettingsPage = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      Paramètres
    </Typography>
    <Typography>
      Configuration de l'application
    </Typography>
  </Box>
);

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
      dashboard={Dashboard}
      layout={({ children }) => (
        <Box sx={{ display: 'flex' }}>
          <AdminSidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              ml: '240px',
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
      <Resource name="tickets" list={TicketsList} />
      <Resource name="users" list={UsersList} />
      <Resource name="countries" list={CountriesList} />
      <Resource name="venues" list={VenuesList} />
      
      <CustomRoutes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </CustomRoutes>
    </Admin>
  );
};

export default App;