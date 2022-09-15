import { Cuisine, WithId } from '@appjusto/types';
import { SelectProps } from '@chakra-ui/react';
import { Select } from './Select';
import React from 'react';

interface CuisineSelectProps extends SelectProps {
  cuisines: WithId<Cuisine>[];
  label?: string;
}

export const CuisineSelect = React.forwardRef<HTMLSelectElement, CuisineSelectProps>(
  (
    {
      cuisines, 
      label = 'Tipo de cozinha *', 
      placeholder = 'Selecione o tipo de cozinha oferecido', 
      ...props
    }: CuisineSelectProps, ref
  ) => {
  // UI
  return (
    <Select
      ref={ref}
      label={label}
      placeholder={placeholder}
      {...props}
    >
      {cuisines.map((cuisine) => (
        <option key={cuisine.id} value={cuisine.name}>
          {cuisine.name}
        </option>
      ))}
    </Select>
  );
});
