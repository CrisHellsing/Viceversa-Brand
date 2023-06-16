import React from 'react'
import { AuthLayout } from '../../components/layouts'
import { Box, Button, Divider, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Link, TextField, Typography } from '@mui/material'
import NextLink from 'next/link';

const RegisterPage = () => {
  return (
    <AuthLayout title={'Registrar'}>
        <Box sx={{ width: 450, padding:'10% 20px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component="h1">Crear cuenta</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField label="Nombre Completo" variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Correo" variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Contraseña" type='password' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Confirmar Contraseña" type='password' variant='filled' fullWidth/>
                </Grid>

                <Grid item xs={12}>
                    <Button color="secondary" className='circular-btn' size='large' fullWidth>
                        Registrar
                    </Button>
                </Grid>

                <Grid item xs={12} display='flex' justifyContent='end'>
                    <NextLink href="/auth/login" passHref>
                        <Link underline='always' sx={{color: 'black'}}>
                            ¿Ya tienes cuenta?
                        </Link>
                    </NextLink>
                </Grid>

            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage
