import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import { useTimer } from '@/hooks/useTimer';
import { useMeeting } from '@/hooks/useMeeting';
import { formatSecondsToTime } from '@/utils/formatSecondsToTime.utils';
import { differenceInSeconds } from '@/utils/differenceInSeconds.utils';

const ModalTimer: React.FC = () => {
  const [startTimer, setStartTimer] = useState<boolean>(false);

  const {
    currentMeetingItem,
    updateMeetingItemDuration,
    resetMeetingItemDuration,
  } = useMeeting();

  if (!currentMeetingItem) return <></>;

  const handleTimer = () => {
    setStartTimer((prevState) => !prevState);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let seconds = currentMeetingItem?.duration || 0;
    let startTime: number;
    let endTime: number;

    if (startTimer) {
      startTime = new Date().getTime();

      interval = setInterval(() => {
        seconds++;

        updateMeetingItemDuration(currentMeetingItem.id, seconds);
      }, 1000);
    }

    return () => {
      if (!startTimer) return;

      endTime = new Date().getTime();

      const startTimeSecond = differenceInSeconds(startTime);

      const endTimeSecond = differenceInSeconds(endTime);

      const totalDurationInSeconds = startTimeSecond - endTimeSecond;

      if (totalDurationInSeconds >= seconds) {
        updateMeetingItemDuration(
          currentMeetingItem.id,
          totalDurationInSeconds
        );
      }

      clearInterval(interval);
    };
  }, [startTimer]);

  const { handleModal } = useTimer();

  const handleResetTimer = () => {
    resetMeetingItemDuration(currentMeetingItem.id);
    setStartTimer(false);
  };

  return (
    <SafeAreaView
      className="w-full h-screen  justify-center items-center absolute z-10"
      style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
    >
      <View className="rounded-md shadow-lg justify-center items-center bg-white space-y-10 py-8 px-10 relative">
        <TouchableOpacity
          className="absolute top-2 right-2"
          onPress={handleModal}
        >
          <Ionicons name="close-outline" size={34} color="#5B75A0" />
        </TouchableOpacity>

        <Text className="text-base mb-8">{currentMeetingItem?.title}</Text>

        <Text className="font-orbitron text-5xl text-primary-blue mb-8">
          {formatSecondsToTime(currentMeetingItem?.duration)}
        </Text>

        <View className="flex-row gap-5">
          <TouchableOpacity
            className="px-3 py-3 border border-solid border-primary-yellow rounded-sm"
            onPress={handleTimer}
          >
            {startTimer ? (
              <AntDesign name="pause" size={30} color="#5B75A0" />
            ) : (
              <Entypo name="controller-play" size={30} color="#5B75A0" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            className="px-3 py-3 border border-solid border-primary-yellow rounded-sm"
            onPress={handleResetTimer}
          >
            <MaterialCommunityIcons name="reload" size={30} color="#5B75A0" />
          </TouchableOpacity>
          <TouchableOpacity
            className="px-3 py-3 border border-solid border-primary-yellow rounded-sm"
            onPress={handleModal}
          >
            <Entypo name="check" size={30} color="#5B75A0" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ModalTimer;
