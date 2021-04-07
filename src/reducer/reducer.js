import {extend, loadStories} from "../utils";

const initialState = {
    stories: [],
    isLoading: true,
    errorMessage: '',
    story: null
};

const ActionType = {
    LOAD_STORIES: `LOAD_STORIES`,
    CHANGE_IS_LOADED_FLAG: `CHANGE_IS_LOADED_FLAG`,
    SET_ERROR_MESSAGE: `SET_ERROR_MESSAGE`,
    GET_STORY: `GET_STORY`
};

const ActionCreator = {
    loadStories: (stories) => {
        return {
            type: ActionType.LOAD_STORIES,
            payload: stories,
        };
    },
    changeIsLoadedFlag: (flag) => {
        return {
            type: ActionType.CHANGE_IS_LOADED_FLAG,
            payload: flag,
        };
    },
    setErrorMessage: (message) => {
        return {
            type: ActionType.SET_ERROR_MESSAGE,
            payload: message,
        };
    },
    getStory: (id) => {
        return {
            type: ActionType.GET_STORY,
            payload: id,
        };
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_STORIES:
            return extend(state, {
                stories: action.payload
            });

        case ActionType.CHANGE_IS_LOADED_FLAG:
            return extend(state, {
                isLoading: action.payload
            });

        case ActionType.SET_ERROR_MESSAGE:
            return extend(state, {
                errorMessage: action.payload
            });

        case ActionType.GET_STORY:
            const storyId = action.payload;
            const story = state.stories.find(story => story.id === storyId);

            return extend(state, {
                story
            });


        default:
            return state;
    }
};


const Operations = {
    loadStories: () => (dispatch) => {
        loadStories()
            .then(stories => {
                dispatch(ActionCreator.loadStories(stories));
                dispatch(ActionCreator.changeIsLoadedFlag(false));
                dispatch(ActionCreator.setErrorMessage(''));
            })
            .catch(() => {
                dispatch(ActionCreator.changeIsLoadedFlag(false));
                dispatch(ActionCreator.setErrorMessage('Не удалось загрузить новости!'));
            });
    }
};


export {reducer, ActionType, ActionCreator, Operations};
