import React from 'react'
import { ShopLayout } from '../../components/layouts';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const AdressPage = () => {
  return (
    <ShopLayout title='Dirección' pageDescription='Confirmar dirección del destino' >
        <Typography variant="h1" component='h1'> Dirección </Typography>

        <Grid container spacing={ 2 } sx={{ mt: 2 }}>

            <Grid item xs={12} sm={6}>
                <TextField label='Nombre' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField label='Apellidos' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField label='Dirección' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField label='Dirección 2 (opcional)' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField label='Código Postal' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField label='Ciudad' variant="filled" fullWidth />
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel>País</InputLabel>
                    <Select
                        variant="filled"
                        label='País'
                        // value={1}
                    >
                        <MenuItem value=""><em> </em></MenuItem>
                        <MenuItem value={1}>Costa Rica</MenuItem>
                        <MenuItem value={2}>México</MenuItem>
                        <MenuItem value={3}>Puerto Rico</MenuItem>
                        <MenuItem value={4}>Canáda</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField label='Teléfono' variant="filled" fullWidth />
            </Grid>

        </Grid>

        <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
            <Button color="secondary" className='circular-btn' size="large">
                Revisar pedido
            </Button>
        </Box>
        
    </ShopLayout>
  )
}

export default AdressPage