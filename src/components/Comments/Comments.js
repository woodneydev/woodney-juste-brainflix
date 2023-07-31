import "./Comments.scss";
import ProfilePic from "../ProfilePic/ProfilePic.js";
import Button from "../Button/Button.js";
import addCommentIcon from "../../assets/images/icons/add_comment.svg";

const Comments = ({ comments }) => {
  console.log(comments);
  const elements = comments.map((comment) => {
    return (
      <div class="comment">
        <div class="comment__img"></div>
        <div class="comment__details">
          <div class="comment__details-header">
            <span class="comment__section-header-name">{comment.name}</span>
            <span class="comment__section-header-date">
              {comment.timestamp}
            </span>
          </div>
          <p>{comment.comment}</p>
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
          <Button text={"Comment"} action={addCommentIcon} />
        </form>
      </div>
      {elements}
    </div>
  );
};

export default Comments;
