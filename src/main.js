import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Outlet
} from 'react-router-dom';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-layout">
        <h1>Main Layout</h1>
        <Outlet />
      </div>
    );
  }
}

// class Demo extends Component {
//   render() {
//     return (
//       <div className="demo">This is a demo of react !</div>
//     )
//   }
// }

function Demo(props) {
  console.log(props);
  return <div className="demo">This is a demo of react !</div>;
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink to="/demo" activeclassname="selected">
                demo
              </NavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="demo" element={<Demo />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
