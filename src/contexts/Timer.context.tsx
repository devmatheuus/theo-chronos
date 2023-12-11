import React, { createContext, useState, ReactNode } from 'react';

type TimerContextType = {
  showModal: boolean;
  handleModal: () => void;
};

export const TimerContext = createContext<TimerContextType>(
  {} as TimerContextType
);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <TimerContext.Provider
      value={{
        showModal,
        handleModal,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
