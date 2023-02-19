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
          <Paper
            elevation={0}
            sx={{
              m: 4,
            }}
          >
            <Routing />
          </Paper>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
