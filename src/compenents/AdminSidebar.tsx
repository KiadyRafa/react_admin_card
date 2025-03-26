import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Event as EventIcon,
  ConfirmationNumber as TicketIcon,
  People as UserIcon,
  Public as CountryIcon,
  Place as VenueIcon,
  Assessment as ReportIcon
} from '@mui/icons-material';

export const AdminSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#1e293b',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Admin Billetterie
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
      <List>
        {[
          { text: 'Événements', icon: <EventIcon />, path: '/events' },
          { text: 'Billets', icon: <TicketIcon />, path: '/tickets' },
          { text: 'Utilisateurs', icon: <UserIcon />, path: '/users' },
          { text: 'Pays', icon: <CountryIcon />, path: '/countries' },
          { text: 'Lieux', icon: <VenueIcon />, path: '/venues' },
          { text: 'Rapports', icon: <ReportIcon />, path: '/reports' },
        ].map((item) => (
          <ListItem 
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};