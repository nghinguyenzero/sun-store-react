import { Badge, Box, Divider, ListItemButton, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import { Mylist, ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Colors } from "../../styles/theme";
// import useCart from "../../hooks/useCart";
import { useUIContext } from "../../context/ui";
import { useState } from "react";
import { useUser } from "../../context/ui/User";


export default function Actions ({matches, onLogin, onLogout}) {
    console.log('Actions',matches );
    const {cart, setShowCart } = useUIContext() 
    const { user } = useUser()
    const [anchorEl, setAnchorEl] = useState(null)
    const Component = matches 
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop
    return(
        <Component>
            <Mylist type='row'>
                    <ListItemButton
                        sx={{
                            justifyContent:'center'
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                display: 'flex',
                                justifyContent:'center',
                                color: matches && Colors.secondary
                            }}
                            onClick={()=> setShowCart(true)}
                        >
                            <Badge badgeContent={cart && cart.length} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider orientation="vertical" flexItem></Divider>
                    <ListItemButton
                        sx={{
                            justifyContent:'center'
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                display: 'flex',
                                justifyContent:'center',
                                color: matches && Colors.secondary
                            }}
                        >
                            <FavoriteIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider orientation="vertical" flexItem />
                    <ListItemButton
                        sx={{
                            justifyContent:'center'
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                display: 'flex',
                                justifyContent:'center',
                                color: matches && Colors.secondary
                            }}
                            onClick={(event)=>setAnchorEl(event.currentTarget)}
                        >
                            <Box display='flex' flexDirection='column'>
                                <PersonIcon/>
                                {
                                    user && <Typography variant="caption">
                                    {user.displayName}
                                </Typography>
                                }
                            </Box>
                        </ListItemIcon>
                    </ListItemButton>   
                    <Divider orientation="vertical" flexItem />
            </Mylist>
            <Menu
                anchorEl={anchorEl}
                open={anchorEl !== null}
                onClose={()=> setAnchorEl(null)}
            >
            {
                user ? <MenuItem onClick={onLogout}>Logout</MenuItem> 
                    : <MenuItem onClick={onLogin}>Login</MenuItem>
            }
            </Menu>
        </Component>
    )
}