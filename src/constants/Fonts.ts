// Font family
const light = 'Poppins-Light';
const regular = 'Poppins-Regular';
const medium = 'Poppins-Medium';
const bold = 'Poppins-SemiBold';

// Export font size
export const sizes = {
  // global sizes
  base: 4,
  radius: 8,
  font: 16,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
};

// Export lineheights
export const lineHeights = {
  base: 20,
  h1: 43,
  h2: 33,
  h3: 28,
  h4: 23,
  h5: 20,
  h6: 17,
};

// Export font family
export default {
  light: {
    fontFamily: light,
  },
  regular: {
    fontFamily: regular,
  },

  medium: {
    fontFamily: medium,
  },

  bold: {
    fontFamily: bold,
  },

  android: {
    regular: {
      fontFamily: 'sans-serif',
    },
    light: {
      fontFamily: 'sans-serif-light',
    },
    condensed: {
      fontFamily: 'sans-serif-condensed',
    },
    condensed_light: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'light',
    },
    black: {
      // note(brentvatne): sans-serif-black is only supported on Android 5+,
      // we can detect that here and use it in that case at some point.
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
  },
  default: {},
};
