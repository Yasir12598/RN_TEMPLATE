import { Dimensions, PixelRatio } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 390;
const heightBaseScale = SCREEN_HEIGHT / 844;

const normalize = (size: number, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
const heightPixel = (size: number, removeTopInsets?: number) => {
  return normalize(
    removeTopInsets ? size - (initialWindowMetrics?.insets.top ?? 0) : size,
    'height'
  );
};
export { heightPixel, normalize, widthPixel };

