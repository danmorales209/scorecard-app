import React from "react";

import { LandingView } from "./LandingView";

export default {
    title: "MyApp/LandingView",
    component: LandingView,
    parameters: {
        layout: 'centered',
        
    }
};

const Template = (args) => <LandingView {...args} />;

export const Base = Template.bind({});