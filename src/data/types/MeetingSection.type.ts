import { MeetingItems } from './MeetingItems.type';

// Objetivo: Criar um tipo para o array de seções.

// Essa tipagem representa a estrutura de cada seção da reunião. Ou seja,
// cada seção será composta por um array de MeetingItems.
export type MeetingSection = MeetingItems[];
