import { MeetingProvider } from './Meeting.context';
import { TimerProvider } from './Timer.context';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <TimerProvider>
      <MeetingProvider>{children}</MeetingProvider>
    </TimerProvider>
  );
};
