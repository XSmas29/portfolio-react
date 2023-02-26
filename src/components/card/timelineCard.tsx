import { TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { dateTimeLine } from '@utils/format';

type TimelineCardProps = {
  dateStart: {
    day?: number;
    month?: number;
    year: number;
  };
  dateEnd: {
    day?: number;
    month?: number;
    year: number;
  };
  description: string;
};

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