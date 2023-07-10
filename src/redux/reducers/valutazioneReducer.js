const initialState = [];

const valutazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case "valutazione/AGGIUNGI_VALUTAZIONE":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default valutazioniReducer;
