import  styled  from 'styled-components';



export const LessonItem = styled.div`

 left: 0;
  font-size: 1.2em;
  cursor:pointer;
  color: #663300;
  position: relative;
  text-decoration: none;
  font-family: 'Monofett', cursive;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.08);


  &:hover {

    color: #fff;
    &:after {
      content: ' ';
      position: absolute;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #99ffcc;
      z-index: -1;
      opacity:0.5;
   
    }
  }
`;