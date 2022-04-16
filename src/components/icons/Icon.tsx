import {
  IconCodepen,
  IconExternalLink,
  IconGithub,
  IconLinkedin,
} from '@components/icons';

interface IconProps {
  name: string;
}

export default function Icon({ name }: IconProps) {
  switch (name) {
    case 'CodePen':
      return <IconCodepen />;
    case 'Link':
      return <IconExternalLink />;
    case 'GitHub':
      return <IconGithub />;
    case 'LinkedIn':
      return <IconLinkedin />;
    default:
      return <IconExternalLink />;
  }
}
