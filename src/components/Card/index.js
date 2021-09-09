import React from 'react';
import {
	Container,
	Image,
	Text,
	TextSmall,
	Group,
	CheckIcon,
} from './styles/Card';

export default function Card({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Card.Image = ({ ...restProps }) => {
	return <Image {...restProps} />;
};

Card.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

Card.TextSmall = ({ children, ...restProps }) => {
	return <TextSmall {...restProps}>{children}</TextSmall>;
};

Card.CheckIcon = ({ children, ...restProps }) => {
	return <CheckIcon {...restProps}>{children}</CheckIcon>;
};

Card.Group = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>;
};
