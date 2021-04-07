import React from "react";
import Table from "react-bootstrap/Table";
import {useSelector} from "react-redux";
import {getStories} from "../../reducer/selectors";
import { format } from "date-fns";

const Main = () => {
    const stories = useSelector(getStories);

    console.log(stories);

    const getDate = (date) => {
        return format(new Date(date), 'dd.MM.yyyy');
    };

    return (
        <section>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Название</td>
                        <td>Рейтинг</td>
                        <td>Автор</td>
                        <td>Дата публикации</td>
                    </tr>
                </thead>
                <tbody>
                    {stories.map(story => {
                        return <tr key={story.id}>
                            <td>{story.title}</td>
                            <td>{story.score ? story.score : ''}</td>
                            <td>{story.by}</td>
                            <td>{getDate(story.time)}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </section>
    );
};

export default Main;
