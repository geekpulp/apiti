import { ApitiHelloWorld } from '../src/index.js';

export default {
    title: 'Example/HelloWorld',
    component: 'apiti-hello-world',
    render: ( args ) => ApitiHelloWorld( args ),
};

const Template = () => '<apiti-hello-world></apiti-hello-world>';

export const Default = Template.bind( {} );