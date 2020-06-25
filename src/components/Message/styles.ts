import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  align-items: flex-start;
  padding: 14px 20px;
  margin-bottom: 12px;
  max-width: 600px;
`;


export const Avatar = styled.div`
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #56b6c2;
`;

export const Content = styled.div`
  margin-left: 16px;
`;

export const Author = styled.span`
  color: var(--text-color);
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
`;

export const Header = styled.div`
  margin-bottom: 6px;
`;

export const Date = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 8px;
`;
export const Text = styled.span`
  color: var(--text-color);
`;
