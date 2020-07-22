import React from 'react';

class Drills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {World: "who"};
  }

  render() {
    return (
      <main className='Drills'>
        <p>Hello World</p>
        <button 
          variant="outline-dark"
          onClick={function() {console.log('clicked World!')}}
        >World</button>

        <button 
          variant="outline-dark"
          onClick={function() {console.log('clicked Friend!')}}
        >Friend</button>

        <button 
          variant="outline-dark"
          onClick={function() {console.log('clicked React!')}}
        >React</button>

      </main>
    );
  }
}

export default Drills;