import { useEffect, useRef, useState } from 'react';



import './App.css';

function App() {

	const infoRef = useRef();

	const [values, setValues] = useState({
		username: '',
		password: '',
		age: '',
		bio: '',
		gender: 'm',
		userType: '',
		tac: false
	})

	useEffect(()=>{
		if(values.username && values.age) {
			infoRef.current.value = `${values.username} - ${values.age}`
		}
	}, [values.username, values.age])

	const changeHandler = (e) => {
		setValues(state => ({
			...state, 
			[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
		}))
	}


	// const [username, setUsername] = useState('Pesho');
	// const [password, setPassword] = useState('');
	// const [age, setAge] = useState('');
	// const [bio, setBio] = useState('');
	// const [gender, setGender] = useState('m');
	// const [userType, setUserType] = useState('');
	// const [tac, setTac] = useState(false);

	const submitHandler = (e) => {
		e.preventDefault();
		// let values = Object.fromEntries(new FormData(e.currentTarget))
		// console.log(values)

		console.log('username:'+values.username)
		console.log('password:'+values.password)
		console.log('age:'+values.age)
		console.log('bio:'+values.bio)
		console.log('gender:'+values.gender)
		console.log('userType: '+values.userType)
		console.log('tac: '+values.tac)

	};

	// const changeUsernameHandler = (e) => {
	// 	e.preventDefault();
	// 	console.log(username)
	// 	setUsername(e.target.value)
	// };

	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={submitHandler}>
					<div>
						<label htmlFor="username">Username: </label>
						<input
							id='username'
							name='username'
							type="text"
							placeholder='Type username here'
							onChange={changeHandler}
							value={values.username}
						/>
					</div>
					<div>
						<label htmlFor="password">Password: </label>
						<input id='password' name='password' type="password" placeholder='Type password here' value={values.password} onChange={changeHandler} />
					</div>
					<hr />
					<div>
						<label htmlFor="age">Age: </label>
						<input type="number" name='age' id='age' value={values.age} onChange={changeHandler} />
					</div>
					<hr />
					<div>
						<label htmlFor="bio">Bio: </label>
						<textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler}></textarea>
					</div>
					<hr />
					<div>
						<label htmlFor="gender">Gender: </label>
						<select name="gender" id="gender" onChange={changeHandler}>
							<option value="m">Male</option>
							<option value="f">Female</option>
						</select>
					</div>
					<hr />
					<div>
						<label htmlFor="individual-user-type">Individual</label>
						<input type="radio" name='userType' value="individual" id='individual-user-type' onChange={changeHandler} checked={values.userType === 'individual'}/>
						<label htmlFor="corporate-user-type">Corporate</label>
						<input type="radio" name='userType' value="corporate" id='corporate-user-type' onChange={changeHandler} checked={values.userType === 'corporate'} />
					</div>
					<div>
						{values.userType === 'individual' ? 
						<>
							<label htmlFor="EGN">EGN</label>
							<input type="number" name="EGN" id="EGN" />
						</>
						 : 
						 <>
							<label htmlFor="VAT">VAT</label>
							<input type="number" name='VAT' id='VAT' />
						</>
						  }
					</div>
					<div>
						<label htmlFor="tac">Terms and Conditions: </label>
						<input type="checkbox" name='tac' id='tac' checked={values.tac} onChange={changeHandler}/>
					</div>
					<hr />
					<div>
						<input type="submit" value='Subimt' disabled={!values.tac} />
					</div>

					<div>
						<label htmlFor="uncontrolled-input">Uncontrolled Input: </label>
						<input type="text" name='uncontrolled' id='uncontrolled-input' ref={infoRef}/>
					</div>
				</form>
			</header>
		</div>
	);
}

export default App;
