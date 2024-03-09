import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name,rollno, branch, sec) {
  return { name,rollno, branch, sec };
}

const rows = [
  createData('Swaroop','20131a05h0', 'cse', '3'),
  createData('likki','20131a05h3', 'cse', '3'),
  createData('Harry','20131a05d2', 'cse', '3'),
  createData('geetha','20131a05g5', 'cse', '3'),
  createData('yashu','20131a05g3', 'cse', '3'),
];

export default function StudentsTable({ allMarks }) {
  const navigate = useNavigate();

  const handleAcademicsClick = () => {
   navigate('/MarksVisibleScreen')
  };

  const handleSocialActivitiesClick = (name) => {
    // Handle Social Activities button click
    console.log(`Social Activities button clicked for ${name}`);
  };

  const handleFeedbackClick = (name) => {
    // Handle Feedback button click
    console.log(`Feedback button clicked for ${name}`);
  };

  return (
    <TableContainer component={Paper} style={{ maxWidth: '80%' }}>
      <Table aria-label="customized table" className='student_table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">RollNo</StyledTableCell>
            <StyledTableCell align="left">Branch</StyledTableCell>
            <StyledTableCell align="center">Section</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell> {/* Added Actions column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.rollno}</StyledTableCell>
              <StyledTableCell align="left">{row.branch}</StyledTableCell>
              <StyledTableCell align="center">{row.sec}</StyledTableCell>
              <StyledTableCell align="center">
                {/* Buttons for Academics, Social Activities, and Feedback */}
                <Button onClick={() => handleAcademicsClick()}>Academics</Button>
                <Button onClick={() => handleSocialActivitiesClick(row.name)}>Social Activities</Button>
                <Button onClick={() => handleFeedbackClick(row.name)}>Feedback</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
