// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name,rollno,branch,totalmarks,obtainmarks) {
//   return { name,rollno,branch,totalmarks,obtainmarks };
// }

// const rows = [
//   createData('Frozen yoghurt', 1101,'cs', 1000, 800),
//   createData('Ice cream sandwich', 1102, 'CS', 1000,790),
//   createData('Eclair', 1103,'CS', 1000, 785),
//   createData('Cupcake', 1104, 'CS', 1000, 750),
//   createData('Gingerbread', 1105, 'CS', 1000, 755),
// ];

// export default function BasicTable() {
//   return (

//     <TableContainer component={Paper} >
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow style={{background:'gray'}}>
//             <TableCell align="center">Name</TableCell>
//             <TableCell align="center">Roll No.</TableCell>
//             <TableCell align="center">Branch</TableCell>
//             <TableCell align="center">Total Marks</TableCell>
//             <TableCell align="center">Obtain Marks</TableCell>
            
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
            
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell align="center" >{row.name}</TableCell>
//               <TableCell align="center">{row.rollno}</TableCell>
//               <TableCell align="center">{row.branch}</TableCell>
//               <TableCell align="center">{row.totalmarks}</TableCell>
//               <TableCell align="center">{row.obtainmarks}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
