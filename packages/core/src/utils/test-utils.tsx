import React from "react";


interface TestProps {
  dataTestId?: string;
}

export function DummyTestComponent({
  dataTestId = "test"
}: TestProps): JSX.Element 
{
  return (
    <span data-testid={dataTestId}>
      Hello
    </span>
  )
}

export function mockRefCurrent(currentProperties?: object) 
{
  const ref = {current: currentProperties};
  
  jest.spyOn(React, 'useRef').mockImplementation(() => {
    return ref;
  });
}