import { ColorScheme } from '@vechaiui/react';

const colors = require('tailwindcss/colors');

export const light: ColorScheme = {
  id: 'light',
  type: 'light',
  colors: {
    bg: {
      base: colors.gray['100'],
      fill: colors.gray['100'],
    },
    text: {
      foreground: colors.gray['900'],
      muted: colors.gray['700'],
    },
    primary: colors.sky,
    neutral: colors.gray,
  },
};

export const dark: ColorScheme = {
  id: 'light',
  type: 'dark',
  colors: {
    bg: {
      base: colors.gray['900'],
      fill: colors.gray['800'],
    },
    text: {
      foreground: colors.gray['100'],
      muted: colors.gray['300'],
    },
    primary: colors.sky,
    neutral: colors.gray,
  },
};

export const cool: ColorScheme = {
  id: 'cool',
  type: 'dark',
  colors: {
    bg: {
      base: colors.slate['900'],
      fill: colors.slate['900'],
    },
    text: {
      foreground: colors.slate['100'],
      muted: colors.slate['300'],
    },
    primary: colors.cyan,
    neutral: colors.slate,
  },
};

export const midnight: ColorScheme = {
  id: 'midnight',
  type: 'dark',
  colors: {
    bg: {
      base: colors.neutral['900'],
      fill: colors.neutral['900'],
    },
    text: {
      foreground: colors.neutral['100'],
      muted: colors.neutral['300'],
    },
    primary: colors.rose,
    neutral: colors.neutral,
  },
};

export const pale: ColorScheme = {
  id: 'pale',
  type: 'dark',
  colors: {
    bg: {
      base: colors.slate['900'],
      fill: colors.slate['800'],
    },
    text: {
      foreground: colors.slate['100'],
      muted: colors.slate['300'],
    },
    primary: colors.violet,
    neutral: colors.slate,
  },
};

export const dawn: ColorScheme = {
  id: 'dawn',
  type: 'dark',
  colors: {
    bg: {
      base: '#0f0a13',
      fill: '#28212c',
    },
    text: {
      foreground: '#dad3de',
      muted: '#a89ab0',
    },
    primary: colors.pink,
    neutral: {
      50: '#f6eff8',
      100: '#dad3de',
      200: '#c1b7c7',
      300: '#a89ab0',
      400: '#8f7d99',
      500: '#766380',
      600: '#5c4d64',
      700: '#413647',
      800: '#28212c',
      900: '#0f0a13',
    },
  },
};

export const bee: ColorScheme = {
  id: 'bee',
  type: 'light',
  colors: {
    bg: {
      base: colors.stone['100'],
      fill: colors.stone['100'],
    },
    text: {
      foreground: colors.stone['900'],
      muted: colors.stone['700'],
    },
    primary: colors.amber,
    neutral: colors.stone,
  },
};

export const swiss: ColorScheme = {
  id: 'swiss',
  type: 'light',
  colors: {
    bg: {
      base: colors.stone['100'],
      fill: colors.stone['100'],
    },
    text: {
      foreground: colors.stone['900'],
      muted: colors.stone['700'],
    },
    primary: colors.red,
    neutral: colors.stone,
  },
};

export const configThemes = {
  light,
  dark,
  cool,
  midnight,
  pale,
  dawn,
  bee,
  swiss,
};

export const availableThemes = [
  {
    name: 'Light',
    id: 'light',
    backgroundColor: configThemes.light.colors.bg.base,
    primaryColor: configThemes.light.colors.primary['500'],
  },
  {
    name: 'Dark',
    id: 'dark',
    backgroundColor: configThemes.dark.colors.bg.base,
    primaryColor: configThemes.dark.colors.primary['500'],
  },
  {
    name: 'Cool',
    id: 'cool',
    backgroundColor: configThemes.cool.colors.bg.base,
    primaryColor: configThemes.cool.colors.primary['500'],
  },
  {
    name: 'Midnight',
    id: 'midnight',
    backgroundColor: configThemes.midnight.colors.bg.base,
    primaryColor: configThemes.midnight.colors.primary['500'],
  },
  {
    name: 'Pale',
    id: 'pale',
    backgroundColor: configThemes.pale.colors.bg.base,
    primaryColor: configThemes.pale.colors.primary['500'],
  },
  {
    name: 'Dawn',
    id: 'dawn',
    backgroundColor: configThemes.dawn.colors.bg.base,
    primaryColor: configThemes.dawn.colors.primary['500'],
  },
  {
    name: 'Bee',
    id: 'bee',
    backgroundColor: configThemes.bee.colors.bg.base,
    primaryColor: configThemes.bee.colors.primary['500'],
  },
  {
    name: 'Swiss',
    id: 'swiss',
    backgroundColor: configThemes.swiss.colors.bg.base,
    primaryColor: configThemes.swiss.colors.primary['500'],
  },
];

export const radiusItems = [
  { name: 'none', value: 'none' },
  { name: 'sm', value: '0.125rem' },
  { name: 'md', value: '0.375rem' },
  { name: 'lg', value: '0.5rem' },
  { name: 'xl', value: '0.75rem' },
  { name: 'full', value: '9999px' },
];
