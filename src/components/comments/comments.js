import React from "react";
import "./Comments.scss";
import CommentsList from "../comments-list/Comments-list";

const Comments = ({comments}) => {
    const newCommentsList = comments.filter(comment => !comment.deleted);

    return (
        <div className="story__comments comments">
            <p className="comments__title">Comments <span>({newCommentsList.length})</span></p>

            <CommentsList comments={newCommentsList} />
        </div>
    );
};

export default Comments;
