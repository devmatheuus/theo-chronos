import { MeetingStructure, meetingStructure } from '@/data';
import React, { createContext, useState, ReactNode } from 'react';

type TimerContextType = {
  meetingDataStructure: MeetingStructure;
  setMeetingDataStructure: React.Dispatch<
    React.SetStateAction<MeetingStructure>
  >;
};

export const TimerContext = createContext<TimerContextType>(
  {} as TimerContextType
);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [meetingDataStructure, setMeetingDataStructure] =
    useState(meetingStructure);

  return (
    <TimerContext.Provider
      value={{
        meetingDataStructure,
        setMeetingDataStructure,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
