const color = {
  red: '#fb6363',
  orange: '#ff7302',
  yellow: '#f6c72f',
  blue: '#32c6e6',
  darkblue: '#7578d8',
  cyan: '#0fcabf',
  green: '#6ad869',
  purple: '#c481ec',
  grey: '#d8d8d8',
  darkgrey: '#323232',
  pink: '#ff85c0',
};

export const theme = {
  breakpoint: {
    xl: '1200px',
    lg: '992px',
    md: '768px',
    sm: '576px',
  },
  colors: {
    red: color.red,
    orange: color.orange,
    yellow: color.yellow,
    blue: color.blue,
    darkblue: color.darkblue,
    cyan: color.cyan,
    green: color.green,
    purple: color.purple,
  },
  // ! Must match constants from utils/constants.js
  mood: {
    happy: color.yellow,
    energetic: color.pink,
    grumpy: color.red,
    average: color.green,
    anxious: color.blue,
    annoyed: color.purple,
    sad: color.darkblue,
    depressed: color.darkgrey,
    'sick/tired': color.grey,
  },
};
