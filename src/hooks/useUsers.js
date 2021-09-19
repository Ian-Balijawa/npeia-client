import { useState, useEffect } from "react";
import { firebase } from "../lib/firebase.prod";

const useUsers = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		firebase
			.firestore()
			.collection("users")
			.onSnapshot(snapshot => {
				const listUsers = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));

				setUsers(listUsers);
			});
		return () => null;
	}, [firebase]);
	return users;
};

export default useUsers;
