import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'mailto:dgomez0728@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
 {
 link: 'https://www.linkedin.com/in/jdgg777',
 label: 'LinkedIn',
 icon: faLinkedinIn,
 },
 {
 link: 'https://github.com/jdgg777',
 label: 'Github',
 icon: faGithub,
 },
];

export default data;
