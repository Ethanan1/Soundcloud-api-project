import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

const EditCommentForm = () => {
  const { commentId } = useParams();

  const comments = useSelector((state) => state.comments);
  const comment = comments[commentId];

  return <CommentForm comment={comment} formType="Edit Comment" />;
};
export default EditCommentForm;
