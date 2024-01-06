import React from 'react';

const FilterContext = React.createContext({
  filter: {
    id: null,
    sex: null,
    dateOfBirthInterval: {
      type: null,
      first: null,
      second: null
    },
    educationLevel: null,
    income: {
      type: null,
      first: null,
      second: null
    },
    cities: [],
    hobbies: [],
    habits: [],
    restaurantVisitsPerWeek: {
      type: null,
      first: null,
      second: null
    },
    isMakingPurchasesOnline: null
  },
  setFilter: () => {},
});

export default FilterContext;