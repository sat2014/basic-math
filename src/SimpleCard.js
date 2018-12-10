import React, {useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import style from './style'
import { ContextOne } from "./context"

function SimpleCard() {
  let { state } = useContext(ContextOne)

  return (
    <Card className={JSON.stringify(style.card)}>
      <CardContent>
        <Typography className={JSON.stringify(style.title)} color="textSecondary" gutterBottom>
          Your Score 
        </Typography>
        <Typography variant="h5" component="h2">
         Counting: {state.questionCountCounting}
        </Typography>
        <Typography className={JSON.stringify(style.pos)} color="textSecondary">
          1,2,3,4,...
        </Typography>
        <Typography variant="h5" component="h2">
         Addition: {state.questionCountAddition}
        </Typography>
        <Typography className={JSON.stringify(style.pos)} color="textSecondary">
          +++++++
        </Typography>
        <Typography variant="h5" component="h2">
         Subtraction: {state.questionCountSubtraction}
        </Typography>
        <Typography className={JSON.stringify(style.pos)} color="textSecondary">
          -------
        </Typography>
        <Typography variant="h5" component="h2">
         Multiplication: {state.questionCountMultiplication}
        </Typography>
        <Typography className={JSON.stringify(style.pos)} color="textSecondary">
          *******
        </Typography>
        <Typography variant="h5" component="h2">
         Division: {state.questionCountDivision}
        </Typography>
        <Typography className={JSON.stringify(style.pos)} color="textSecondary">
          %%%%%%%
        </Typography>
        <Typography component="p">
          basic arithmatic operations and counting numbers.
        </Typography>
      </CardContent>
      </Card>
  );
}

export default SimpleCard
  