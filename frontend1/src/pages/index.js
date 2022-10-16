import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { Applications } from '../components/dashboard/applications';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { formatDistanceToNow, subHours, format, parseISO } from 'date-fns';
import { v4 as uuid } from 'uuid';


const Page = () => {
  const [jobs, setJobs] = useState([])

  const fetchData = async () => {
    axios.get("http://localhost:5000/jobs").then((response) => {
      console.log("Sh" + response)
      setJobs(response.data)
    }).catch(error =>  console.error("Error " + error));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (<>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Applications sx={{ height: '100%' }} titleToShow="Applied jobs" jobs={jobs} status={['APPLIED']} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Applications sx={{ height: '100%' }} titleToShow="Online Assessments" jobs={jobs} status={["OA"]}/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Applications sx={{ height: '100%' }} titleToShow="Interviews" jobs={jobs} status={["INTERVIEW"]} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Applications sx={{ height: '100%'}} titleToShow="Offer/Rejections" jobs={jobs} status={["OFFER", "REJECTED"]}/>
          </Grid>

        </Grid>
      </Container>
    </Box>
  </>
)};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
