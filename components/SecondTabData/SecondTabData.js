import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SecondTabData() {
    return (
        <TableContainer className='rounded-xl' component={Paper}>
            <Table >
                <TableBody sx={{ backgroundColor: '#242731' }}>
                    {rows.map((row) => (
                        <TableRow className='grid grid-cols-4'
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ color: 'white' }} component="th" scope="row">{row.name}</TableCell>
                            <TableCell sx={{ color: 'white' }} align="center">{row.calories}</TableCell>
                            <TableCell sx={{ color: 'white' }} align="center">{row.fat}</TableCell>
                            <TableCell sx={{ color: 'white' }} align="center">{row.carbs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}