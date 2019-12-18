import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      credentials: {
        firstName:credentials.firstName,
        lastName:credentials.lastName,
        age:credentials.age,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}



//event api

//create new event and send it to database
export const createEvent = (user, event)=>{
  return axios({
    url: apiUrl + '/events/createEvent',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      event: {
        eventName: event.eventName,
        description: event.discription,
        when: event.when
      }
    }
  })
}

// get all list events from database
export const showListEvent = ()=>{
  return axios({
    url: apiUrl + '/events',
    method: 'GET',
  })
}

// delete event by id event from database
export const deleteEvent = (id, user)=>{
  console.log(id)
  return axios({
    url:apiUrl + `/events/delete/${id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
  })
}

// update or edit by id from database
export const updateEvent = (event,user)=>{
  console.log(event.id);
  return axios({
    url:apiUrl + `/events/update/${event.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      event: event
    }
  })
}
