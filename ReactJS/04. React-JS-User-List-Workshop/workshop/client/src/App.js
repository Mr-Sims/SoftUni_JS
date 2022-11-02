import './App.css';

import * as userService from './services/userService';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';
import { useEffect, useState } from 'react'


function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		userService.getAll()
			.then(users => setUsers(users))
	}, []);

	console.log(users);


  return (
    <div>
		<Header />
			<div className='main'>
				<section className='card users-container'>
					<Search />
					<UserList users={users}/>




				</section>
			</div>
		<Footer />
    </div>
  );
}

export default App;
