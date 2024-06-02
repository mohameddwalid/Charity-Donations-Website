import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';

const cardsData = [
  { title: 'Card 1', content: 'Content for Card 1' },
  { title: 'Card 2', content: 'Content for Card 2' },
  { title: 'Card 3', content: 'Content for Card 3' },
];

const ViewAllRequest = () => {
  return (
    <Grid container spacing={2}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ minWidth: 275, margin: '10px' }}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ fontSize: 14 }}>
                {card.title}
              </Typography>
              <Typography color="textSecondary" gutterBottom sx={{ marginBottom: 12 }}>
                Word of the Day
              </Typography>
              <Typography variant="body2" component="p">
                {card.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewAllRequest;
