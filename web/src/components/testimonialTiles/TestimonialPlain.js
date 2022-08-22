import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    height: '100%',
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  italic: {
    fontStyle: 'italic',
  },
}));

function TestimonialPlain({ name, text, role, company }) {
  const classes = useStyles();

  const printedRole = role && `, ${role}`;
  const printedCompany = company && `, ${company}`;

  return (
    <Card elevation={0} classes={{ root: classes.card }} square>
      <CardContent>
        <Typography variant="body1" className={classes.italic} gutterBottom>
          {text}
        </Typography>
        <br />
        <Typography variant="body1" className={`${classes.bold} ${classes.italic}`}>
          {'- '}
          {name}
          {printedRole}
          {printedCompany}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialPlain;
