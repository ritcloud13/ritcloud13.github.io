import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function Artifacts() {
    return (

        <Stack
            alignItems="center" spacing={3}>
                <Typography variant="body1" gutterBottom display="hidden">
            Each team member is responsible for estimating and reporting time/effort worked on project activities. 
            The time/effort worked is aggregated for the entire team and also reported. 
            Project artifacts, such as development methodology, product/process metrics, and domain model are displayed on the website for visibility. 
        </Typography>
            <Typography variant="h4" align="center" gutterBottom>
                Team Time Tracking
            </Typography>
            <iframe title="timeTracking" width="100%" height="500"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUX9bb6CrPwsL5qSIGy7Nz0drSNF77nWHiPysF3KN-R1ueufCT9SF3xPCI-kmSOvhQqWcooi_Pi3_j/pubhtml?widget=true&amp;headers=false" />
            <Divider />
            <Typography variant="h4" align="center" gutterBottom>
                4-Ups
            </Typography>
            <iframe title="4ups" width="100%" height="500"
                src="https://docs.google.com/document/d/e/2PACX-1vR5JUTYHJtBAyEXA_rxJ37jOxgBTUyS-AGHF3BYd-JvwKCLR41XPTrdvclGCaWtsK8RBsswG-z7cbj0/pub?embedded=true"/> 
            <Typography variant="h4" gutterBottom>
            </Typography>     
        </Stack>
    );
}

export default Artifacts