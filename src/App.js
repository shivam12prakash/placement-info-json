import NavBar from './components/navbar';
import LandingPage from './components/LandingPage';
import Users from './components/Users';
import AddUsers from './components/AddUsers';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/all" component={Users} exact/>
        <Route path="/add" component={AddUsers} exact/>
        <Route path="/edit/:id" component={EditUser} exact/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
