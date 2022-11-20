import { Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'

import { Panel } from '../Components/Panel.js'
import { useAuth } from '../Context/UserContext.js'
import { CardSwiper } from 'react-card-rotate-swiper'

function App() {
    const handleSwipe = (d) => {
        // fill this your callback
    }
}

const Dashboard = () => {

    const { userInfo } = useAuth()
    const [userProfile, setUserProfile] = useState()

    useEffect(() => {
        setUserProfile(userInfo)
    }, [userInfo])

    const data = [
        {
            pic: 'https://cdn.shopify.com/s/files/1/0269/9644/1191/files/Secondhand_Shopping_2048x2048.jpg?v=1628535295',
            name: '17th Avenue Thrift Store',
            distance: '5.6 km',
            address: '2631 17 Ave SW, Calgary, AB T3E 0A5',
            desc: 'Old-school, fresh farmer produce is provided in an indoor marketplace with over 75 local vendors offering produce, flowers, crafts & more.'
        }
    ]

    const imageContainerStyle = {
        flex: 1,
        overflow: 'hidden',
    }

    const imageStyle = {
        flex: 1,
        width: '100%',
        height: '275px',
        resizeMode: 'contain',
    }

    return(
        <Box
        sx={{ backgroundColor: 'secondary.main', width: '100%', height: '100%' }}
        >
            <div className='App'>
                <CardSwiper
                    // onSwipe={handleSwipe}
                    className={'ecoLocation'}
                    contents={  
                        <Paper
                        sx={{ margin: '0px 24px 0px 24px', padding: '16px', height: '615px', borderRadius: '24px' }}
                        >                      
                            <Stack
                            spacing={2}
                            >
                                <Paper
                                sx={{ backgroundColor: 'transparent', width: '307px', borderRadius: '24px' }} style={imageContainerStyle} elevation={4}
                                >
                                    <img src={data[0].pic} alt={data[0].name} style={imageStyle} />
                                </Paper> 
                                <Typography
                                >
                                    Place Titles
                                </Typography>
                            </Stack>
                        </Paper>
                    }
                />
            </div>
        </Box>
    )
}

export default Dashboard