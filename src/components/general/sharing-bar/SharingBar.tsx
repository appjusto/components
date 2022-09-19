import { Stack, StackProps } from '@chakra-ui/react';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { ShareLink } from './ShareLink';

const mainUrl = 'https://appjusto.com.br/';
const sharingMsg = encodeURIComponent(
  `AppJusto. Mais do que um app de entregas. Somo um movimento por relações mais justas e transparentes. Faça parte agora!\n\n${mainUrl}`
);

export const SharingBar = ({...props}: StackProps) => {
  return (
    <Stack w="100%" maxW="560px" direction={{ base: 'column', lg: 'row' }} spacing={4} mt="6px" {...props}>
      <Stack w="100%" direction="row" spacing={4}>
        <ShareLink
          link={`https://api.whatsapp.com/send?text=${sharingMsg}`}
          label="Whatsapp"
          icon={FaWhatsappSquare}
        />
        <ShareLink
          link={`https://www.facebook.com/sharer/sharer.php?u=${mainUrl}%3Fsource%3Dsocial.fb&display=page&facebook%2Fclose`}
          label="Facebook"
          icon={FaFacebookSquare}
        />
      </Stack>
      <Stack w="100%" direction="row" spacing={4}>
        <ShareLink
          link={`https://twitter.com/intent/tweet?text=${sharingMsg}`}
          label="Twitter"
          icon={FaTwitterSquare}
        />
        <ShareLink
          link={`https://www.linkedin.com/sharing/share-offsite/?url=${mainUrl}`}
          label="Linkedin"
          icon={FaLinkedin}
        />
      </Stack>
    </Stack>
  );
};