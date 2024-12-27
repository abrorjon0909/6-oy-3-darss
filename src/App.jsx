import React from 'react'
import users from './assets/users.json'
import UserList from './Componets/UserList'
import User from './Componets/User'
import './App.css'
function App() {
  return (
    <div className='conteiner'>
      {
        users.length >= 0 && users.map((f,i) =>{
          return(
            <div key={i} className='user__wrapper'>
              <img src={f.image} alt="" />
              <div className="name">
              <h3 className='titile'>{f.firstName}</h3>
              <h3 className='titile'>{f.lastName}</h3>
              </div>
             <div className="phone-email">
             <p>{f.phone}</p>
             <p>{f.email}</p>
             </div>
             <div className="region-zib">
              <ul>
                <li>{f.address.region}</li>
                <li>{f.address.zip}</li>
              </ul>
             </div>
              <h5>{f.cars}</h5> 
            </div>
          )
        })
      }
    </div>
  )
}

export default App
