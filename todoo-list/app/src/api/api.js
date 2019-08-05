const taskAPI = {
	getTask() {
		return fetch('http://localhost:8080/todoo')
      .then(res => res.json())
	},
	
	addTask(text) {
		const option = {
			method: 'POST',
			body: JSON.stringify({ text: text }),
			headers: { 'content-type': 'application/json' }
		}
		return fetch(`http://localhost:8080/todoo`, option)
			.then((res) => {
				if (res.status === 201) {
					return fetch(`http://localhost:8080/todoo`)
				}
			})
			.then(res => res.json());
	},

  removeTask(id) {
		const option = {
			method: 'DELETE',
			body: JSON.stringify({ _id: id }),
			headers: { 'content-type': 'application/json' }
		}
		return fetch(`http://localhost:8080/todoo/`, option)
			.then((res) => {
				if (res.status === 200) {
					return fetch(`http://localhost:8080/todoo`)
				}
			})
			.then(res => res.json())
	},

	changeTask(id, value) {
		const option = {
			method: 'PATCH',
			body: JSON.stringify({ _id: id , text: value}),
			headers: { 'content-type': 'application/json' }
		}
		console.log(value);
		return fetch(`http://localhost:8080/todoo/`, option)
			.then((res) => {
				if (res.status === 200) {
					return fetch(`http://localhost:8080/todoo`)
				}
			})
			.then(res => res.json())
	}
}
export default taskAPI;