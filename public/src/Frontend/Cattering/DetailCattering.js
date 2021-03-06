import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CatteringDetail from './CatteringDetail';


function run(){

ReactDOM.render(
    <CatteringDetail/>,
    document.getElementById("CatteringDetail")
);
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}