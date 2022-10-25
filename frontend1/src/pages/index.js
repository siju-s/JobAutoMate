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
import {
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// const jobs = [
//   {
//     id: uuid(),
//     name: 'Dropbox',
//     imageUrl: '/static/images/jobs/product_1.png',
//     role: 'Software Engineer Intern',
//     deadline: subHours(Date.now(), 2),
//     status: 'APPLIED'
//   },
//   {
//     id: uuid(),
//     name: 'Medium Corporation',
//     imageUrl: '/static/images/jobs/product_2.png',
//     role: 'Software testing Intern',
//     deadline: subHours(Date.now(), 2),
//     status: 'APPLIED'
//   },
//   {
//     id: uuid(),
//     name: 'Slack',
//     imageUrl: '/static/images/jobs/product_3.png',
//     role: 'Software Engineer Intern',
//     deadline: subHours(Date.now(), 3),
//     status: 'OA'
//   },
//   {
//     id: uuid(),
//     name: 'Lyft',
//     imageUrl: '/static/images/jobs/product_4.png',
//     role: 'Software Testing Intern',
//     deadline: subHours(Date.now(), 5),
//     status: 'INTERVIEW'
//   },
//   {
//     id: uuid(),
//     name: 'GitHub',
//     imageUrl: '/static/images/jobs/product_5.png',
//     role: 'Product Management Intern',
//     deadline: subHours(Date.now(), 9),
//     status: 'OFFER'
//   },
//   {
//     id: uuid(),
//     name: 'Squarespace',
//     imageUrl: '/static/images/jobs/product_6.png',
//     role: 'Product Management Intern',
//     deadline: subHours(Date.now(), 9),
//     status: 'REJECTED'
//   },
//       {
//     id: uuid(),
//     name: 'Google',
//     imageUrl: 'https://logo.clearbit.com/google.com?size=48&format=png',
//     role: 'Software Testing Intern',
//     deadline: subHours(Date.now(), 9),
//     status: 'OA'
//   }
// ];

const getLength = (jobs, status) => {
  const res = jobs.filter(product => status.includes(product.status));
  return res.length;
}

const Page = () => {
  const [jobs, setJobs] = useState([])

  const fetchData = async () => {
    axios.get("http://127.0.0.1:5000/jobs").then((response) => {
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
            <Budget total={getLength(jobs, ["APPLIED", "OA", "INTERVIEW", "OFFER", "REJECTED"])}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers total={getLength(jobs, ["OFFER"])}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress total={getLength(jobs, ["OA", "INTERVIEW"])}/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} total={getLength(jobs, ["REJECTED"])}/>
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
