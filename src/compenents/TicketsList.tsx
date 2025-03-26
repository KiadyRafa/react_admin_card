import { Typography, Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export const TicketsList = () => {
  // Données factices - à remplacer par vos données réelles
  const tickets = [
    { id: 1, event: "Concert de Jazz", buyer: "Jean Dupont", price: "45.00", date: "2023-06-15" },
    { id: 2, event: "Festival Rock", buyer: "Marie Martin", price: "60.00", date: "2023-07-20" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gestion des Billets
      </Typography>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Événement</TableCell>
            <TableCell>Acheteur</TableCell>
            <TableCell>Prix</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.event}</TableCell>
              <TableCell>{ticket.buyer}</TableCell>
              <TableCell>{ticket.price} €</TableCell>
              <TableCell>{ticket.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};