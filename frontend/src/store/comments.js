import { csrfFetch } from "./csrf";
//test/
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

export const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    id,
  };
};

export const loadAllComments = () => async (dispatch) => {
  const res = await csrfFetch("/api/comments");
    if (res.ok) {
      dispatch(loadComments(await res.json().comments));
    }
};

export const loadSongComments = (song) => async (dispatch) => {
  const res = await csrfFetch(`/api/songs/${song.id}/comments`);
    if (res.ok) {
      dispatch(loadComments(await res.json()));
    }
};

export const updateComment = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${payload.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(editComment(comment)); //sent to reducer
    return comment;
  }
};

export const removeComment = (commentId) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${commentId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      dispatch(deleteComment(commentId));
    }
  };


const initialState = {};

const commentReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_COMMENT:
      newState[action.payload.id] = action.payload;
      console.log(newState, "new state");
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
