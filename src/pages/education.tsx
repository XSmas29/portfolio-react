import { Paper, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import { TimelineItem, timelineOppositeContentClasses } from '@mui/lab';
import TimelineCard from '@components/card/timelineCard';

const Education = () => {
  return (
    <div>
      <Typography 
        variant="h4" 
        sx={{ mb: 4 }}
      >
        Education
      </Typography>
      <Paper
        elevation={0}
        variant="outlined"
      >
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          <TimelineItem>
            <TimelineCard dateEnd={{ day: 1, month: 1, year: 2016 }} dateStart={{ year: 2019 }} description={'tes'}/>
          </TimelineItem>
        </Timeline>
      </Paper>
    </div>
  );
};

export default Education;