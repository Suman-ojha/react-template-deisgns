// components/DashboardContent.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const DashboardContent = () => {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">User Inventory Dashboard</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Last Month User Visits</Typography>
              <Typography variant="h4" className="font-bold">12,345</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Users</Typography>
              <Typography variant="h4" className="font-bold">1,234</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Sales Report</Typography>
              <Typography variant="h4" className="font-bold">$45,678</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardContent;
