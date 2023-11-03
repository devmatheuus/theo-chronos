import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type ModalTimerProps = {
  title: string;
  duration: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalTimer: React.FC<ModalTimerProps> = ({
  setShowModal,
  duration,
  title,
}) => {
  const closeModal = () => {
    setShowModal(false);
  };

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
          {duration}
        </Text>

        <View className="flex-row gap-5">
          <TouchableOpacity className="px-3 py-3 border border-solid border-primary-yellow rounded-sm">
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
