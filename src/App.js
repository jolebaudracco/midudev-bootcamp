import './App.css';
import Message from './Message.js'; 
import Description from './Description.js';

const App = () => {
 
  return (
  //Fragment: permite envolver lo que quere envolver en React sin necesidad de crear un elemento HTML
    
      <>
        <Message color='blue' title='Estamos trabajando' />
        <Message color='red' title='En un curso'/>
        <Message color='yellow' title='De React'/>
        <Description />
      </>
  );
}

export default App;
