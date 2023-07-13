export const ADD_TO_PREFERITI = "ADD_TO_PREFERITI";
export const REMOVE_FROM_PREFERITI = "REMOVE_FROM_PREFERITI";
export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const GET_ANNUNCI = "GET_ANNUNCI";
export const GET_DETTAGLIO = "GET_DETTAGLIO";
export const GET_COMMENTI = "GET_COMMENTI";
export const ADD_COMMENTO = "ADD_COMMENTO";
export const aggiungiValutazioneAction = (userEmail, annuncioId, punteggio) => {
  return {
    type: "valutazione/AGGIUNGI_VALUTAZIONE",
    payload: {
      userEmail,
      annuncioId,
      punteggio,
    },
  };
};

export const getUserLoggedAction = () => {
  const token = localStorage.getItem("token");
  const url = "http://localhost:3001/users/me";
  return async (dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();
        localStorage.setItem("email", data.email);
        dispatch({ type: GET_USER_LOGGED, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getAnnunciAction = (url) => {
  const token = localStorage.getItem("token");

  return async (dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let annunci = await resp.json();
        annunci.content.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_ANNUNCI, payload: annunci.content });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDettagioAction = (url) => {
  const token = localStorage.getItem("token");

  return async (dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let annuncio = await resp.json();
        dispatch({ type: GET_DETTAGLIO, payload: annuncio });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCommentiAction = (nomeAnnuncio) => {
  const url = `http://localhost:3001/commenti/nomeAnnuncio?nomeAnnuncio=${nomeAnnuncio}`;
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let commenti = await resp.json();

        dispatch({ type: GET_COMMENTI, payload: commenti });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const aggiungiCommentoAction = (payload) => {
  const url = `http://localhost:3001/commenti`;
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let commento = await response.json();

        dispatch({ type: ADD_COMMENTO, payload: commento });
        dispatch(getCommentiAction(payload.nomeAnnuncio));
      }
    } catch (error) {
      alert(error);
    }
  };
};
