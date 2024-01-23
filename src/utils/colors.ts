const commonColors = {
  colors: {
    textGray: '#747476',
    textNumber: '#17171B99',
    white: '#FFFFFF',
    black: '#000000',
    indicator: '#bb5533',
  },
};

const light = {
  colors: {
    themeColor: '#FFFFFF',
    textColor: '#000000',
    indicatorContainer: '#fff',
    ...commonColors.colors,
  },
};

const dark = {
  colors: {
    themeColor: '#121212',
    textColor: '#FFFFFF',
    indicatorContainer: '#000',
    ...commonColors.colors,
  },
};

export default { light, dark };
