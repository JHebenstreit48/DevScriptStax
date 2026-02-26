import materialLight from 'react-syntax-highlighter/dist/esm/styles/prism/material-light';

export const darkGrayTheme = {
  ...materialLight,
  'pre[class*="language-"]': {
    ...materialLight['pre[class*="language-"]'],
    background: 'rgb(29, 31, 33)',
    boxShadow: 'none',
    padding: '1rem'
  },
  'code[class*="language-"]': {
    ...materialLight['code[class*="language-"]'],
    background: 'rgb(29, 31, 33)',
    color: '#fff',
    padding: '1rem'
  }
};