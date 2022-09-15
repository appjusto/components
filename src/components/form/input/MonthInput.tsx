import { FaRegCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import React from 'react';

interface MonthOptionBoxProps {
  id: number;
  label: string;
  onSelect(id: number): void;
  isSelected?: boolean;
}

const MonthOptionBox = ({ id, label, onSelect, isSelected }: MonthOptionBoxProps) => {
  return (
    <Box
      px="4"
      py="2"
      bgColor={isSelected ? 'gray.200' : ''}
      _hover={{ bgColor: 'gray.300' }}
      cursor="pointer"
      onClick={() => onSelect(id)}
    >
      {label}
    </Box>
  );
};

interface MonthInputProps extends InputProps {
  id: string;
  label?: string;
  monthLabels?: string[];
  getMonthName(month: number): string;
  dateValue: Date | null;
  handleChange: (date: Date | null) => void;
}

export const MonthInput = React.forwardRef<HTMLInputElement, MonthInputProps>(
  (
    {
      id,
      label,
      monthLabels = [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      getMonthName,
      dateValue,
      handleChange,
      maxW,
      mt = '16px',
      mb,
      mr,
      ml,
      flex,
      ...props
    }: MonthInputProps,
    ref
  ) => {
    // props
    const styles = useMultiStyleConfig('CustomInput', {});
    const controlProps = { maxW, mt, mb, mr, ml, flex };
    // state
    const [isOpen, setIsOpen] = React.useState(false);
    const [valueStr, setValueStr] = React.useState('');
    const [year, setYear] = React.useState<number>();
    const [month, setMonth] = React.useState<number>();
    // handlers
    const open = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);
    const handleYear = (type: 'inc' | 'dec') => {
      if (!year || !month) return;
      if (type === 'inc') setYear((prev) => prev! + 1);
      else setYear((prev) => prev! - 1);
    };
    const handleMonth = (id: number) => {
      if (!year) return;
      handleChange(new Date(year, id, 1));
      return close();
    };
    // side effects
    React.useEffect(() => {
      if (!dateValue) return;
      const yearNumber = dateValue.getFullYear();
      const monthNumer = dateValue.getMonth();
      const month = getMonthName(monthNumer);
      setYear(yearNumber);
      setMonth(monthNumer);
      setValueStr(`${month} de ${yearNumber}`);
    }, [dateValue]);
    // UI
    return (
      <Popover placement="bottom" closeOnBlur={true} isOpen={isOpen} onClose={close}>
        <PopoverTrigger>
          <FormControl id={id} sx={styles.control} {...controlProps}>
            {label && <FormLabel sx={styles.label}>{label}</FormLabel>}
            <InputGroup>
              <Input
                ref={ref}
                value={valueStr}
                sx={styles.input}
                onClick={open}
                readOnly
                {...props}
              />
              <InputRightElement
                onClick={open}
                cursor="pointer"
                children={<Icon as={FaRegCalendar} mt="10" />}
              />
            </InputGroup>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent borderColor="gray.200" _focus={{ outline: 'none' }}>
          <PopoverHeader
            pt={4}
            fontWeight="bold"
            bgColor="gray.400"
            border="0"
            display="flex"
            justifyContent="center"
          >
            <HStack spacing={6}>
              <Icon as={FaChevronLeft} onClick={() => handleYear('dec')} cursor="pointer" />
              <Text>{year}</Text>
              <Icon as={FaChevronRight} onClick={() => handleYear('inc')} cursor="pointer" />
            </HStack>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverBody display="flex" flexDir="column" alignItems="center" pb="4">
            <HStack mt="1" spacing={1}>
              <MonthOptionBox
                id={0}
                label={monthLabels[0]}
                onSelect={handleMonth}
                isSelected={month === 0}
              />
              <MonthOptionBox
                id={1}
                label={monthLabels[1]}
                onSelect={handleMonth}
                isSelected={month === 1}
              />
              <MonthOptionBox
                id={2}
                label={monthLabels[2]}
                onSelect={handleMonth}
                isSelected={month === 2}
              />
              <MonthOptionBox
                id={3}
                label={monthLabels[3]}
                onSelect={handleMonth}
                isSelected={month === 3}
              />
            </HStack>
            <HStack mt="1" spacing={1}>
              <MonthOptionBox
                id={4}
                label={monthLabels[4]}
                onSelect={handleMonth}
                isSelected={month === 4}
              />
              <MonthOptionBox
                id={5}
                label={monthLabels[5]}
                onSelect={handleMonth}
                isSelected={month === 5}
              />
              <MonthOptionBox
                id={6}
                label={monthLabels[6]}
                onSelect={handleMonth}
                isSelected={month === 6}
              />
              <MonthOptionBox
                id={7}
                label={monthLabels[7]}
                onSelect={handleMonth}
                isSelected={month === 7}
              />
            </HStack>
            <HStack mt="1" spacing={1}>
              <MonthOptionBox
                id={8}
                label={monthLabels[8]}
                onSelect={handleMonth}
                isSelected={month === 8}
              />
              <MonthOptionBox
                id={9}
                label={monthLabels[9]}
                onSelect={handleMonth}
                isSelected={month === 9}
              />
              <MonthOptionBox
                id={10}
                label={monthLabels[10]}
                onSelect={handleMonth}
                isSelected={month === 10}
              />
              <MonthOptionBox
                id={11}
                label={monthLabels[11]}
                onSelect={handleMonth}
                isSelected={month === 11}
              />
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
);
