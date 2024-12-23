import { Dimensions, Platform, PixelRatio, StatusBar, useWindowDimensions } from 'react-native';

let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const STANDARD_WIDTH = 375;
const STANDARD_HEIGHT = 812;


const getScaleFactors = () => {

  const dpiScale = Platform.OS === 'android' ? PixelRatio.get() / 2 : 1;
  const widthScale = SCREEN_WIDTH / (STANDARD_WIDTH * dpiScale);
  const heightScale = SCREEN_HEIGHT / (STANDARD_HEIGHT * dpiScale);

  return {
    width: widthScale,
    height: heightScale,
    moderate: Math.min(widthScale, heightScale) * 0.9
  };
};

const getFontScaleFactor = () => {
  const baseScale = PixelRatio.getFontScale();
  return Platform.select({
    ios: baseScale,
    android: baseScale * 1.1
  });
};

export const FontSizes = {
  xs: Platform.select({ ios: 12, android: 13 }),
  sm: Platform.select({ ios: 14, android: 15 }),
  base: Platform.select({ ios: 16, android: 16 }),
  md: Platform.select({ ios: 18, android: 18 }),
  lg: Platform.select({ ios: 20, android: 20 }),
  xl: Platform.select({ ios: 24, android: 24 }),
  '2xl': Platform.select({ ios: 30, android: 30 }),
  '3xl': Platform.select({ ios: 36, android: 36 }),
  '4xl': Platform.select({ ios: 48, android: 48 }),
};

export const wp = (widthPercent) => {
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  const { width: scaleWidth } = getScaleFactors();
  return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * (elemWidth / 100) * scaleWidth);
};

export const hp = (heightPercent) => {
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
  const { height: scaleHeight } = getScaleFactors();
  return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * (elemHeight / 100) * scaleHeight);
};

export const scale = (size) => {
  const { width: scaleWidth } = getScaleFactors();
  return PixelRatio.roundToNearestPixel(size * scaleWidth);
};

export const verticalScale = (size) => {
  const { height: scaleHeight } = getScaleFactors();
  return PixelRatio.roundToNearestPixel(size * scaleHeight);
};

export const moderateScale = (size, factor = 0.5) => {
  const { moderate: scaleModerate } = getScaleFactors();
  return PixelRatio.roundToNearestPixel(size * scaleModerate * factor);
};

export const scaleFontSize = (size) => {
  const fontScale = getFontScaleFactor();
  const { moderate: scaleModerate } = getScaleFactors();
  let scaledSize = size * scaleModerate;
  scaledSize = Platform.select({
    ios: scaledSize,
    android: scaledSize * 1.1
  });

  const minScale = 0.85;
  const maxScale = 1.15;
  scaledSize = Math.min(Math.max(scaledSize * fontScale, size * minScale), size * maxScale);

  return PixelRatio.roundToNearestPixel(scaledSize);
};

export const fs = (size) => scaleFontSize(size);

export const fontSize = {
  xs: () => fs(FontSizes.xs),
  sm: () => fs(FontSizes.sm),
  base: () => fs(FontSizes.base),
  md: () => fs(FontSizes.md),
  lg: () => fs(FontSizes.lg),
  xl: () => fs(FontSizes.xl),
  '2xl': () => fs(FontSizes['2xl']),
  '3xl': () => fs(FontSizes['3xl']),
  '4xl': () => fs(FontSizes['4xl']),
};

export const useResponsiveDimensions = () => {
  const dimensions = useWindowDimensions();
  SCREEN_WIDTH = dimensions.width;
  SCREEN_HEIGHT = dimensions.height;
  
  return {
    width: dimensions.width,
    height: dimensions.height,
    scale: getScaleFactors(),
    fontScale: getFontScaleFactor(),
  };
};

export const getScreenInfo = () => ({
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  scale: getScaleFactors(),
  fontScale: getFontScaleFactor(),
  statusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  pixelRatio: PixelRatio.get(),
  isAndroid: Platform.OS === 'android',
  isIOS: Platform.OS === 'ios'
});