import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import {useSelector, useDispatch} from "react-redux";
import {getStories, getIsLoading, getErrorMessage} from "../../reducer/selectors";
import Loader from "../loader/loader";
import {Operations, ActionCreator} from "../../reducer/reducer";
import "./Main.css";
import ModalBlock from "../modal/Modal";
import {Link} from "react-router-dom";
import {getDate} from "../../utils";

const Main = () => {
    const stories = useSelector(getStories);
    const isLoading = useSelector(getIsLoading);
    const errorMessage = useSelector(getErrorMessage);
    const dispatch = useDispatch();

    console.log(stories);

    const handlerLoadStories = () => {
        dispatch(ActionCreator.changeIsLoadedFlag(true));
        dispatch(Operations.loadStories());
    };

    return (
        <section className="main">
            <Button className="main__button" variant="primary" onClick={handlerLoadStories} disabled={isLoading}>Update stories list</Button>

            <Table className="main__table" striped bordered hover>
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Score</td>
                    <td>Author</td>
                    <td>Date</td>
                </tr>
                </thead>
                <tbody>
                {
                    isLoading ?
                        <tr style={{backgroundColor: '#ffffff'}}>
                            <td colSpan="4" align="center"><Loader/></td>
                        </tr>
                        :
                        stories
                            ? stories.map(story => {
                                return story ? <tr key={story.id}>
                                    <td>
                                        <Link to={`/story/${story.id}`} >{story.title}</Link>
                                    </td>
                                    <td>{story.score ? story.score : '0'}</td>
                                    <td>{story.by}</td>
                                    <td>{getDate(story.time)}</td>
                                </tr> : null
                            })
                            :
                            <tr style={{backgroundColor: '#ffffff'}}>
                                <td colSpan="4" align="center">Нет новостей</td>
                            </tr>

                }
                </tbody>
            </Table>

            {errorMessage ?
                <ModalBlock message={errorMessage} /> : null
            }

        </section>
    );
};

export default Main;
