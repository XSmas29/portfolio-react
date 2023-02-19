import '@styles/app.scss';
import { themeConfig } from '@theme';
import { Paper, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from '@components/navbar/navbar';
import Routing from '@router/route';

function App() {
  const mode = useSelector((state: any) => state.mode);
  return (
    <ThemeProvider theme={themeConfig(mode.value)}>
      <Paper
        sx={{
          minHeight: '100vh',
        }}
      >
        <div className="App">
          <Navbar />
          <div
            style={{ margin: '2em' }}
          >
            <Routing />
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
