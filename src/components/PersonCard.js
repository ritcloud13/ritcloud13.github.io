import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function PersonCard(props) {
    return (
        <Card sx={{ minWidth: '250px', backgroundColor: "#fcfcfc" }} align="left">
            <CardHeader
                avatar={
                    <Avatar src={props.avatar} />
                }
                action={
                    <div>
                        <IconButton sx={{ color: "#005bad" }} href={props.linkedin}><LinkedInIcon /></IconButton>
                        <IconButton sx={{ color: "#005bad" }} href={props.email}><EmailIcon /></IconButton>
                    </div>
                }
                title={props.name}
                subheader={props.role}
            />
        </Card>
    );
}