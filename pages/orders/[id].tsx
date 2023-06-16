import { Link, Box, Button, Card, CardContent, Divider, Grid, Typography, Chip } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import NextLink from 'next/link';
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";

const OrderPage = () => {
    return (
        <ShopLayout title='Resumen de la orden 132454432' pageDescription={'Resumen de la orden'} >
            <Typography variant="h1" component='h1' > Orden: ABC123 </Typography>

            {/*<Chip
            sx={{my: 2}}
            label="Pendiente de pago"
            variant='outlined'
            color="error"
            icon={ <CreditCardOffOutlined/> }
        />*/}

            <Chip
                sx={{ my: 2 }}
                label="Pagado"
                variant='outlined'
                color="success"
                icon={<CreditScoreOutlined />}
            />

            <Grid container>

                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant='h2'> Resumen (3 productos) </Typography>
                            <Divider sx={{ my: 1 }} />

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

                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <h1>Pagar</h1>
                            </Box>

                            <Chip
                                sx={{ my: 2 }}
                                label="Pagado"
                                variant='outlined'
                                color="success"
                                icon={<CreditScoreOutlined />}
                            />

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default OrderPage
