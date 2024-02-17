import {useState} from 'react';
const Home = () => {
  //let name='mario';
  const [name, setName] = useState('mario');
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick={() => {
                name === 'mario' ? setName('luigi') : setName('mario');
            }}>Click me</button>
        </div>
     );
}
 
export default Home;