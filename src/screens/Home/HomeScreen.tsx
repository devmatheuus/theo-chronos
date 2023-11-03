import { SafeAreaView, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useRef, useState } from 'react';
import MeetingItem from './components/MeetingItem';
import MeetingSection from './components/MeetingSection';
import { MeetingItems, meetingStructure } from '@/data';
import ModalTimer from './components/ModalTimer';

export type CurrentItem = Pick<MeetingItems, 'duration' | 'title'>;

const HomeScreen: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const navigation = useNavigation();

  const currentItem = useRef<CurrentItem>(meetingStructure[0][0]);

  const handleSetShowModal = (value: boolean) => {
    setShowModal(value);
  };

  const handleCurrentItem = (meetingDatas: CurrentItem) => {
    currentItem.current = meetingDatas;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [firstSection, secondSection, thirdSection] = meetingStructure;

  return (
    <SafeAreaView className="flex-1 relative justify-center items-center">
      {showModal && (
        <ModalTimer
          setShowModal={setShowModal}
          duration={currentItem.current.duration}
          title={currentItem.current.title}
        />
      )}

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
          handleSetShowModal={handleSetShowModal}
          handleCurrentItem={handleCurrentItem}
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
              handleSetShowModal={handleSetShowModal}
              handleCurrentItem={handleCurrentItem}
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
              handleSetShowModal={handleSetShowModal}
              handleCurrentItem={handleCurrentItem}
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
              handleSetShowModal={handleSetShowModal}
              handleCurrentItem={handleCurrentItem}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
