import {extend, loadStories} from "../utils";

const initialState = {
    stories: [],
    isLoading: true
};

const ActionType = {
    LOAD_STORIES: `LOAD_STORIES`,
    CHANGE_IS_LOADED_FLAG: `CHANGE_IS_LOADED_FLAG`
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
    }
    return state;
};


const Operations = {
    loadStories: () => (dispatch) => {
        loadStories().then(stories => {
            dispatch(ActionCreator.loadStories(stories));
        });
    }
};


export {reducer, ActionType, ActionCreator, Operations};
