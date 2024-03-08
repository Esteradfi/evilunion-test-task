import {Box, Typography} from "@mui/material";
import Image from "next/image";

const Header = () => {
    return (
        <Box component={'header'}
             sx={{marginBottom: '55px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography component={"span"} sx={{
                p: 1,
                border: '1px solid #ffffff',
                fontSize: '0.75rem',
                display: 'inline-block',
                fontWeight: 500,
                fontFamily: "Raleway"
            }}>
                ПОКЕМОНЫ API
            </Typography>
            <Box sx={{display: 'flex'}}>
                <Image src={'/help.svg'} alt={'Клик'} width={24.25} height={30.66} priority={false}/>
                <Typography component={'span'} sx={{
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    maxWidth: '111px',
                    marginLeft: '10px',
                    fontFamily: "Raleway"
                }}>
                    Нажмите на нужного покемона
                </Typography>
            </Box>
        </Box>
    )
};

export default Header;