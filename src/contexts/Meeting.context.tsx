import { meetingStructure } from '@/data';
import { MeetingItems } from '@/data/types/MeetingItems.type';
import { MeetingStructure } from '@/data/types/MeetingStructure.type';
import React, { createContext, useState, ReactNode } from 'react';

type MeetingContextType = {
  meetingDataStructure: MeetingStructure;
  setMeetingDataStructure: React.Dispatch<
    React.SetStateAction<MeetingStructure>
  >;
  setCurrentMeetingItemById: (meetingItemId: string) => void;
  currentMeetingItem: MeetingItems | null;
  updateMeetingItemDuration: (meetingItemId: string, duration: number) => void;
  resetMeetingItemDuration: (meetingItemId: string) => void;
};

export const MeetingContext = createContext<MeetingContextType>(
  {} as MeetingContextType
);

export const MeetingProvider = ({ children }: { children: ReactNode }) => {
  const [meetingDataStructure, setMeetingDataStructure] =
    useState(meetingStructure);

  const [currentMeetingItem, setCurrentMeetingItem] =
    useState<MeetingItems | null>(null);

  const findMeetingItemById = (meetingItemId: string): MeetingItems | null => {
    const meetings = meetingDataStructure.flat();

    const meetingItem = meetings.find((item) => item.id === meetingItemId);

    return meetingItem || null;
  };

  const setCurrentMeetingItemById = (meetingItemId: string): void => {
    const meetingItem = findMeetingItemById(meetingItemId);

    if (meetingItem) {
      setCurrentMeetingItem(meetingItem);
    }
  };

  const updateMeetingItemDuration = (
    meetingItemId: string,
    duration: number
  ): void => {
    const currentSection = currentMeetingItem!.section;

    const meetingsSection = meetingDataStructure[currentSection];

    const meeting = meetingsSection.find((item) => item.id === meetingItemId);
    const meetingIndex = meetingsSection.findIndex(
      (item) => item.id === meetingItemId
    );

    if (!meeting) return;

    meeting.duration = duration;

    setMeetingDataStructure((prev) => {
      const newMeetingDataStructure: MeetingStructure = [...prev];
      newMeetingDataStructure[currentSection][meetingIndex] = meeting;

      return newMeetingDataStructure;
    });
  };

  const resetMeetingItemDuration = (meetingItemId: string): void => {
    updateMeetingItemDuration(meetingItemId, 0);
  };

  return (
    <MeetingContext.Provider
      value={{
        meetingDataStructure,
        setMeetingDataStructure,
        setCurrentMeetingItemById,
        currentMeetingItem,
        updateMeetingItemDuration,
        resetMeetingItemDuration,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};
