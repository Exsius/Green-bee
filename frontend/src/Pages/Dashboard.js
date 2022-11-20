import { Divider, Grow, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'

import { Panel } from '../Components/Panel.js'
import { useAuth } from '../Context/UserContext.js'
import { CardSwiper } from 'react-card-rotate-swiper'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';

const Dashboard = () => {

    const { userInfo } = useAuth()
    const [userProfile, setUserProfile] = useState()
    const [newCard, setNewCard] = useState(true)

    useEffect(() => {
        setUserProfile(userInfo)
    }, [userInfo])

    const handleSwipe = (e) => {
        console.log(e)
        setNewCard(false)
        setTimeout(() => {
            setNewCard(true);
        }, 380);
    }

    const cardData = [
        {
            pic: 'https://cdn.shopify.com/s/files/1/0269/9644/1191/files/Secondhand_Shopping_2048x2048.jpg?v=1628535295',
            name: '17th Avenue Thrift Store',
            distance: '5.6 km',
            address: '2631 17 Ave SW, Calgary, AB T3E 0A5',
            desc: 'Old-school, fresh farmer produce is provided in an indoor marketplace with over 75 local vendors offering produce, flowers, crafts & more.'
        },
        {
            pic: 'https://currentboutique.com/blogs/cravingcurrent/what-s-the-difference-between-a-thrift-shop-and-a-consignment-store',
            name: '17th Avenue Thrift Store',
            distance: '5.6 km',
            address: '2631 17 Ave SW, Calgary, AB T3E 0A5',
            desc: 'Old-school, fresh farmer produce is provided in an indoor marketplace with over 75 local vendors offering produce, flowers, crafts & more.'
        },
        {
            pic: 'https://currentboutique.com/blogs/cravingcurrent/what-s-the-difference-between-a-thrift-shop-and-a-consignment-store',
            name: '17th Avenue Thrift Store',
            distance: '5.6 km',
            address: '2631 17 Ave SW, Calgary, AB T3E 0A5',
            desc: 'Old-school, fresh farmer produce is provided in an indoor marketplace with over 75 local vendors offering produce, flowers, crafts & more.'
        },
        {
            pic: 'https://currentboutique.com/blogs/cravingcurrent/what-s-the-difference-between-a-thrift-shop-and-a-consignment-store',
            name: '17th Avenue Thrift Store',
            distance: '5.6 km',
            address: '2631 17 Ave SW, Calgary, AB T3E 0A5',
            desc: 'Old-school, fresh farmer produce is provided in an indoor marketplace with over 75 local vendors offering produce, flowers, crafts & more.'
        },
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
        sx={{ backgroundColor: 'secondary.main', width: '100%', height: '100%', overflow: 'hidden' }}
        >
            {cardData.map((card) => (
                <Grow in={newCard}>
                    <Box
                    // paddingBottom='16px'
                    >
                        <CardSwiper
                            onSwipe={handleSwipe}
                            contents={  
                                <Paper
                                sx={{ margin: '0px 24px 0px 24px', padding: '16px', height: '490px', borderRadius: '24px', overflowY: 'scroll' }}
                                >                      
                                    <Stack
                                    spacing={0}
                                    >
                                        <Paper
                                        sx={{ backgroundColor: 'transparent', width: '307px', borderRadius: '24px' }} style={imageContainerStyle} elevation={4}
                                        >
                                            <img src={card.pic} alt={card.name} style={imageStyle} />
                                        </Paper> 
                                        <Stack
                                        paddingTop='12px'
                                        direction='row'
                                        >
                                            <LocationOnIcon />
                                            <Typography
                                            paddingLeft='6px'
                                            variant='h6'
                                            >
                                                {card.distance}
                                            </Typography>
                                        </Stack>
                                        <Stack
                                        
                                        direction='row'
                                        alignItems='center'
                                        >
                                            <MapIcon 
                                            sx={{ fontSize: 40 }}
                                            />
                                            <Stack
                                            paddingLeft='12px'
                                            >
                                                <Typography
                                                variant='subtitle1'
                                                >
                                                    {card.name}
                                                </Typography>
                                                <Typography
                                                variant='caption'
                                                >
                                                    {card.address}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Divider 
                                    sx={{ paddingY: '8px' }}
                                    />
                                    <Typography
                                    variant='subtitle1'
                                    >
                                        {card.desc}
                                    </Typography>
                                </Paper>
                            }
                        />
                    </Box>
                </Grow>
            ))}
        </Box>
    )
}

export default Dashboard