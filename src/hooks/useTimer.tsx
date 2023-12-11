import { TimerContext } from '@/contexts/Timer.context';
import { useContext } from 'react';

export const useTimer = () => {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }

  return context;
};
