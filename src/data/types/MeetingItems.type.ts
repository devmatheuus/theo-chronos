import { SectionBackgroundOptions } from './SectionBackgroundOptions.type';

// Objetivo: Criar um tipo para o array de seções.

// Essa tipagem representa a estrutura de cada item da reunião.
// Esses dados são necessários para renderizar cada item.

const SectionOptions = {
  'Initial Comments': 0,
  Treasures: 1,
  Ministry: 2,
  'Christian Life': 3,
} as const;

export type MeetingItems = {
  title: string;
  duration: number | null;
  expectedTime?: number;
  titleMarkerColor?: SectionBackgroundOptions;
  id: string;
  startTime: number | null;
  endTime: number | null;
  section: (typeof SectionOptions)[keyof typeof SectionOptions];
  // O tipo usado acima é uma alternativa para o enum.
  // Tendo em vista que o enum não é recomendado por não ter autocomplete.
};
