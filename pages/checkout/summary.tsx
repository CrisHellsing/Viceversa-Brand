import { Link, Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link';

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de la orden' pageDescription={'Resumen de la orden'} >
        <Typography variant="h1" component='h1' > Resumen de la orden </Typography>

        <Grid container>
            
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList/>
            </Grid>

            <Grid item xs={ 12 } sm={ 5 }>
                <Card className="summary-card">
                    <CardContent>
                        <Typography variant='h2'> Resumen (3 productos) </Typography>
                        <Divider sx={{ my: 1}} />
                      
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/adress' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <Typography>Cristian Cortes</Typography>
                        <Typography>323 Algun lugar</Typography>
                        <Typography>Samuel m. de los santos 303</Typography>
                        <Typography>México</Typography>
                        <Typography>+52 4493701147</Typography>

                        <Divider sx={{ my: 1}} />

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary/>

                        <Box sx={{ mt: 3}}>
                            <Button color='secondary' className='circular-btn' fullWidth >
                                Confirmar Orden
                            </Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage