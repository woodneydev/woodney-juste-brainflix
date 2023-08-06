import "./Comments.scss";
import ProfilePic from "../ProfilePic/ProfilePic.js";
import Button from "../Button/Button.js";
import addCommentIcon from "../../assets/images/icons/add_comment.svg";

const Comments = ({ comments }) => {
  const elements = comments.map((comment) => {
    return (
      <div className="comment" key={comment.id} >
        <div className="comment__img"></div>
        <div className="comment__details">
          <div className="comment__details-header">
            <p className="comment__details-header-name">{comment.name}</p>
            <p className="comment__details-header-date">
              {comment.timestamp}
            </p>
          </div>
          <p className="comment__details-post">{comment.comment}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="comments-section">
      <p className="comments-section__length">{comments.length} Comments</p>
      <div className="add-comments" >
        <ProfilePic />
        <form className="add-comments__form">
          <h2 className="add-comments__form-title">JOIN THE CONVERSATION</h2>
          <textarea className="add-comments__form-textarea" placeholder="Add a new comment"></textarea>
          <Button text={"COMMENT"} action={addCommentIcon} />
        </form>
      </div>
      {elements}
    </div>
  );
};

export default Comments;
