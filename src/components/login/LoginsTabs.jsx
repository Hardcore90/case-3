import { useState } from "react";
import { Login } from "./Login"
import { Register } from "./Register"
import { Reset } from "./Reset"
import { Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";

export const LoginTabs = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return(
        <>
        <TabContext value={value}>
            <Box sx={{bottom: 1, borderColor: "divider"}}>
                <TabList onChange={handleChange} centred>
                    <Tab label="Вход" value='1' />
                    <Tab label="Регистрация" value='2' />
                    <Tab label="Сброс пароля" value='3' />
                </TabList>
            </Box>
            <TabPanel value="1"><Login/></TabPanel>
            <TabPanel value="2"><Register/></TabPanel>
            <TabPanel value="3"><Reset/></TabPanel>
            
            
            
            
        </TabContext>
        
        </>
    )
}