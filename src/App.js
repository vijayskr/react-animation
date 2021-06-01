import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import { CSSTransition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

        <button
        className="Button"
        onClick={() =>
          this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
        }
      >
        Toggle
      </button>

      <CSSTransition in={this.state.showBlock} timeout={300}
      mountOnEnter unmountOnExit 
      classNames="fade-slide">
      <div
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
          margin: "auto",
          transition: "opacity 1s ease-out",
          opacity: this.state.modalIsOpen ? 0 : 1
        }}
      />
      </CSSTransition> 

        <br />
        <Transition in={this.state.modalIsOpen} timeout={300}
          mountOnEnter unmountOnExit 
          >
          {state => (
            <Modal closed={this.closeModal} show={state} />
            )}
        </Transition>
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

 /*     Learning code for the Transition   
         <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>

 <Transition in={this.state.showBlock} timeout={300}
 mountOnEnter unmountOnExit 
 onEnter={} onEntering={} onEntered={} onExit={} onExiting={} onExited={}>
 {state => (
   <div
     style={{
       backgroundColor: "red",
       width: 100,
       height: 100,
       margin: "auto",
       transition: "opacity 1s ease-out",
       opacity: state === "exiting" ? 0 : 1
     }}
   />
 )}
</Transition> */

export default App;
