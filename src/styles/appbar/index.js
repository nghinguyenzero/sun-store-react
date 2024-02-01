import { IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Box } from "@mui/system";

import { Colors } from "../theme";
import "@fontsource/montez"

// Container
export const AppbarContainer = styled(Box)(()=>({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}))

// Header
export const AppbarHeader = styled(Typography)(()=>({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"Montez", "Cursive"',
    color: Colors.secondary
}))

export const Mylist = styled(List)(({type})=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent:'center',
    alignItems: 'center'
}))


export const  ActionIconsContainerMobile = styled(Box)(()=>({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`,
}))

export const ActionIconsContainerDesktop = styled(Box)(()=>({
    flexGrow: 0
    // display: 'flex',
    // background: Colors.shaft,
    // position: 'fixed',
    // bottom: 0,
    // left: 0,
    // width: '100%',
    // alignItems: 'center',
    // zIndex: 99,
    // borderTop: `1px solid ${Colors.border}`,
}))


export const DrawerCloseButton = styled(IconButton)(()=>({
    position: 'absolute',
     top: 10,
     left: '250px',
     zIndex: 1999
}))
