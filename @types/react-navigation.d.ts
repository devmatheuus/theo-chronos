import { AppRootStackParamList } from 'App';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootStackParamList {}
  }
}
