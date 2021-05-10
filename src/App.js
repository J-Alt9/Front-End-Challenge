import Rect from "react";

//Packages
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Consts
import theme from "./Consts/Theme";

//Custom Hooks
import useData from "./hooks/useData";

//Components
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs";
import Career from "./Components/Career";
import Company from "./Components/Company";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import Services from "./Components/Services";
import Home from "./Components/Home";

const Wrapper = styled.div`
  padding: 0 10%;
`;


const App = () => {
  const data = useData();
  const components = [AboutUs, Company, Career, Products, Services, Contact];

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          {data.menu.map((el, i) => (
            <Switch key={i}>
              <Route path={`/${el.url}`} component={components[i]} />
            </Switch>
          ))}
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
