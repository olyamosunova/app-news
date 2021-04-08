import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getComments, getStory} from "../../reducer/selectors";
import {getDate} from "../../utils";
import {Link} from "react-router-dom";
import "./story.scss";
import Comments from "../comments/comments";
import {Operations} from "../../reducer/reducer";

const Story = () => {
    const story = useSelector(getStory);
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const { kids } = story;
    const commentsLength = kids ? kids.length : null;

    useEffect(() => {
        if (kids && kids.length) {
            dispatch(Operations.loadComments(kids));
        }
    }, []);

    return (
        <section className="story">
            <Link className="story__return" to="/">Return to stories list</Link>
            <article className="story__item">
                <div className="story__header">
                    <span className="story__date">{getDate(story.time)}</span>
                    <p className="story__author">Author: <span>{story.by}</span></p>
                    <a className="story__source" href={story.url}>Source</a>
                </div>

                <div className="story__body">
                    <h2 className="story__title">{story.title}</h2>

                    {
                        commentsLength ? <Comments comments={comments} /> : <p>Нет комментариев</p>
                    }

                </div>
            </article>
        </section>
    );
};

export default Story;
