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
            Project artifacts, such as weekly 4 ups, domain model, methodology and metrics, and final project plan are displayed on the website for visibility. 
        </Typography>
            <Typography variant="h4" align="center" gutterBottom>
                Team Time Tracking
            </Typography>
            <iframe title="timeTracking" width="100%" height="500"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSk5hVQjOallX4PqnrDeqTHdPJrknarVFaakokTYEBS8BU6c78OHhdWDhMlJAYeWg5HH5QwpdXm-MLu/pubhtml?widget=true&amp;headers=false"/>
            <Divider />
            <Typography variant="h4" align="center" gutterBottom>
                4 Ups
            </Typography>
            <iframe title="4ups" width="100%" height="500"
                src="https://docs.google.com/document/d/e/2PACX-1vR5JUTYHJtBAyEXA_rxJ37jOxgBTUyS-AGHF3BYd-JvwKCLR41XPTrdvclGCaWtsK8RBsswG-z7cbj0/pub?embedded=true"/> 
            <Divider />
            <Typography variant="h4" align="center" gutterBottom>
                Domain Model
            </Typography>
            <iframe title="domainModel" width="100%" height="500"
                src="https://viewer.diagrams.net/?highlight=0000FF&nav=1#G1vm9o0tgjrCtWAT8DncvX7knmjUxSO7jP"/>
            <Divider />
            <Typography variant="h4" align="center" gutterBottom>
                Methodology and Metrics
            </Typography>
            <iframe title="methodologyMetrics" width="100%" height="500"
                src="/ProjectMethodology.pdf"/>
            <Divider />
            <Typography variant="h4" align="center" gutterBottom>
                Final Project Plan
            </Typography>
            <iframe title="methodologyMetrics" width="100%" height="500"
                src="/FinalProjectPlan.pdf"/> 
            <Typography variant="h4" align="center" gutterBottom>
            </Typography> 
        </Stack>
    );
}

export default Artifacts