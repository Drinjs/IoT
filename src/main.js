import ReactDOM from 'react-dom';
import IoTRoute from './routes'
import { Provider } from 'react-redux'
import store from './store'
// import { ConfigProvider } from 'antd'
// import zhCN from 'antd/lib/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
// moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={store}>
    <IoTRoute />
  </Provider>, 
  document.getElementById('root')
);
