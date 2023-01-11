import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableInner from './TableInner'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../App.css'

function createData(act, rr, ttl) {
    return {
      act,
      rr,
      ttl
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow className="removing" sx={{ '& > *': { borderBottom: 'unset',paddingLeft:'50px' } }}>
                <TableCell component="th" scope="row" align="left" style={{width:115}}>
                    <div style={{display:'flex',alignItems:'center', width:31}}>
                        <p>⎯⎯⎯⎯⎯</p>
                        <Checkbox />
                    </div>
                </TableCell>
                <TableCell style={{ width: 270 }} align="left">{row.act}</TableCell>
                <TableCell align="left" style={{ width: 306 }}>{row.rr}</TableCell>
                <TableCell align="left">{row.ttl}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        align="right"
                        onClick={() => setOpen(!open)
                        }
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow style={{ paddingBottom: 0, paddingTop: 0, marginLeft: '50px' }}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 ,paddingLeft:'51px',marginLeft:'1px' ,borderLeft:'0.7px solid black'}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <TableInner/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
const rows = [
    createData('Activity 1', 567.80, '₹ 2986792'),
    createData('Activity 2', 567.80, '₹ 2986792'),
    createData('Activity 3', 567.80, '₹ 2986792'),
    createData('Activity 4', 567.80, '₹ 2986792'),
];

export default function CollapsibeTableinside() {
    return (
        <TableContainer >
            <Table aria-label="collapsible table" style={{borderBottom:'0px'}} sx={{
                [`& .${tableCellClasses.root}`]: {
                    borderBottom: "none",
                    padding:"0",
                }
            }}>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}