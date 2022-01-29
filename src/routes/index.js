import routes from './routes'
import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider, RequireAuth } from '../components/Auth'

class IoTRoute extends Component {
  createRoutes(routes) {
    return (
      // 当且仅当 auth存在 token不存在 跳转至Login页面
      routes.map(({path, exact, auth, children=[], name, component: Component}, index)=> {
        return (
          <Route 
            path={path} 
            exact={exact}
            key={`${name}-${index}`}
            element={ 
              <RequireAuth>
                <Component />
              </RequireAuth> 
            }
          >
            { children?.length && this.createRoutes(children) }  
          </Route>
        )
      })
    )
  }

  render() {
    return (
      <Router> 
        <AuthProvider>
          <Routes>
            { this.createRoutes(routes) }
          </Routes>
        </AuthProvider>
      </Router>
    )
  }
}

export default IoTRoute
