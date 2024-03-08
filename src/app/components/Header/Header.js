import styles from "./Header.module.css";
import {Box} from "@mui/material";
import Image from "next/image";

const Header = () => {
    return (
        <Box component={'header'} className={styles.header}>
            <Box component={"h1"} sx={{ p: 1, border: '1px solid #ffffff', fontSize: '0.75rem', display: 'inline-block', fontWeight: 500 }}>
                ПОКЕМОНЫ API
            </Box>
            <Box sx={{display: 'flex'}}>
                <Image src={'/help.svg'} alt={'Клик'} width={24.25} height={30.66} />
                <Box component={'span'} sx={{fontWeight: 600, fontSize: '0.75rem', maxWidth: '111px', marginLeft: '10px'}}>
                    Нажмите на нужного покемона
                </Box>
            </Box>
        </Box>
    )
};

export default Header;