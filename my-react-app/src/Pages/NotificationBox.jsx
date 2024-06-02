import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
//import { BiTime } from 'react-icons/bi';
export const NotificationBox=()=> {
    //const navigate = useNavigate(); // Initialize navigate function
    // Example list of driver names
    const driverList = ["Ahmed", "Khaled", "Mohammed", "Yassin"];
    const timeList = ["3:45", "5:50", "6:15", "1 min"];
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {driverList.map((driverName, index) => (
            <ListItem
                key={index}
                disableGutters
                secondaryAction={
                    <IconButton onClick={() => {   
                     }} aria-label="clock">
                        <CommentIcon />
                    </IconButton>
                }
            >
                <ListItemText primary={`Driver ${driverName} arrived at ${timeList[index]}`} />
            </ListItem>
        ))}
    </List>
    );
}