import { Avatar, Divider, List, ListItem, ListItemButton, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'

import { Panel } from '../Components/Panel.js'
import { useAuth } from '../Context/UserContext.js'

const Interests = () => {

    const { userInfo } = useAuth()

    const userInterests = [
        {
            name: 'titletitletitletitletitle',
            desc: 'description',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'titletitletitletitletitle',
            desc: 'description',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'titletitletitletitletitle',
            desc: 'description',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'titletitletitletitletitle',
            desc: 'description',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'titletitletitletitletitle',
            desc: 'description',
            distance: '15km',
            img: 'img'
        },
        {
            name: 'title',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            distance: '15km',
            img: 'img'
        },
    ]

    return(
        <Box
        sx={{ backgroundColor: 'secondary.main', width: '100%', height: '100%' }}
        >
            <Paper
            sx={{ margin: '0px 24px 0px 24px', padding: '16px', height: '490px', borderRadius: '24px', overflowY: 'scroll' }}
            >
                <List>
                    {userInterests.map((interest) => (
                        <>
                            <ListItemButton
                            sx={{ padding: '0px' }}
                            >
                                <Stack
                                direction='row'
                                sx={{ width: '100%', maxHeight: '120px', justifyContent: 'space-between', alignItems: 'center' }}
                                onClick={() => {}}
                                >
                                    <Avatar src={interest.img}/>
                                    <Stack
                                    flexGrow={1}
                                    sx={{ padding: '8px 32px' }}
                                    >
                                        <Typography variant='h6'>{(interest.name).slice(0, 24)}</Typography>
                                        <Typography variant='subtitle2'>{(interest.desc).split(' ').slice(0, 6).join(' ')}</Typography>
                                    </Stack>
                                    <Typography>{interest.distance}</Typography>
                                </Stack>
                            </ListItemButton>
                            <Divider/>
                        </>
                    ))}
                </List>
            </Paper>
        </Box>
    )
}

export default Interests