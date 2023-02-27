import { TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator } from '@mui/lab';
import { Card, Typography } from '@mui/material';
import { dateTimeLine } from '@utils/format';
import { TimelineCardProps } from 'src/types';



const TimelineCard = ({ dateStart, dateEnd, description }: TimelineCardProps) => {
  return (
    <>
      <TimelineSeparator>
        <TimelineDot color='primary'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        color="textSecondary"
      >
        <Card
          sx={{
            p: 1.5,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold' }}
          >
            {`${dateTimeLine(dateStart.year, dateStart.month, dateStart.day)}`} - {`${dateTimeLine(dateEnd.year, dateEnd.month, dateEnd.day)}`}
          </Typography>
          <Typography
            variant="body2"
          >
            { description }
          </Typography>
        </Card>
      </TimelineContent>
    </>
  );
};

export default TimelineCard;