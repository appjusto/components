import { Image, ImageProps } from '@chakra-ui/react';

interface MarkerProps extends ImageProps {
  lat: number;
  lng: number;
  icon?: string;
}

export const MapsMarker = ({
  icon,
  w = '32px',
  h = '40px',
  mt = '-26px',
  ml = '-17px',
  ...props
}: MarkerProps) => {
  return <Image src={icon} {...props} />;
};
