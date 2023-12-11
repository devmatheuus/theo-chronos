import React, { useLayoutEffect, useState, useContext } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TimerContext } from '@/contexts/Timer.context';
import { MeetingItem, MeetingSection, ModalTimer } from './components';
import { useTimer } from '@/hooks/useTimer';
import { useMeeting } from '@/hooks/useMeeting';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false }); // Oculta o header da tela
  }, []);

  const { showModal } = useTimer();
  const { meetingDataStructure } = useMeeting();

  const [
    initialComments, // Seção dos comentários iniciais
    treasuresSection, // Seção dos tesouros da palavra de Deus
    ministrySection, // Seção do faça seu melhor no ministério
    christianLifeSection, // Seção da nossa vida cristã
  ] = meetingDataStructure;

  return (
    <SafeAreaView className="flex-1 relative justify-center">
      {showModal && <ModalTimer />}

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="flex-1 px-2 py-5"
      >
        <MeetingItem
          meetingData={initialComments[0]}
          showTitleMarker={false}
          key={initialComments[0].id}
        />

        <View className="mb-8">
          <MeetingSection title="Tesouros da Palavra de Deus" />
          {treasuresSection.map((item) => (
            <MeetingItem meetingData={item} key={item.id} />
          ))}

          <MeetingSection title="Faça seu Melhor No Ministério" />
          {ministrySection.map((item) => (
            <MeetingItem meetingData={item} key={item.id} />
          ))}

          <MeetingSection title="Nossa Vida Cristã" />
          {christianLifeSection.map((item) => (
            <MeetingItem meetingData={item} key={item.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
