import {createContext, useContext, useState} from 'react';

interface CounterState {
  count: number;
}

interface CounterContextProps {
  increment: (count: number) => void;
  decrement: (count: number) => void;
  counter: CounterState;
}

const CounterContext = createContext<CounterContextProps | undefined>(
  undefined,
);

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within an CounterContextProvider');
  }
  return context;
};

const CounterContextProvider = ({children}: {children: React.ReactNode}) => {
  const [counter, setCounter] = useState<CounterState>({count: 0});

  const increment = (count: number) => {
    console.log(count);
    setCounter({...counter, count: counter.count + count});
  };

  const decrement = (count: number) => {
    console.log(count);
    setCounter({...counter, count: counter.count - count});
  };

  return (
    <CounterContext.Provider value={{increment, decrement, counter: counter}}>
      {children}
    </CounterContext.Provider>
  );
};
export default CounterContextProvider;
