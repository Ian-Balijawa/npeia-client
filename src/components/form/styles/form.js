import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 660px;
	background-color: rgb(31 36 43 / 85%);
	border-radius: 5px;
	width: 100%;
	margin: auto;
	max-width: 460px;
	padding: 30px 68px 40px;
	margin: 150px;
	align-self: center;

	@media (min-width: 1200px) {
		min-width: 700px;
	}
`;

export const Break = styled.br``;

export const InputGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

	@media (max-width: 1000px) {
		flex-direction: row;
	}
`;

export const Error = styled.div`
	background: #2dff8c;
	border-radius: 4px;
	font-size: 14px;
	margin: 0 0 16px;
	color: white;
	padding: 15px 20px;
`;

export const Base = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 450px;
	width: 100%;
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 32px;
	text-align: center;
	font-weight: bold;
	margin-bottom: 28px;
`;

export const Text = styled.p`
	color: #737373;
	font-size: 16px;
	font-weight: 500;
`;

export const TextSmall = styled.p`
	margin-top: 10px;
	font-size: 13px;
	line-height: normal;
	color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
	color: #ffffff;
	text-decoration: none;
	width: 100%;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;

export const Input = styled.input`
	background: #242c37;
	border-radius: 3px;
	border: 0;
	font-size: 16px;
	color: #ffffff;
	height: 50px;
	outline: none;
	line-height: 50px;
	padding: 5px 20px;
	margin-bottom: 20px;

	&:focus {
		border: 2px solid blueviolet;
	}
	&:hover {
		border: 2px solid blueviolet;
	}
	&:last-of-type {
		margin-bottom: 5px;
	}
	@media (min-width: 1200px) {
		width: 120%;
	}
`;

export const Submit = styled.button`
	background: #3532f7;
	border-radius: 20px;
	font-size: 16px;
	font-weight: bold;
	margin: 24px 0 12px;
	padding: 16px;
	width: 60%;
	outline: none;
	border: 0;
	color: white;
	align-self: center;
	cursor: pointer;

	&:active {
		z-index: -9999;
	}
	&:hover {
		background: #2521ff;
	}
	&:disabled {
		opacity: 0.2;
	}
`;
