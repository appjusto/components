import { SelectProps } from '@chakra-ui/react';
import { Select } from './Select';
import React from 'react';
import { Bank, WithId } from '@appjusto/types';

interface BankSelectprops extends SelectProps {
  banks: WithId<Bank>[];
  label?: string;
}

export const BankSelect = React.forwardRef<HTMLSelectElement, BankSelectprops>(
  ({ banks, label = 'Banco *', placeholder = 'Selecione seu banco', ...props }: BankSelectprops, ref) => {
    // UI
    return (
      <Select ref={ref} label={label} placeholder={placeholder} {...props}>
        {banks.map((bank) => (
          <option key={bank.id} value={bank.name}>
            {bank.name}
          </option>
        ))}
      </Select>
    );
  }
);
