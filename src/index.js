import React from 'react'
import ReactDom from 'react-dom'
import MainPanel from './components/main/MainPanel'


const API_KEY = 'AIzaSyCAk2qBnxQttDMNxTKglgWIvKzx62cp_-I';
const App = () => {

    return (
        <MainPanel/>
    );
}



ReactDom.render(<App/>, document.querySelector(".container"));