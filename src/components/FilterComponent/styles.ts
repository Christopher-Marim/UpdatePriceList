import styled from "styled-components";

export const TextField = styled.input`
	height: 32px;
	width: 100%;
	background-color: transparent;
    color: white;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid white;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
	&::placeholder{
		color:white;
	}
`;
export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
	display: flex;
  align-items: center;
  flex-direction:row;
`;

export const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
  border: 1px solid white;
  background-color: transparent;
  color:white;
	height: 32px;
	width: 50px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
