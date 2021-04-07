import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import {getStory} from "../../reducer/selectors";
import {getDate} from "../../utils";
import {Link} from "react-router-dom";
import "./story.scss";

const Story = () => {
    const story = useSelector(getStory);
    console.log('story', story);

    return (
        <section className="story">
            <Link className="story__return" to="/">Обратно к списку новостей</Link>
            <article className="story__item">
                <div className="story__header">
                    <span className="story__date">{getDate(story.time)}</span>
                    <p className="story__author">Автор: <span>{story.by}</span></p>
                    <a className="story__source" href={story.url}>Источник</a>
                </div>

                <div className="story__body">
                    <h2 className="story__title">{story.title}</h2>
                    <div className="story__comments">
                        <p>Комментарии</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Story;
