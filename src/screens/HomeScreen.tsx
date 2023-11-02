import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-primary-red">Home</Text>
    </View>
  );
};

export default HomeScreen;
