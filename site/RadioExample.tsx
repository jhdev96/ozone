import React, { useState } from 'react';
import {RadioInput} from '@jhdev96/ozone';


export default function RadioExample(): JSX.Element 
{
  const [selectedID, setSelectedID] = useState('optionA');
  return (
    <div>
      <RadioInput 
        name="optionA" 
        onChange={(checked, name) => setSelectedID(name)} 
        isChecked={selectedID === 'optionA'}
        >
          Option A
      </RadioInput>
      <RadioInput 
        name="optionB" 
        onChange={(checked, name) => setSelectedID(name)} 
        isChecked={selectedID === 'optionB'}
        >
          Option B
      </RadioInput>
      <RadioInput 
        name="optionC" 
        onChange={(checked, name) => setSelectedID(name)} 
        isChecked={selectedID === 'optionC'}
        >
          Option C
      </RadioInput>
    </div>
  )
}
