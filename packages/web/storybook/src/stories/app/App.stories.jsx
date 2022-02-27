import React  from "react";

import App from '@dm/app';

export default {
    title: 'App/App',
    component: App,
};

const Template = (args) => <App {...args} />;

export const TestUsage = Template.bind({});