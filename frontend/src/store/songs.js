import { csrfFetch } from "./csrf";


const LOAD_SONGS = "load/LOAD_SONGS";
const ADD_SONG = "add/ADD_SONG";
const DELETE_SONG = "delete/DELETE_SONG";
const EDIT_SONG = "edit/EDIT_SONG";
const ADD_COMMENT = "add/ADD_COMMENT";


const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

const loadSongs = (songs) => {
  return {
    type: LOAD_SONGS,
    songs,
  };
};

const addSong = (payload) => {
  return {
    type: ADD_SONG,
    payload,
  };
};

const editSong = (song) => {
  return {
    type: EDIT_SONG,
    song
  };
};

export const deleteSong = (id) => {
  return {
    type: DELETE_SONG,
    id
  }
}


export const createComment =  (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${payload.songId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const comment = await res.json();
      dispatch(addComment(comment));
      return comment;
    }
  };



export const getSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs");
  if (res.ok) {
    const songs = await res.json();
    dispatch(loadSongs(songs.allSongs));
  }
};

export const getUserSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs/current");
  if (res.ok) {
    const songs = await res.json();
    dispatch(loadSongs(songs));
  }
};



export const createSong = (payload) => async (dispatch) => {
  const res = await csrfFetch("/api/songs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const song = await res.json();
    dispatch(addSong(song));
    return song;
  }
  return res
};

export const updateSong = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${payload.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const song = await res.json();
    dispatch(editSong(song));
    return song;
  }
  return res
};

export const removeSong = (songId) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${songId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (res.ok) {
    dispatch(deleteSong(songId));
  }
};
const initialState = {};

const songReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_SONGS:
      action.songs.forEach((song) => {
        newState[song.id] = song;
      });
      console.log(newState, "new state");
      return newState;
    case ADD_SONG:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_SONG:
      delete newState[action.id];
      return newState;
    case EDIT_SONG:
      newState[action.song.id] = action.song;
      return newState;
    default:
      return state;
  }
};

export default songReducer;
