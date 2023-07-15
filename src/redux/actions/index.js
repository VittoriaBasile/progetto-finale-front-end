export const ADD_TO_PREFERITI = "ADD_TO_PREFERITI";
export const REMOVE_FROM_PREFERITI = "REMOVE_FROM_PREFERITI";
export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const GET_ANNUNCI = "GET_ANNUNCI";
export const GET_DETTAGLIO = "GET_DETTAGLIO";
export const GET_COMMENTI = "GET_COMMENTI";
export const ADD_COMMENTO = "ADD_COMMENTO";
export const GET_VALUTAZIONI = "GET_VALUTAZIONI";
export const GET_VALUTAZIONE = "GET_VALUTAZIONE";
export const GET_VALUTAZIONE_MEDIA = "GET_VALUTAZIONE_MEDIA";
export const MODIFICA_COMMENTO = "MODIFICA_COMMENTO";
export const ELIMINA_COMMENTO = "ELIMINA_COMMENTO";
export const CREA_PRENOTAZIONE = "CREA_PRENOTAZIONE";
export const GET_PRENOTAZIONI = "GET_PRENOTAZIONI";

export const aggiungiValutazioneAction = (payload) => {
  return async (dispatch) => {
    const urlValutazione = `http://localhost:3001/valutazioni`;
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(urlValutazione, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const valutazione = await response.json();
        console.log(valutazione);
        dispatch({
          type: "valutazione/AGGIUNGI_VALUTAZIONE",
          payload: valutazione,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getValutazioniPerAnnuncioAction = (nomeAnnuncio) => {
  return async (dispatch) => {
    const urlValutazione = `http://localhost:3001/valutazioni/nomeAnnuncio?nomeAnnuncio=${nomeAnnuncio}`;
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(urlValutazione, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const valutazioni = await response.json();
        console.log(valutazioni);
        dispatch({
          type: GET_VALUTAZIONI,
          payload: valutazioni,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getValutazionePerAnnuncioAndUserAction = (nomeAnnuncio, email) => {
  return async (dispatch) => {
    const urlValutazione = `http://localhost:3001/valutazioni/${nomeAnnuncio}/user/${email}`;
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(urlValutazione, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const valutazione = await response.json();

        dispatch({
          type: GET_VALUTAZIONE,
          payload: valutazione,
        });
      }
    } catch (error) {
      console.log(error);
    }
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
        if (commenti.length === 0) {
          commenti = [];
        }

        dispatch({ type: GET_COMMENTI, payload: commenti });
      } else if (resp.status === 404) {
        dispatch({ type: GET_COMMENTI, payload: [] });
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

export const modificaCommentoAction = (commentoId, payload) => {
  const url = `http://localhost:3001/commenti/me/` + commentoId;
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        let commento = await response.json();

        dispatch({ type: MODIFICA_COMMENTO, payload: commento });
        dispatch(getCommentiAction(payload.nomeAnnuncio));
      }
    } catch (error) {
      alert(error);
    }
  };
};

export const eliminaCommentoAction = (commento) => {
  const url = `http://localhost:3001/commenti/me/` + commento.id;
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        dispatch({ type: ELIMINA_COMMENTO, payload: commento.id });
        dispatch(getCommentiAction(commento.annuncio.nome));
      }
    } catch (error) {
      alert(error);
    }
  };
};

export const creaPrenotazioneAction = (payload) => {
  const url = `http://localhost:3001/prenotazioni`;
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
        let prenotazione = await response.json();

        dispatch({ type: CREA_PRENOTAZIONE, payload: prenotazione });
      }
    } catch (error) {
      alert(error);
    }
  };
};

export const getPrenotazioniPerDataInizioAndAnnuncioAction = (nomeAnnuncio) => {
  const url = `http://localhost:3001/prenotazioni/${nomeAnnuncio}`;
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let prenotazioni = await resp.json();
        dispatch({ type: GET_PRENOTAZIONI, payload: prenotazioni });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
