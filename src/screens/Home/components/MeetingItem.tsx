import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo as PlayIcon } from '@expo/vector-icons';
import React from 'react';
import { CurrentItem, TitleMarkerColorOptions } from '../HomeScreen';
import { MeetingItems } from '@/data';

type MeetingItemProps = {
  meetingData: MeetingItems;
  showTitleMarker?: boolean;
  handleSetShowModal: (value: boolean) => void;
  handleCurrentItem: (meetingData: CurrentItem) => void;
  handleCurrentSectionIndex: (
    titleMarkerColor: TitleMarkerColorOptions
  ) => void;
  handleCurrentItemIndex: (meetingItemId: number) => void;
};

const MeetingItem: React.FC<MeetingItemProps> = ({
  meetingData,
  showTitleMarker = true,
  handleSetShowModal,
  handleCurrentItem,
  handleCurrentSectionIndex,
  handleCurrentItemIndex,
}) => {
  return (
    <View className="flex-row justify-between items-center my-1">
      <View className="flex-row items-center gap-1">
        {showTitleMarker && (
          <View className={`w-[2.5px] h-6 ${meetingData.titleMarkerColor}`} />
        )}

        <Text className="text-base font-semibold text-gray-600">
          {meetingData.title}
        </Text>
      </View>
      <View>
        <View className="flex-row  items-center gap-3">
          {meetingData?.expectedTime && (
            <View className="relative h-full w-fit">
              <Text className="text-xs font-orbitron absolute top-0 -left-1 ">
                {meetingData.expectedTime}'
              </Text>
            </View>
          )}

          <Text className="text-2xl font-orbitron font-thin text-right text-gray-600 min-w-fit">
            {meetingData.duration}
          </Text>
          <TouchableOpacity
            className="px-3 py-1 border border-solid border-primary-yellow rounded-sm"
            onPress={() => {
              handleSetShowModal(true);
              handleCurrentItem({ ...meetingData });
              handleCurrentSectionIndex(
                meetingData.titleMarkerColor ?? 'not defined'
              );
              handleCurrentItemIndex(meetingData.id);
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
