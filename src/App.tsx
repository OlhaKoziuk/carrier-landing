import { ConfigProvider, theme } from 'antd';
import Main from './pages/Main';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          fontFamily: '"Rubik", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
          colorTextBase: '#515B6F',
          colorPrimary: '#4640DE',
        },
      }}
    >
      <Main />
    </ConfigProvider>
  );
}


