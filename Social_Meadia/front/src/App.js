import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/auth';
import AuthRoute from './utils/authRoute';
import SinglePost from './pages/SinglePost';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Container>
					<Navbar />
					<Route exact path='/' component={Home} />
					<AuthRoute path='/login' component={Login} />
					<AuthRoute path='/register' component={Register} />
					<Route exact path='/posts/:postId' component={SinglePost} />
				</Container>
			</Router>
		</AuthProvider>
	);
}

export default App;
