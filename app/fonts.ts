import { Sedgwick_Ave_Display, Roboto } from 'next/font/google';

export const sedgwick = Sedgwick_Ave_Display({
  weight: '400',
  subsets: ['latin']
});

export const roboto = Roboto({
  weight: ['300','400','700'],
  subsets: ['latin']
})