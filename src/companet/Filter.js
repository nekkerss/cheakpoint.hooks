import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar({typeby,setTypeby,setFilterbyname}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        My shop
                    </Typography>
                    <Box sx={{ flexGrow: 1 ,display:'flex'}} > 
                    <Link to="/">
                        <Button sx={{color:'white'}}>HOMEE</Button></Link>
                        <Link to="/add">
                        <Button  sx={{color:'white'}}>ADD MOVIE</Button></Link>
                    </Box>
                    <FormControl sx={{width:300 ,paddingTop:3}}>
                        <InputLabel sx={{width:300 ,paddingTop:3}}  id="demo-simple-select-label">type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={typeby}
                            label="type"
                            onChange={(e) => setTypeby(e.target.value)}
                        >
                            <MenuItem value={""}>all</MenuItem>
                            <MenuItem value={"action"}>action</MenuItem>
                            <MenuItem value={"romance"}>romance</MenuItem>
                            <MenuItem value={"horror"}>horror</MenuItem>
                            {/* <MenuItem value={"highschool"}>highschool</MenuItem> */}
                        </Select><br />
                    </FormControl>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search by name"
                            inputProps={{ 'aria-label': 'search' }}
                            // value={filterByName}
                            onChange={(e) => setFilterbyname (e.target.value)}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}