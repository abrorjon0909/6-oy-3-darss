import React from 'react'
import styles from './index.module.css'
import users from '../../assets/users.json'
function User(props) {
    const{firstName,lastName} = props.users
  return (
    <div>
      <h3>{firstName}</h3>
      <h3>{lastName}</h3>
    </div>
  )
}

export default User
