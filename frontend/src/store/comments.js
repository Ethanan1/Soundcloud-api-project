import { csrfFetch } from "./csrf";

//variables
const LOAD_COMMENTS = "load/LOAD_COMMENTS";
const ADD_COMMENT = "add/ADD_COMMENT";
const DELETE_COMMENT = "delete/DELETE_COMMENT";
const EDIT_COMMENT = "edit/EDIT_COMMENT";

//actions
const loadComments = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments,
  };
};

const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment,
  };
};

export const deleteComment = (id) => { //commentId
  return {
    type: DELETE_COMMENT,
    id,
  };
};

//Thunks
export const loadAllComments = () => async (dispatch) => {
  const res = await csrfFetch("/api/comments"); //get comments
  console.log(res, "RESPONSE");
  if (res.ok) { // if response status code is less than 400
    // dispatch the receive fruits POJO action
    const comments = await res.json();
    console.log(comments, "LOADED COMMENTS");
    dispatch(loadComments(comments.comments)); //sent to reducer
  }
};

export const loadSongComments = (song) => async (dispatch) => {
    console.log(song, 'THE SONGGGGG') // ? ? ??
  const res = await csrfFetch(`/api/songs/${song.id}/comments`); //get commment from songId
  console.log(res, "SONG COMMENT RESPONSE");
  if (res.ok) { // if response status code is less than 400
    // dispatch the receive fruits POJO action
    const songComments = await res.json();
    console.log(songComments, "SONG COMMENTS");
    dispatch(loadComments(songComments)); //sent to reducer
  }
};

export const updateComment = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${payload.id}`, { //get payload from comment
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) { // if response status code is less than 400
    // dispatch the receive fruits POJO action
    const comment = await res.json();
    dispatch(editComment(comment)); //sent to reducer
    return comment;
  }
};

export const removeComment = (commentId) => async (dispatch) => {
    console.log(commentId, 'Remove Song THUNK hits')
    const res = await csrfFetch(`/api/comments/${commentId}`, { //get commentId from coment
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) { // if response status code is less than 400
      // dispatch the receive fruits POJO action
      dispatch(deleteComment(commentId)); //sent to recducer
    }
  };


const initialState = {};

const commentReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_COMMENT:
      newState[action.payload.id] = action.payload;
      console.log(newState, "hi new state");
      return newState;
    case LOAD_COMMENTS:
      action.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case DELETE_COMMENT:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
