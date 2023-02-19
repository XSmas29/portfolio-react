import { TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';

type TimelineCardProps = {
  dateStart: {
    day?: number;
    month?: number;
    year: number;
  };
  dateEnd: {
    day?: number;
    month?: number;
    year?: number;
  };
  description: string;
};

const TimelineCard = ({ dateStart, dateEnd, description }: TimelineCardProps) => {
  return (
    <>
      <TimelineOppositeContent color="textSecondary">
        {`${dateStart.day} ${dateStart.month} ${dateStart.year}`} - {`${dateEnd.day} ${dateEnd.month} ${dateEnd.year}`}
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