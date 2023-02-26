import { Zoom, Paper, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import { TimelineItem, timelineItemClasses, timelineOppositeContentClasses } from '@mui/lab';
import TimelineCard from '@components/card/timelineCard';
// import { TransitionGroup } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
const data = [
  {
    dateStart: {
      month: 7,
      year: 2019,
    },
    dateEnd: {
      month: 6,
      year: 2023,
    },
    description: 'Institut Sains dan Teknologi Terpadu Surabaya - Bachelor - Information Science',
  },
  {
    dateStart: {
      month: 7,
      year: 2016,
    },
    dateEnd: {
      month: 6,
      year: 2019,
    },
    description: 'SMAK Frateran Surabaya - High School - Science',
  },
];

const Education = () => {
  return (
    <TransitionGroup>
      <Zoom
      >
        <Typography 
          variant="h4" 
          sx={{ mb: 4 }}
        >
          Education
        </Typography>

      </Zoom>
      <Zoom
        timeout={750}
      >
        <div>
          <Paper
            elevation={0}
            variant="outlined"
          >
            <Timeline
              sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.2,
                },
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {data.map((item, index) => (
                <TimelineItem
                  key={index}
                >
                  <TimelineCard
                    dateEnd={item.dateEnd} 
                    dateStart={item.dateStart} 
                    description={item.description}
                  />
                </TimelineItem>
              ))}
            </Timeline>
          </Paper>
        </div>
      </Zoom>
    </TransitionGroup>
  );
};

export default Education;