import '@styles/app.scss';
import { themeConfig } from '@theme';
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import Sidebar from '@components/sidebar/sidebar';
import Routing from '@router/route';

function App() {
  const mode = useSelector((state: any) => state.mode);
  return (
    <ThemeProvider theme={themeConfig(mode.value)}>
      <CssBaseline />
      <Paper
        sx={{
          minHeight: '100vh',
        }}
      > 
        <div className="App">
          <Sidebar>
            <div
              style={{ margin: '0.75em' }}
            >
              <Routing />
            </div>
          </Sidebar>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
