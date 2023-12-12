import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo as PlayIcon } from '@expo/vector-icons';
import { MeetingItems } from '@/data/types/MeetingItems.type';
import { useTimer } from '@/hooks/useTimer';
import { useMeeting } from '@/hooks/useMeeting';
import { formatSecondsToTime } from '@/utils/formatSecondsToTime.utils';

type MeetingItemProps = {
  meetingData: MeetingItems;
  showTitleMarker?: boolean;
};

const MeetingItem: React.FC<MeetingItemProps> = ({
  meetingData,
  showTitleMarker = true,
}) => {
  const { handleModal } = useTimer();
  const { setCurrentMeetingItemById } = useMeeting();

  return (
    <View className="flex-row justify-between items-center my-1">
      <View className="flex-row items-center gap-1">
        {showTitleMarker && <View className={`w-[2.5px] h-6 ${meetingData.titleMarkerColor}`} />}

        <Text className="text-base font-semibold text-gray-600">{meetingData.title}</Text>
      </View>
      <View>
        <View className="flex-row  items-center gap-3">
          {meetingData?.expectedTime && (
            <View className="relative h-full w-fit">
              <Text className="text-xs font-orbitron absolute top-0 -left-1 ">{meetingData.expectedTime}'</Text>
            </View>
          )}

          <Text className="text-2xl font-orbitron font-thin text-right text-gray-600 min-w-fit">
            {formatSecondsToTime(meetingData.duration)}
          </Text>
          <TouchableOpacity
            className="px-3 py-1 border border-solid border-primary-yellow rounded-sm"
            onPress={() => {
              handleModal();
              setCurrentMeetingItemById(meetingData.id);
            }}
          >
            <PlayIcon name="controller-play" size={24} color="#5B75A0" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MeetingItem;
