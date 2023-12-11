import { MeetingSection } from './MeetingSection.type';

// Objetivo: Criar um tipo para o array de seções e limitar a quantidade de seções.

// Sabemos que a reunião é composta por 4 seções. Para isso, criamos
// um tipo que limita a quantidade de seções e define a estrutura de cada seção.

//Logo, temos que temos um array de 4 seções, cada seção é composta por um array de MeetingItems.

export type MeetingStructure = [
  MeetingSection,
  MeetingSection,
  MeetingSection,
  MeetingSection
];
