import React, {useState} from "react";
import {getDate} from "../../utils";
import CommentsList from "../comments-list/Comments-list";
import {loadComments} from "../../utils";

const Comment = ({comment}) => {
    const {kids} = comment;
    const commentsLength = kids ? kids.length : null;
    const [comments, setComments] = useState([]);
    const [isShowCommentsNumber, setIsShowCommentsNumber] = useState(true);


    const handlerUploadComments = () => {
        if (commentsLength) {
            loadComments(kids).then(res => {
                setComments(res);
                setIsShowCommentsNumber(false);
            });
        }
    };

  return (
      <li className="comments__item">
          <div className="comments__item-header">
              <p className="comments__item-author">{comment.by}</p>
              <span className="comments__item-date">{getDate(comment.time)}</span>
          </div>

          <div className="comments__item-body">
              <p className="comments__item-text" dangerouslySetInnerHTML={{__html: comment.text}}></p>
          </div>

          {
              commentsLength && isShowCommentsNumber ?
                  <div className="comments__item-footer">
                      <button onClick={() => handlerUploadComments()} className="comments__item-btn" type="button">Комментрии ({commentsLength})</button>
                  </div>
                  : null
          }



          {commentsLength ? <CommentsList comments={comments} /> : null}
      </li>
  );
};

export default Comment;
