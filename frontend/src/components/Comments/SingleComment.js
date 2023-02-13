import CommentList from "./CommentList";
import "./Comments.css";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "../../store/comments";

const SingleComment = ({ comment }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const handleDelete = (e) => {
    e.preventDefault();

    if (!currentUser) return window.alert("Please Login"); //if no user req login, throw alert
    if (currentUser.id !== comment.userId) { //if currentUser does not match user of comment, throw alert
      return window.alert("You do not have access to delete this comment");
    } else {

      dispatch(removeComment(comment.id)); //dispatch action if above criteria not met. Action will hit reducewr and update React components
    }

  };

console.log(currentUser.id === comment.userId)


  return currentUser.id === comment.userId ?
  <button onClick={handleDelete}>Delete</button>
: null
};

export default SingleComment;
