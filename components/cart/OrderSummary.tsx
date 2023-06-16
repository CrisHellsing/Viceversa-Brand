import { Grid, Typography } from "@mui/material"


export const OrderSummary = () => {
  return (
    <Grid container>
        
        {/* Numero de productos en elm carrito */}
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>

        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>

        {/* Subtotal a pagar */}
        <Grid item xs={6}>
            <Typography>SubTotal</Typography>
        </Grid>

        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `$${ 155.36 }` }</Typography>
        </Grid>

        {/* Calculo de impuestos */}
        <Grid item xs={6}>
            <Typography>Impuestos (15%)</Typography>
        </Grid>

        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `$${ 35.34 }` }</Typography>
        </Grid>

        {/* Total a pagar */}
        <Grid item xs={6} sx={{ mt:2 }}>
            <Typography variant='subtitle1'>Total:</Typography>
        </Grid>

        <Grid item xs={6} sx={{ mt:2 }} display='flex' justifyContent='end'>
            <Typography variant='subtitle1'>{ `$${ 190.34 }` }</Typography>
        </Grid>

    </Grid>
  )
}
