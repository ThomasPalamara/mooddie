const color = {
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#ffec3d',
  blue: '#1890ff',
  darkblue: '#1d39c4',
  cyan: '#13c2c2',
  green: '#52c41a',
  purple: '#722ed1',
  grey: '#d8d8d8',
  darkgrey: '#323232',
  pink: '#ff85c0',
};

export const theme = {
  breakpoints: {
    lg: '1200px',
    md: '1200px',
    sm: '1200px',
    xs: '1200px',
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
