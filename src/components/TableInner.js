import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import '../App.css';
function createData(item, ttl) {
    return {
        item,
        ttl,
    };
}

function Row(props) {
    const { row } = props;
    return (
        <React.Fragment style={{marginLeft:'10px'}}>
            <TableRow className='removing' sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell style={{width:115}} component="th" scope="row">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p>⎯⎯⎯⎯⎯⎯</p>
                        <Checkbox />
                    </div>
                </TableCell>
                <TableCell style={{ width: 517 }} align="left">{row.item}</TableCell>
                <TableCell style={{ width: 250 }} align="left">{row.ttl}</TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
        </React.Fragment>
    );
}



const rows = [
    createData('Work Item 1', '₹ 2986792'),
    createData('Work Item 1', '₹ 2986792'),
    createData('Work Item 1', '₹ 2986792'),
];

export default function TableInner() {
    return (
        <TableContainer>
            <Table aria-label="collapsible table">
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}