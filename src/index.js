import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'


import {LoginControl, Clock,Main, MyArray,Lol,Error} from './components/data'
import {BoilFunction} from './components/dataLearning'
import {FixedMenuLayout} from './components/fixedBar'
import {Main_TodoList} from './components/ToDoList/main'
import {Todobody} from './components/ToDoList/body'



import "./style/design.css"
import 'semantic-ui-css/semantic.min.css'

window.React = React ;

const Whoops= ()=>{return (<h1><div>Whoops</div></h1>)};



render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/todolist" component={Main_TodoList} />
            {/*<Route exact path="/"  component={FixedMenuLayout} />*/}
            <Route component={Whoops} path="*" />
        </Switch>
    </BrowserRouter>
    ,
    document.querySelector("#react-container")
);


