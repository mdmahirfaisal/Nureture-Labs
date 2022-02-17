import { Box, Button, ListItem } from '@mui/material';
import React from 'react'

export const SideBarItem = (props) => {
    const { href, icon, title, setPanel } = props;
    const active = href ? "" : false;

    return (
        <ListItem
            disableGutters
            sx={{ display: 'flex', mb: 0.5, py: 0, px: 2 }}>

            <Button onClick={() => setPanel(href)}
                component="a"
                startIcon={icon}
                disableRipple
                sx={{
                    backgroundColor: active && 'rgba(255,255,255, 0.08)',
                    borderRadius: '12px',
                    color: active ? 'secondary.main' : '#808191',
                    fontWeight: active && 'fontWeightBold',
                    justifyContent: 'flex-start',
                    px: 3,
                    textAlign: 'left',
                    textTransform: 'none',
                    width: '100%',
                    '& .MuiButton-startIcon': {
                        color: active ? 'secondary.main' : 'neutral.400'
                    },
                    '&:hover': {
                        backgroundColor: '#353945',
                        color: 'white'
                    }
                }}>
                <Box className='grow text-lg'>
                    {title}
                </Box>
            </Button>
        </ListItem>
    );
};
