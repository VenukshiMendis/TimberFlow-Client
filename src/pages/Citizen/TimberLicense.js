import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, getTypographyUtilityClass } from '@mui/material';
import { grey } from '@mui/material/colors';

const TimberLicense= () => {
  const gramaDivisions = [
    'Morawinna',
    'Walana',
    'Seeduwa',
    'Mahavila',
    'Mahabellana'

  ];

  const dsDivisions = [
    'Panadura',
    'Bandaragama',
    'Horana',
    'Wadduwa'
  ]

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        margin: 10,
        padding: 5,
        borderRadius: 8, 
        boxShadow: 3,
      }}
      noValidate
      autoComplete="off"
    >
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <Typography
                    fontSize={"1.8rem"}
                    fontWeight="bold"
                    marginBottom={"30px"}
                    textTransform={'capitalize'}
                    >
                    Requesting permission to cut dangerous jackfruit, palm or coconut Trees
            </Typography>
        </Box>
   
        <Typography 
            variant="h6" 
            margin={1} 
            marginBottom={"10px"}  
            color={grey[900]}
            >
            Details of the applicant
        </Typography>
        <Grid
                container
                spacing={2}
                display={"flex"}
                flexDirection={"row"}
              >
            <Grid item xs={6}>
                <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue="Nimal Perera"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                required
                id="outlined-required"
                label="NIC"
                defaultValue="8757383636"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                required
                id="outlined-required"
                label="Mobile Number"
                defaultValue="0711765469"
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
                />
            </Grid>
        </Grid>
        
        <Typography 
            variant="h6" 
            margin={1} 
            marginBottom={"20px"}  
            color={grey[900]}
            >
            Details of the trees requesting to be cut
        </Typography>
        <TableContainer component={Paper} sx={{margin:1, marginBottom:4}}>
            <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor : grey[400] , alignContent:'center'}}>
                <TableRow >
                    <TableCell colSpan={1} align='center'> No </TableCell>
                    <TableCell colSpan={2} align='center'> Type of Tree </TableCell>
                    <TableCell colSpan={1} align='center'> Circumference (m) </TableCell>
                    <TableCell colSpan={1} align='center'> Height (m) </TableCell>
                    <TableCell colSpan={5} align='center'> Reason to be considered as dangerous </TableCell>
                </TableRow>
                </TableHead>
                <TableBody sx={{  backgroundColor : grey[100] }}>
                <TableRow>
                    <TableCell colSpan={1}> 1 </TableCell>
                    <TableCell colSpan={2}> 
                      <TextField
                        id="outlined-required"
                        fullWidth
                        />
                    </TableCell>
                    <TableCell colSpan={1}>
                      <TextField
                          id="outlined-required"
                          fullWidth
                          />
                    </TableCell>
                    <TableCell colSpan={1}> 
                      <TextField
                          id="outlined-required"
                          fullWidth
                          />
                    </TableCell>
                    <TableCell colSpan={5}> 
                      <TextField
                          id="outlined-required"
                          fullWidth
                          />
                      </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={1}> 2 </TableCell>
                    <TableCell colSpan={2}> 
                      <TextField
                        id="outlined-required"
                        fullWidth
                        />
                    </TableCell>
                    <TableCell colSpan={1}>
                      <TextField
                          id="outlined-required"
                          fullWidth
                          />
                    </TableCell>
                    <TableCell colSpan={1}> 
                      <TextField
                          id="outlined-required"
                          fullWidth
                          />
                    </TableCell>
                    <TableCell colSpan={5}> 
                      <TextField
                          id="outlined-required"
                          fullWidth
                          />
                      </TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

        <Typography 
            variant="h6" 
            margin={1} 
            marginBottom={"10px"}  
            color={grey[900]}
            >
            Details of the land where the above mentioned trees are located
        </Typography>
        <Grid
                container
                spacing={1}
                display={"flex"}
                flexDirection={"row"}
              >
            <Grid item xs={6}>
                <TextField
                required
                id="outlined-required"
                label="Name of the land"
                fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                required
                id="outlined-required"
                label="Address of the land "
                fullWidth
                />
            </Grid>
            
            <Grid item xs={6} >
            <FormControl fullWidth>
              <InputLabel>Ownership of the land</InputLabel>
              <Select
                label="Ownership of the land"
                fullWidth
              >
                <MenuItem key={1} value="Deed">
                Deed
                </MenuItem>
                <MenuItem key={2} value="Grant Certificate">
                Grant Certificate
                </MenuItem>
                <MenuItem key={2} value="Power of Attorney">
                Power of Attorney
                </MenuItem>
                <MenuItem key={2} value="Joint Ownership Number">
                Joint Ownership Number
                </MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                required
                id="outlined-required"
                label="Deed / Grant Certificate / Power of Attorney / Joint Ownership Number"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Grama Division</InputLabel>
              <Select label="Grama Division" fullWidth>
                {gramaDivisions.map((division, index) => (
                  <MenuItem key={index} value={division}>
                    {division}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Divisional Secretariat Division</InputLabel>
              <Select label="Divisional Secretariat Division" fullWidth>
                {dsDivisions.map((division, index) => (
                  <MenuItem key={index} value={division}>
                    {division}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
        </Grid>
      <Box marginTop={5} display="flex" alignItems="center">
          <Checkbox required />
          <Typography paddingTop={2} color={'red'}>
            I hereby declare that all the information I have provided in this document is true and accurate to the best of my knowledge. Furthermore, I affirm that I am the rightful owner of the aforementioned property and have full legal authority to make decisions regarding it.
          </Typography>
      </Box>
    </Box>
  );
}

export default TimberLicense