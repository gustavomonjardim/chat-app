import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #282c34;
  border-bottom: 1px solid #000;
  padding: 16px 22px;
`

export const Title = styled.h1`
  font-size: 16px;
  color: var(--text-color);
`;

export const Description = styled.span`
  font-size: 12px;
  color: #7e8798;
  margin-left: 16px;
`

export const Messages = styled.main`
  flex-grow: 1;
  overflow-y: scroll;

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #383E4A;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #181A1F;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1d1f23;
}

`;

export const Input = styled.input`
  font-size: 16px;
  color: var(--text-color);
  background-color: #3E4451;
  margin: 24px;
  padding: 8px 16px;
  border-radius: 8px;
`;