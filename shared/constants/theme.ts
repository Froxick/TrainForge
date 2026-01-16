import { ColorsType } from "../types/ColorsType";


export const Colors : {
  light : ColorsType,
  dark : ColorsType
} = {
  light: {
    text: '#1C1C1C',
    textSecondary: '#5F5F5F',

    background: '#F4F4F4',
    surface: '#FFFFFF',
    border: '#E0E0E0',

    primary: '#D35400',        
    secondary: '#E67E22',

    icon: '#2C2C2C',

    tabIconDefault: '#8A8A8A',
    tabIconSelected: '#D35400',

    success: '#2E7D32',
    warning: '#F9A825',
    danger: '#C62828',

    rpeLow: '#2E7D32',
    rpeMedium: '#F9A825',
    rpeHigh: '#C62828',
  },
  dark: {
    text: '#F2F2F2',
    textSecondary: '#A1A1A1',

    background: '#121212',    
    surface: '#1E1E1E',       
    border: '#2A2A2A',

    primary: '#FF6A00',        
    secondary: '#FF8C42',

    icon: '#E0E0E0',

    tabIconDefault: '#777777',
    tabIconSelected: '#FF6A00',

    success: '#4CAF50',
    warning: '#FFB300',
    danger: '#E53935',

    rpeLow: '#4CAF50',
    rpeMedium: '#FFB300',
    rpeHigh: '#E53935',
  },
};
