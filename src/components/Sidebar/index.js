import React from 'react';

import {
	Container,
	Group,
	Image,
	List,
	Profile,
	ListGroup,
	Text,
} from './styles/Sidebar';

export default function Sidebar({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Sidebar.Profile = ({ children, ...restProps }) => {
	return <Profile {...restProps}>{children}</Profile>;
};

Sidebar.Image = ({ children, ...restProps }) => {
	return <Image {...restProps} />;
};

Sidebar.List = ({ children, ...restProps }) => {
	return <List {...restProps}>{children}</List>;
};

Sidebar.Group = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>;
};
Sidebar.ListGroup = ({ children, ...restProps }) => {
	return <ListGroup {...restProps}>{children}</ListGroup>;
};

Sidebar.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};
