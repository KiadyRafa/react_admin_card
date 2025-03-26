import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography, Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Pays', width: 200 },
  { field: 'code', headerName: 'Code', width: 100 },
];

export const CountriesList = () => {
  const countries = [
    { id: 1, name: 'France', code: 'FR' },
    { id: 2, name: 'Belgique', code: 'BE' },
  ];

  return (
    <Box sx={{ p: 3, height: 400 }}>
      <Typography variant="h4" gutterBottom>
        Pays
      </Typography>
      <DataGrid
        rows={countries}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Box>
  );
};