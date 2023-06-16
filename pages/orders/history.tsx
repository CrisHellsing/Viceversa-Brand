import { Chip, Grid, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams } from '@mui/x-data-grid'

import { ShopLayout } from '../../components/layouts'
import NextLink from 'next/link';


// interface Props {
//     params: GridValueGetterParams
// }

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullname', headerName: 'Nombre Completo', width: 300},

    { 
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra la información si esta pagada o no',
        width: 200,
        renderCell: (params: GridValueGetterParams) =>{
            return(
                params.row.paid
                    ? <Chip color='success' label="Pagada" variant='outlined'/>
                    : <Chip color='error' label="No pagada" variant='outlined'/>
            )
        } 
    },

    { 
        field: 'Orden',
        headerName: 'Orden',
        description: 'Guía de orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) =>{
            return(
                <NextLink href={`/orders/${ params.row.id }`} passHref>
                    <Link>
                        Ver orden
                    </Link>
                </NextLink>
            )
        } 
    },

];

const rows: GridRowsProp = [
    { id: 1, paid: true, fullname: 'Cristian Cortes' },
    { id: 2, paid: false, fullname: 'Atziry Justo' },
    { id: 3, paid: true, fullname: 'Maria Becerra' },
    { id: 4, paid: false, fullname: 'Melissa Cortes' },
    { id: 5, paid: false, fullname: 'Araceli cortes' },
    { id: 6, paid: true, fullname: 'Raul Viramontes' },
];

const HistoryPage = () => {
  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
        <Typography variant='h1' component='h1'>Historial de ordenes</Typography>

        <Grid container>
            <Grid item xs={12} sx={{ height:650, width: '100%' }}>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    pageSize={10}
                    rowsPerPageOptions={ [10] }
                />
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage