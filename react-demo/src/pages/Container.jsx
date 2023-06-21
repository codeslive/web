import styled from 'styled-components';
const Container = styled.div`
  background-image: url('https://media.giphy.com/media/PWdY9RG3rQjxKOpIMN/giphy.gif');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 6em;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px #4b4b4b;
    margin: 0 0 20px 0;
  }

  p {
    font-size: 2em;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px #4b4b4b;
    margin: 0;
  }
`;

export default Container



