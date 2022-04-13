import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import { useState, useEffect } from 'react';
import UserContext from 'UserContext';

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem('user_name');
    const email = localStorage.getItem('user_email');
    const password = localStorage.getItem('user_password');

    if (name && email && password) {
      setUser({
        name,
        email,
        password,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  );
};

export default App;
