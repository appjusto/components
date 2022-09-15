import { ScheduleObject } from '@appjusto/types';
import { Flex, HStack, Link, RadioGroup } from '@chakra-ui/react';
import { PatternInput } from '../form/input/pattern-input/PatternInput';
import {
  timeFormatter,
  TimeMask,
} from '../form/input/pattern-input/formatters';
import { numbersOnlyParser } from '../form/input/pattern-input/parsers';
import React from 'react';
import { Checkbox } from '../form/Checkbox';
import { Radio } from '../form/Radio';

export type Break = 'break' | 'no-break';

interface DayScheduleProps {
  index: number;
  day: ScheduleObject;
  noBreakLabel?: string;
  breakLabel?: string;
  startLabel?: string;
  endLabel?: string;
  replicateLabel?: string;
  handleCheck(value: boolean): void;
  handleBreak(value: Break): void;
  onChangeValue(index: number, field: string, value: string): void;
  autoCompleteSchedules(index: number, field: string, value: string): void;
  replicate(): void;
}

export const DaySchedule = ({
  index,
  day,
  noBreakLabel = 'Sem pausa',
  breakLabel = 'O restaurante faz uma pausa durante o dia',
  startLabel = 'Início',
  endLabel = 'Término',
  replicateLabel = 'Replicar horário anterior',
  handleCheck,
  handleBreak,
  onChangeValue,
  autoCompleteSchedules,
  replicate,
}: DayScheduleProps) => {
  // props
  const { day: weekDay, checked, schedule } = day;
  // state
  const [breakValue, setBreakValue] = React.useState<Break>('no-break');
  // helpers
  const weekDayLowerCase = weekDay.toLowerCase();
  // handlers
  const inputValidation = (from: string, to: string, beforeTo?: string) => {
    if (from === '' || to === '') return true;
    if (from.length < 4 || to.length < 4) return true;
    if (beforeTo && beforeTo > from) return false;
    return Number(from) < Number(to);
  };
  // side effects
  React.useEffect(() => {
    if (schedule.length > 1) {
      setBreakValue('break');
    } else {
      setBreakValue('no-break');
    }
  }, [schedule]);
  return (
    <Flex flexDir="column" mt="8">
      <Checkbox
        aria-label={`${weekDayLowerCase}-checkbox`}
        width="120px"
        colorScheme="green"
        size="lg"
        spacing="1rem"
        iconSize="1rem"
        isChecked={checked}
        onChange={(e) => handleCheck(e.target.checked)}
      >
        {weekDay}
      </Checkbox>
      {checked && (
        <RadioGroup
          mt="2"
          onChange={(value: Break) => handleBreak(value)}
          value={breakValue}
          defaultValue="1"
          colorScheme="green"
          color="black"
        >
          <Flex flexDir="column" justifyContent="flex-start">
            <Radio
              mt="2"
              value="no-break"
              aria-label={`${weekDayLowerCase}-no-break`}
            >
              {noBreakLabel}
            </Radio>
            <Radio
              mt="2"
              value="break"
              aria-label={`${weekDayLowerCase}-break`}
            >
              {breakLabel}
            </Radio>
          </Flex>
        </RadioGroup>
      )}
      {checked && (
        <HStack spacing={4}>
          {schedule.map((item, index) => {
            let beforeTo = undefined;
            if (index === 1) beforeTo = schedule[0].to;
            return (
              <Flex key={index * 3} flexDir="row" maxW="310px">
                <PatternInput
                  w="100%"
                  maxW="150px"
                  id={`${weekDayLowerCase}-from-${index}`}
                  label={startLabel}
                  aria-label={`${weekDayLowerCase}-from-${index}`}
                  value={item.from}
                  validationLength={4}
                  onValueChange={(value) => onChangeValue(index, 'from', value)}
                  placeholder="00:00"
                  mask={TimeMask}
                  formatter={timeFormatter}
                  parser={numbersOnlyParser}
                  onBlur={() => autoCompleteSchedules(index, 'from', item.from)}
                  isInvalid={!inputValidation(item.from, item.to, beforeTo)}
                  isRequired
                />
                <PatternInput
                  w="100%"
                  ml="2"
                  maxW="200px"
                  id={`${weekDayLowerCase}-to-${index}`}
                  label={endLabel}
                  aria-label={`${weekDayLowerCase}-to-${index}`}
                  value={item.to}
                  validationLength={4}
                  onValueChange={(value) => onChangeValue(index, 'to', value)}
                  placeholder="00:00"
                  mask={TimeMask}
                  formatter={timeFormatter}
                  parser={numbersOnlyParser}
                  onBlur={() => autoCompleteSchedules(index, 'to', item.to)}
                  isInvalid={!inputValidation(item.from, item.to, beforeTo)}
                  isRequired
                />
              </Flex>
            );
          })}
        </HStack>
      )}
      {index > 0 && (
        <Link
          mt="2"
          width="160px"
          color="green.600"
          fontSize="xs"
          fontWeight="700"
          onClick={replicate}
          aria-label={`${weekDayLowerCase}-replication-link`}
        >
          {replicateLabel}
        </Link>
      )}
    </Flex>
  );
};
