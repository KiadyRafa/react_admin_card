import { Typography, Box, List, ListItem, ListItemText, Avatar } from '@mui/material';

export const UsersList = () => {
  // Données factices
  const users = [
    { id: 1, name: "Admin", email: "admin@example.com", role: "Administrateur" },
    { id: 2, name: "Vendeur", email: "seller@example.com", role: "Vendeur" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestion des Utilisateurs
      </Typography>
      
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Avatar sx={{ mr: 2 }}>{user.name.charAt(0)}</Avatar>
            <ListItemText 
              primary={user.name} 
              secondary={`${user.email} - ${user.role}`} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};