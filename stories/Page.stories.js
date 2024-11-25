import * as HeaderStories from './Header.stories';
import { Page } from '../src/index.js';

export default {
    title: 'Apiti/Design System/Pages/Login',
    render: ( args ) => Page( args ),
};

export const LoggedIn = {
    args: {
        // More on composing args: https://storybook.js.org/docs/writing-stories/args#args-composition
        ...HeaderStories.LoggedIn.args,
    },
};

export const LoggedOut = {
    args: {
        ...HeaderStories.LoggedOut.args,
    },
};
