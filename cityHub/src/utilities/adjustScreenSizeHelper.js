import {PixelRatio, Dimensions, Platform} from 'react-native';
export function normalize(size) {
 const {width} = Dimensions.get('window');
 let guidelineBaseWidth = 375
 const scale = width / guidelineBaseWidth;
 const newSize = size * scale;
 return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

