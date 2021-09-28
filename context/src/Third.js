import React from 'react'
import { useContext } from 'react';
import UserContext from './UserContext';

export default function Third() {
	const user = useContext(UserContext);
	return (
		<h3>
			{user}
		</h3>
	)
}
