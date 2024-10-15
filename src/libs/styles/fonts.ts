import { normalize } from './spaces';

const fontSize = {
    superLarge:normalize(35,'height'),
    extraLarge:normalize(27,'height'),
    large: normalize(24, 'height'),
    mediumLarge: normalize(20, 'height'),
    subMediumLarge:normalize(18,'height'),
    heading: normalize(17, 'height'),
    subHeading: normalize(16, 'height'),
    title: normalize(15, 'height'),
    body: normalize(14, 'height'),
    caption: normalize(13, 'height'),
    subCaption: normalize(12, 'height'),
    small: normalize(11, 'height'),
    extraSmall: normalize(11, 'height'),

};

const fontFamily = {
    regular: 'Inter_18pt-Regular',  // 400
    medium: 'Inter_18pt-Medium',  // 500
    semiBold: 'Inter_18pt-SemiBold', // 600
    bold: 'Inter_18pt-Bold', // 700
    extraBold: 'Inter_18pt-ExtraBold',   //800
    black:'Inter_18pt-Black'  // 900
};



export { fontSize,fontFamily };
