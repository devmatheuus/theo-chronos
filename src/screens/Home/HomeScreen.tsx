import { SafeAreaView, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState, useContext, useEffect } from 'react';
import MeetingItem from './components/MeetingItem';
import MeetingSection from './components/MeetingSection';
import { MeetingItems } from '@/data';
import ModalTimer from './components/ModalTimer';
import { TimerContext } from '@/contexts/timer';

export type CurrentItem = Pick<
  MeetingItems,
  'duration' | 'title' | 'id' | 'titleMarkerColor'
>;

export type TitleMarkerColorOptions =
  | 'bg-primary-gray'
  | 'bg-primary-yellow'
  | 'bg-primary-red';

type currentSectionIndexOptions = 0 | 1 | 2;

const HomeScreen: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentSectionIndex, setCurrentSectionIndex] =
    useState<currentSectionIndexOptions>(0);

  const { meetingDataStructure } = useContext(TimerContext);

  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  const handleCurrentItemIndex = (meetingItemId: number) => {
    const meetingIndex = meetingDataStructure[currentSectionIndex].findIndex(
      (i) => i.id === meetingItemId
    );

    if (meetingIndex !== -1) {
      setCurrentItemIndex(meetingIndex);
    }
  };

  useEffect(() => {
    console.log(currentItemIndex);
    console.log(meetingDataStructure[currentSectionIndex][currentItemIndex]);
  }, [currentItemIndex]);

  useEffect(() => {
    console.log('current section index -------------------------------');
    console.log(currentSectionIndex);
    console.log('current section index -------------------------------');
  }, [currentSectionIndex]);

  const handleCurrentSectionIndex = (
    titleMarkerColor: TitleMarkerColorOptions
  ) => {
    switch (titleMarkerColor) {
      case 'bg-primary-gray':
        setCurrentSectionIndex(0);
        break;
      case 'bg-primary-yellow':
        setCurrentSectionIndex(1);
        break;
      case 'bg-primary-red':
        setCurrentSectionIndex(2);
        break;
    }
  };

  const navigation = useNavigation();

  const [currentItem, setCurrentItem] = useState<CurrentItem>(
    meetingDataStructure[0][0]
  );

  const handleSetShowModal = (value: boolean) => {
    setShowModal(value);
  };

  const handleCurrentItem = (meetingItem: CurrentItem) => {
    setCurrentItem(meetingItem);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [firstSection, secondSection, thirdSection] = meetingDataStructure;

  return (
    <SafeAreaView className="flex-1 relative justify-center items-center">
      {showModal && (
        <ModalTimer
          setShowModal={setShowModal}
          title={currentItem.title}
          currentItem={currentItem}
          currentSectionIndex={currentSectionIndex}
          currentItemIndex={currentItemIndex}
        />
      )}

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="flex-1 px-4 py-5"
      >
        <MeetingItem
          meetingData={meetingDataStructure[0][0]}
          showTitleMarker={false}
          handleSetShowModal={handleSetShowModal}
          handleCurrentItem={handleCurrentItem}
          handleCurrentSectionIndex={handleCurrentSectionIndex}
          handleCurrentItemIndex={handleCurrentItemIndex}
        />
        <View className="mb-8">
          <MeetingSection title="Tesouros da Palavra de Deus" />

          {firstSection.map((item) => {
            return (
              <MeetingItem
                meetingData={item}
                key={item.id}
                handleSetShowModal={handleSetShowModal}
                handleCurrentItem={handleCurrentItem}
                handleCurrentSectionIndex={handleCurrentSectionIndex}
                handleCurrentItemIndex={handleCurrentItemIndex}
              />
            );
          })}

          <MeetingSection title="Faça seu Melhor No Ministério" />

          {secondSection.map((item) => (
            <MeetingItem
              meetingData={item}
              key={item.id}
              handleSetShowModal={handleSetShowModal}
              handleCurrentSectionIndex={handleCurrentSectionIndex}
              handleCurrentItemIndex={handleCurrentItemIndex}
              handleCurrentItem={handleCurrentItem}
            />
          ))}

          <MeetingSection title="Nossa Vida Cristã" />

          {thirdSection.map((item) => (
            <MeetingItem
              meetingData={item}
              key={item.id}
              handleSetShowModal={handleSetShowModal}
              handleCurrentItem={handleCurrentItem}
              handleCurrentSectionIndex={handleCurrentSectionIndex}
              handleCurrentItemIndex={handleCurrentItemIndex}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
