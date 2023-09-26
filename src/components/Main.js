import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import PersonCard from './PersonCard';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar'


function Main() {
  return (
    <Stack
      alignItems="center" spacing={3}>
      <Typography variant="h3" align="center" gutterBottom>
        Managing Maintenance Workflow App
      </Typography>
      <Chip variant="outlined" label="Lockheed Martin"
        avatar={<Avatar src="https://companieslogo.com/img/orig/LMT-db3de619.png?t=1647951659" />}
        sx={{ marginBottom: '10px' }} />
      <Typography variant="h4" gutterBottom>
        Project Synopsis
      </Typography>
      <Typography variant="body1" gutterBottom>
        Developed for Lockheed Martin, this responsive web application is used to manage and showcase
        the workflow of maintenance requests for products, typically IT licenses. Owners of
        maintenance requests will be able to import requests from existing CSV Files or manually
        input the data. Relevant users will be notified of upcoming maintenance requests via email.
        The notification cadence is configurable to the organization’s needs, but a default frequency
        is provided to each request. These users may be able to track and approve budgets. Reports
        can be generated on budgets, actual amount paid, and outstanding costs that owners and/or
        owning managers are responsible for. These reports potentially aid in cost analysis and
        budgeting for the department. The project is created leveraging AWS services into a
        deployment pipeline that aims to automate maintenance tracking empowering a more efficient
        process.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Team Members and Coach
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <PersonCard name="Aby Tiet" role="Sponsors Communications Lead"
            linkedin="https://www.linkedin.com/in/abytiet/"
            email="mailto:adt6635@rit.edu" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PersonCard name="Addo Davies Jr." role="Back End Lead"
            linkedin="https://www.linkedin.com/in/addo-davies-jr/"
            email="mailto:asd1520@rit.edu" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <PersonCard name="Annie Tiet" role="Front End Lead / Website Manager"
            linkedin="https://www.linkedin.com/in/annietiet/"
            email="mailto:adt6389@rit.edu" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <PersonCard name="Nikkia Theodule" role="Scrum Master"
            linkedin="https://www.linkedin.com/in/nikkia-theodule/"
            email="mailto:njt7621@rit.edu" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <PersonCard name="Saranya Dadi" role="Project Manager"
            linkedin="https://www.linkedin.com/in/saranyadadi/"
            email="mailto:sd1259@rit.edu" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          <PersonCard name="Kenn Martinez" role="Faculty Coach"
            linkedin="https://www.linkedin.com/in/kennmartinez/"
            email="mailto:kbmvse@rit.edu" />
        </Grid>
      </Grid>
      <Typography variant="h4" gutterBottom>
      </Typography>
    </Stack>
  );
}

export default Main