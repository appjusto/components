import { Button, ButtonProps, HStack, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsappButtonProps extends ButtonProps {
  label: string;
  phone: string;
  linkPattern?: string;
  align?: 'left' | 'right';
}

export const WhatsappButton = React.forwardRef<HTMLButtonElement, WhatsappButtonProps>(
  ({ label, phone, linkPattern = 'https://wa.me/+55', align, ...props }, ref) => {
    const fullLink = `${linkPattern}${phone}`;
    return (
      <Link href={fullLink} isExternal _hover={{ textDecor: 'none' }}>
        <Button ref={ref} display="block" variant="outgreen" {...props}>
          <HStack>
            <Text as="span">{label}</Text>
            <Icon as={FaWhatsapp} />
          </HStack>
        </Button>
      </Link>
    );
  }
);
