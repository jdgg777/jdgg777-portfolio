export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Colombia National University',
    degree: 'Bachelor in Management Engineering',
    link: 'https://unal.edu.co',
    year: 2016,
  },
];

export default degrees;
