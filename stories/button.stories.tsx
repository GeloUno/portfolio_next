
import { Story, Meta } from '@storybook/react';
import Button from '../components/button/button';
import { IButtonProps, ButtonClassEnum } from '../components/button/button';


export default {
    title: 'UI/Buttons',
    component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    labelButton: "Projects",
    classButton: ButtonClassEnum.PRIMARY,
    className: "w-2/5 xl:w-1/12"

};
Primary.storyName = 'Primary button';


export const Secondary = Template.bind({});
Secondary.args = {
    labelButton: 'Contact',
    classButton: ButtonClassEnum.SECONDARY,
    className: "w-2/5 xl:w-1/12"
};
Secondary.storyName = 'Secondary button';

export const Third = Template.bind({});
Third.args = {
    labelButton: 'Works',
    classButton: ButtonClassEnum.PRIMARY,
    link: 'works',
    className: "w-2/5 xl:w-1/12"
};
Third.storyName = 'Primary link';

export const Fourth = Template.bind({});
Fourth.args = {
    labelButton: 'About',
    classButton: ButtonClassEnum.SECONDARY,
    link: "about",
    className: "w-2/5 xl:w-1/12"
};
Fourth.storyName = 'Secondary link';