import { fn } from '@storybook/test';

import { ApitiDataTable } from '../src/index.js';

export default {
    title: 'Apiti/Design System/Organisms/Data Table',
    component: 'apiti-data-table',
    render: ( args ) => ApitiDataTable( args ),
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: { type: 'select' },
            options: [ 'small', 'medium', 'large' ],
        },
    },
    args: {
        data: fn(),
        columns: fn(),
    },
};

const Template = () => '<apiti-data-table></apiti-data-table>';

export const Default = Template.bind( {} );