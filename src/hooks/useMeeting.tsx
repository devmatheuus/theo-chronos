import { MeetingContext } from '@/contexts/Meeting.context';
import { useContext } from 'react';

export const useMeeting = () => {
  const context = useContext(MeetingContext);

  if (!context) {
    throw new Error('useMeeting must be used within a MeetingProvider');
  }

  return context;
};
