import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TimerContext } from '@/contexts/timer';
import { MeetingStructure } from '@/data';
import { CurrentItem } from '../HomeScreen';

type ModalTimerProps = {
  title: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentItem: CurrentItem;
  currentSectionIndex: 0 | 1 | 2;
  currentItemIndex: number;
};

const ModalTimer: React.FC<ModalTimerProps> = ({
  setShowModal,
  title,
  currentItem,
  currentSectionIndex,
  currentItemIndex,
}) => {
  const { meetingDataStructure, setMeetingDataStructure } =
    useContext(TimerContext);

  const [start, setStart] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const minutesToSeconds = (minutes: number) => minutes * 60;

  const handleMeetingDuration = () => {
    const minutes = currentItem.duration.split(':')[0];
    const seconds = currentItem.duration.split(':')[1];

    const totalSeconds = minutesToSeconds(Number(minutes)) + Number(seconds);

    return totalSeconds;
  };
  const [totalSeconds, setTotalSeconds] = useState<number>(
    handleMeetingDuration()
  );

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [start]);

  useEffect(() => {
    if (totalSeconds !== 0) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
        seconds
      ).padStart(2, '0')}`;

      const updatedMeetingDataStructure = [
        ...meetingDataStructure,
      ] as MeetingStructure;

      currentItem.duration = formattedTime;

      updatedMeetingDataStructure[currentSectionIndex][currentItemIndex] =
        currentItem;

      setMeetingDataStructure(updatedMeetingDataStructure);
    }
  }, [totalSeconds]);

  return (
    <SafeAreaView
      className="w-full h-screen  justify-center items-center absolute z-10"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
    >
      <View className="rounded-md shadow-lg justify-center items-center bg-white space-y-10 py-8 px-10 relative">
        <TouchableOpacity
          className="absolute top-2 right-2"
          onPress={closeModal}
        >
          <Ionicons name="close-outline" size={34} color="#5B75A0" />
        </TouchableOpacity>

        <Text className="text-base mb-8">{title}</Text>

        <Text className="font-orbitron text-5xl text-primary-blue mb-8">
          {currentItem.duration}
        </Text>

        <View className="flex-row gap-5">
          <TouchableOpacity
            className="px-3 py-3 border border-solid border-primary-yellow rounded-sm"
            onPress={() => setStart(true)}
          >
            <Entypo name="controller-play" size={30} color="#5B75A0" />
          </TouchableOpacity>
          <TouchableOpacity className="px-3 py-3 border border-solid border-primary-yellow rounded-sm">
            <MaterialCommunityIcons name="reload" size={30} color="#5B75A0" />
          </TouchableOpacity>
          <TouchableOpacity className="px-3 py-3 border border-solid border-primary-yellow rounded-sm">
            <Entypo name="check" size={30} color="#5B75A0" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ModalTimer;
