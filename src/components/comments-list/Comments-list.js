import React from "react";
import Comment from "../comment/comment";

const CommentsList = ({comments}) => {
    return (
        <ul className="comments__list">
            {
                comments.map(comment => {
                    return <Comment key={comment.id} comment={comment}/>
                })
            }
        </ul>
    );
};

export default CommentsList;
