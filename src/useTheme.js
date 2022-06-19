import {useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme} from 'react-native-paper';

const FIREHOSE_RED = '#3498db';

export default function useTheme() {
  const colorScheme = useColorScheme();

  const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  const theme = {
    ...baseTheme,
    roundness: 15,
    colors: {
      ...baseTheme.colors,
      primary: FIREHOSE_RED,
    },
  };

  return theme;
}