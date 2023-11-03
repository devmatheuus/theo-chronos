import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import MeetingItem from './components/MeetingItem';
import MeetingSection from './components/MeetingSection';
import { meetingStructure } from '@/data';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [firstSection, secondSection, thirdSection] = meetingStructure;

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="flex-1 px-4 py-5"
      >
        <MeetingItem
          duration="00:00"
          title="Comentários iniciais"
          expectedTime={3}
          showTitleMarker={false}
        />
        <View className="mb-8">
          <MeetingSection title="Tesouros da Palavra de Deus" />

          {firstSection.map((item) => (
            <MeetingItem
              duration={item.duration}
              title={item.title}
              expectedTime={item?.expectedTime}
              titleMarkerColor={item.titleMarkerColor}
              key={item.id}
            />
          ))}

          <MeetingSection title="Faça seu Melhor No Ministério" />

          {secondSection.map((item) => (
            <MeetingItem
              duration={item.duration}
              title={item.title}
              expectedTime={item?.expectedTime}
              titleMarkerColor={item.titleMarkerColor}
              key={item.id}
            />
          ))}

          <MeetingSection title="Nossa Vida Cristã" />

          {thirdSection.map((item) => (
            <MeetingItem
              duration={item.duration}
              title={item.title}
              expectedTime={item?.expectedTime}
              titleMarkerColor={item.titleMarkerColor}
              key={item.id}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
