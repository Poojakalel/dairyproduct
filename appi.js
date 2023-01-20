import logo from './logo.svg';
import './App.css';
import User from './User'
import reac from './reac';
function appi(){

    function Apple(){
        return(<div>Apple component</div>)
    }
    return (
        <div className="App">
            <h1>Hello world</h1>

            <User />

            <User />

            {Apple()}
        </div>
    );
}



export default appi;