import dayjs from 'dayjs';
import React, {createContext, useReducer, useContext} from 'react';

// Define the state shape
interface AppState {
  city: string;
  setCity: (value: string) => void;
  selectedSlot: string;
  setSelectedSlot: (value: string) => void;
  selectedDate: string;
  setSelectedDate: (value: string) => void;
}

// Define the action types
type Action =
  | {type: 'SET_CITY'; payload: string}
  | {type: 'SET_SLOT'; payload: string}
  | {type: 'SET_DATE'; payload: string};

// Define the initial state
const initialState: AppState = {
  city: '',
  setCity: () => {
    //
  },
  selectedSlot: '',
  setSelectedSlot: () => {
    //
  },
  selectedDate: dayjs().format('DD/MM/YYYY'),
  setSelectedDate: () => {},
};

// Define the reducer function
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_CITY':
      return {...state, city: action.payload};
    case 'SET_SLOT':
      return {...state, selectedSlot: action.payload};
    case 'SET_DATE':
      return {...state, selectedDate: action.payload};
    default:
      return state;
  }
};

const AppContext = createContext<AppState | undefined>(undefined);

// Define the provider component
const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Define the openDrawer function
  const setCity = (value: string) => {
    dispatch({type: 'SET_CITY', payload: value});
  };

  const setSelectedSlot = (value: string) => {
    dispatch({type: 'SET_SLOT', payload: value});
  };

  const setSelectedDate = (value: string) => {
    dispatch({type: 'SET_DATE', payload: value});
  };

  // Define the context value
  const contextValue = {
    ...state,
    setCity,
    setSelectedSlot,
    setSelectedDate,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Define a custom hook to access the context
export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within the AppProvider');
  }
  return context;
};

export default AppProvider;
