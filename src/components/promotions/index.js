import { useEffect, useRef, useState } from "react"
import { Box } from "@mui/system";
import { Slide } from "@mui/material";

import { MessengerText, PromotionsContainer } from "../../styles/promotions"

const messenges = [
    "20% off on your second order!",
    'Tet 2024 sale starts now, visit any store',
    'Please like and share my pages to get 10% discount!'
]

export default function Promotions () {
    const containerRef = useRef()
    const [messengerIndex, setMessengerIndex] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setShow(false)
        }, 3000);

        const intervalId = setInterval(()=>{
            setMessengerIndex(i => ( i + 1 ) % messenges.length)
            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 3000);
        }, 4000)

        return () => {
            clearInterval(intervalId)
            setShow(false)
        }
    }, [])

    return (
    <PromotionsContainer ref={containerRef}>
        <Slide 
            container={containerRef.current}
            direction={show ? 'left' : 'right'} in={show}
             timeout={{
                enter: 500,
                exit: 100
            }}
        >
            <Box 
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}

            >
                <MessengerText>
                    {messenges[messengerIndex]}
                </MessengerText>
            </Box>
        </Slide>
    </PromotionsContainer>
    )
}