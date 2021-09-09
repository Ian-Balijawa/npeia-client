import React from 'react';
import { Container, Input, Profile, Group, Image, Text } from './styles/Header';

export default function Header({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Header.Search = ({ ...restProps }) => {
	return <Input {...restProps} />;
};

Header.Group = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>;
};
Header.Logo = ({ ...restProps }) => {
	return <Image {...restProps} />;
};
Header.Image = ({ ...restProps }) => {
	return <Image {...restProps} />;
};

Header.Profile = ({ children, ...restProps }) => {
	return <Profile {...restProps}>{children}</Profile>;
};
Header.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};
