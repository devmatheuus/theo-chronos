type SectionBackgroundOptions =
  | 'bg-primary-gray'
  | 'bg-primary-yellow'
  | 'bg-primary-red';

export type MeetingItems = {
  title: string;
  duration: string;
  expectedTime?: number;
  titleMarkerColor?: SectionBackgroundOptions;
  id: number;
};

type MeetingSection = MeetingItems[];

export type MeetingStructure = [
  MeetingSection,
  MeetingSection,
  MeetingSection,
  MeetingSection
];

export const meetingStructure: MeetingStructure = [
  [
    {
      title: 'Discurso',
      duration: '00:00',
      expectedTime: 10,
      titleMarkerColor: 'bg-primary-gray',
      id: 1,
    },
    {
      title: 'Encontre joias espirituais',
      duration: '00:00',
      expectedTime: 10,
      titleMarkerColor: 'bg-primary-gray',
      id: 2,
    },
    {
      title: 'Leitura da Bíblia',
      duration: '00:00',
      expectedTime: 4,
      titleMarkerColor: 'bg-primary-gray',
      id: 3,
    },
    {
      title: 'Observações',
      duration: '00:00',
      titleMarkerColor: 'bg-primary-gray',
      id: 4,
    },
  ],

  [
    {
      title: 'Primeira conversa',
      duration: '00:00',
      expectedTime: 4,
      titleMarkerColor: 'bg-primary-yellow',
      id: 5,
    },
    {
      title: 'Observações',
      duration: '00:00',
      titleMarkerColor: 'bg-primary-yellow',
      id: 6,
    },
    {
      title: 'Revisita',
      duration: '00:00',
      expectedTime: 10,
      titleMarkerColor: 'bg-primary-yellow',
      id: 8,
    },
    {
      title: 'Observações',
      duration: '00:00',
      titleMarkerColor: 'bg-primary-yellow',
      id: 9,
    },
    {
      title: 'Estudo/Discurso',
      duration: '00:00',
      expectedTime: 5,
      titleMarkerColor: 'bg-primary-yellow',
      id: 10,
    },
    {
      title: 'Observações',
      duration: '00:00',
      titleMarkerColor: 'bg-primary-yellow',
      id: 11,
    },
  ],

  [
    {
      title: 'Primeira parte',
      duration: '00:00',
      titleMarkerColor: 'bg-primary-red',
      id: 12,
    },
    {
      title: 'Segunda parte',
      duration: '00:00',
      titleMarkerColor: 'bg-primary-red',
      id: 13,
    },
    {
      title: 'Estudo Bíblico',
      duration: '00:00',
      expectedTime: 30,
      titleMarkerColor: 'bg-primary-red',
      id: 14,
    },
    {
      title: 'Comentários finais',
      duration: '00:00',
      expectedTime: 3,
      titleMarkerColor: 'bg-primary-red',
      id: 15,
    },
  ],

  [
    {
      title: 'Comentários iniciais',
      duration: '00:00',
      expectedTime: 3,
      id: 16,
    },
  ],
];
