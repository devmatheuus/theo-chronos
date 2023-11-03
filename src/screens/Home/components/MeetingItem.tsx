import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo as PlayIcon } from '@expo/vector-icons';
import React from 'react';
import { CurrentItem } from '../HomeScreen';

type TitleMarkerColorOptions =
  | 'bg-primary-gray'
  | 'bg-primary-yellow'
  | 'bg-primary-red';

type MeetingItemProps = {
  title: string;
  duration: string;
  expectedTime?: number;
  showTitleMarker?: boolean;
  titleMarkerColor?: TitleMarkerColorOptions;
  handleSetShowModal: (value: boolean) => void;
  handleCurrentItem: (meetingData: CurrentItem) => void;
};

const MeetingItem: React.FC<MeetingItemProps> = ({
  duration,
  title,
  expectedTime,
  showTitleMarker = true,
  titleMarkerColor = 'bg-primary-gray',
  handleSetShowModal,
  handleCurrentItem,
}) => {
  return (
    <View className="flex-row justify-between items-center my-1">
      <View className="flex-row items-center gap-1">
        {showTitleMarker && (
          <View className={`w-[2.5px] h-6 ${titleMarkerColor}`} />
        )}

        <Text className="text-base">{title}</Text>
      </View>
      <View>
        <View className="flex-row  items-center gap-3">
          {!!expectedTime && (
            <View className="relative h-full">
              <Text className="text-xs font-orbitron absolute top-0 -left-1">
                {expectedTime}'
              </Text>
            </View>
          )}

          <Text className="text-2xl font-orbitron font-thin ml-5">
            {duration}
          </Text>
          <TouchableOpacity
            className="px-3 py-1 border border-solid border-primary-yellow rounded-sm"
            onPress={() => {
              handleSetShowModal(true);
              handleCurrentItem({ duration, title });
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
