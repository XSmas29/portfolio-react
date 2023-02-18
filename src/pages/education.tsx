import { Paper, Typography } from '@mui/material'
import Timeline from "@mui/lab/Timeline";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab';

const Education = () => {
  return (
    <div>
      <Typography 
        variant="h4" 
        sx={{mb: 4}}
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
        <TimelineOppositeContent color="textSecondary">
          2019 - 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Institut Sains dan Teknologi Terpadu Surabaya - Bachelor of Information System</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          2016 - 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>SMAK Frateran Surabaya - High School</TimelineContent>
      </TimelineItem>
    </Timeline>
      </Paper>
    </div>
  )
}

export default Education