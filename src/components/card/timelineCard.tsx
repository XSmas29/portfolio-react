import { TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { dateTimeLine } from '@utils/format';
import { TimelineCardProps } from 'src/types';



const TimelineCard = ({ dateStart, dateEnd, description }: TimelineCardProps) => {
  return (
    <>
      <TimelineOppositeContent
        color="textSecondary"
      >
        {`${dateTimeLine(dateStart.year, dateStart.month, dateStart.day)}`} - {`${dateTimeLine(dateEnd.year, dateEnd.month, dateEnd.day)}`}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color='primary'/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{ description }</TimelineContent>
    </>
  );
};

export default TimelineCard;