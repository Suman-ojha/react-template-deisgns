import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TopStats = () => {
  const stats = [
    { title: 'Earnings', value: '$350.4' },
    { title: 'Spend this month', value: '$642.39' },
    { title: 'Sales', value: '$574.34' },
    { title: 'Your Balance', value: '$1,000' },
    { title: 'New Tasks', value: '154' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-md">
          <CardContent>
            <Typography variant="h6" className="font-bold">
              {stat.title}
            </Typography>
            <Typography variant="h4" className="text-purple-600">
              {stat.value}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TopStats;
