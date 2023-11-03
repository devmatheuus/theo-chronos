import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo as PlayIcon } from '@expo/vector-icons';
import React from 'react';

type TitleMarkerColorOptions =
  | 'bg-primary-gray'
  | 'bg-primary-yellow'
  | 'bg-primary-red';

type MeetingItemProps = {
  title: string;
  duration: number | string;
  expectedTime?: number;
  showTitleMarker?: boolean;
  titleMarkerColor?: TitleMarkerColorOptions;
};

const MeetingItem: React.FC<MeetingItemProps> = ({
  duration,
  title,
  expectedTime,
  showTitleMarker = true,
  titleMarkerColor = 'bg-primary-gray',
}) => {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row items-center gap-1">
        {showTitleMarker && <View className={`w-1 h-5 ${titleMarkerColor}`} />}

        <Text className="text-base">{title}</Text>
      </View>
      <View>
        <View className="flex-row relative items-center gap-3">
          {!!expectedTime && (
            <Text className="text-xs font-orbitron absolute top-0 left-[-8%]">
              {expectedTime}'
            </Text>
          )}
          <Text className="text-2xl font-orbitron font-thin">{duration}</Text>
          <TouchableOpacity className="px-3 py-1 border border-solid border-primary-yellow rounded-sm">
            <PlayIcon name="controller-play" size={24} color="#5B75A0" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MeetingItem;
