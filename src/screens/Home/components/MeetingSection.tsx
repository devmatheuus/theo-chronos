import { View, Text } from 'react-native';
import React from 'react';

type MeetingTitleOptions =
  | 'Tesouros da Palavra de Deus'
  | 'Faça seu Melhor No Ministério'
  | 'Nossa Vida Cristã';

type MeetingSectionProps = {
  title: MeetingTitleOptions;
};

type SectionBackground = {
  [key in MeetingTitleOptions]:
    | 'bg-primary-gray'
    | 'bg-primary-yellow'
    | 'bg-primary-red';
};

const MeetingSection: React.FC<MeetingSectionProps> = ({ title }) => {
  const sectionBackground: SectionBackground = {
    'Tesouros da Palavra de Deus': 'bg-primary-gray',
    'Faça seu Melhor No Ministério': 'bg-primary-yellow',
    'Nossa Vida Cristã': 'bg-primary-red',
  };

  return (
    <View
      className={`flex-1 p-2 bg-primary-gray my-3 ${sectionBackground[title]}`}
    >
      <Text className="text-white uppercase text-lg">{title}</Text>
    </View>
  );
};

export default MeetingSection;
