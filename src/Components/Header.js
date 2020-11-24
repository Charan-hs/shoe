import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className="" >
            <AppBar position="static" color="transparent" className="appContainer">
                <Toolbar variant="regular" className="headContainer">
                    <div className="logo-container">
                        <IconButton edge="start" className="" color="inherit" aria-label="menu" >
                            {/* <img src={require('../nike.png').default} className="logo" /> */}
                            <svg class="pre-logo-svg" height="60px" width="60px" fill="#111" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
                        </IconButton>
                    </div>
                    <div>
                        <Typography variant="h6" color="inherit">
                            Men
                        </Typography>
                    </div>
                    <div>
                        <IconButton>
                            <Badge badgeContent={41} max={9} color="secondary" >

                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PermIdentityOutlinedIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
