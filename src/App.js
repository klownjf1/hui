import React, {lazy, Suspense} from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import './App.css';
import Nav from './components/NavBar/navBar';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import UsersContainer from "./components/Users/usersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeAppThunkCreator} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import store from "./Redux/reduxStore";




class App extends React.Component {

    componentDidMount() {
        this.props.initializeAppThunkCreator()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className="app_wrapper">
                <HeaderContainer/>
                <Nav/>

                <div className="app-wrapper-content">
                    {/* <Route exact path = "/Profile" component = {Profile} />
              <Route path = "/Dialogs" component = {Dialogs} /> */}
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>}/> {/*добавили в match params который будет равен userId, а вопросительный знак даёт понять что этот парметр не обязателен*/}
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>

                </div>
            </div>

        );

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(connect(mapStateToProps, {initializeAppThunkCreator}), withRouter)(App)

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp
