import axios from "axios";
import {BASE_API_URL} from "./const";

export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

export const loadStory = async (id) => {
    try {
        const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
        return story.data;
    } catch (error) {
        console.log('Error while getting a story.');
    }
};

export const loadStories = async () => {
    try {
        const { data: storyIds } = await axios.get(
            `${BASE_API_URL}/newstories.json`
        );
        const stories = await Promise.all(storyIds.slice(0, 100).map(loadStory));
        return stories;
    } catch (error) {
        console.log('Error while getting list of stories.');
    }
};
