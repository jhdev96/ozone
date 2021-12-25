import React, { useState } from 'react';
import {FormMenu} from '@jhdev96/ozone';
import {Button} from '@jhdev96/ozone';
import {ButtonRow} from '@jhdev96/ozone';
import {Section} from '@jhdev96/ozone';


interface Props {
  /** major form sections */
  stages: string[];
}

export default function FormMenuExample({stages}: Props): JSX.Element 
{
  const [activeStage, setActiveStage] = useState(0);

  const handleStageChange = () => {
    if (activeStage === stages.length - 1) {
      setActiveStage(0);
    } else {
        setActiveStage(activeStage + 1);
    }
  }

  const setStageTo = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    setActiveStage(stages.indexOf(target.textContent));
  }

  return (
    <div style={{display: 'inline-flex'}}>
      <div style={{width: '30%'}}>
        <FormMenu activeItem={stages[activeStage]}>
          {stages.map((stage, idx) => (
            <FormMenu.Item
              key={idx} 
              onClick={
                (e: React.MouseEvent) => setStageTo(e)
              }
            >
              {stage}
            </FormMenu.Item>
          ))}
        </FormMenu>
      </div>
      <div style={{paddingLeft: '20px', width: '70%'}}>
        <Section title={stages[activeStage]}>
          <ButtonRow placement="right">
            <Button 
              variation="primary" 
              onClick={handleStageChange}
              flat
            >
              Continue
            </Button>
          </ButtonRow>
        </Section>
      </div>
    </div>
  )
}