import './App.css'
import { useState } from 'react'

function App () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    country: 'India',
    Street_Address: '',
    city: '',
    pin: '',
    notify: false
  })

  const changeHandler = event => {
    const { name, value, type, checked } = event.target

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const saveHandler = event => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div className='App'>
      <form onSubmit={saveHandler}>
        <label>First name</label>
        <input
          type='text'
          onChange={changeHandler}
          name='firstName'
          placeholder='Brajesh'
          value={formData.firstName}
        />

        <label>Last name</label>
        <input
          type='text'
          onChange={changeHandler}
          name='lastName'
          placeholder='Kumar'
          value={formData.lastName}
        />

        <label>Email Address</label>
        <input
          type='email'
          onChange={changeHandler}
          name='email'
          placeholder='abc@gmail.com'
          value={formData.email}
        />

        <label htmlFor='country'>Country</label>
        <select
          onChange={changeHandler}
          name='country'
          id='country'
          value={formData.country}
        >
          <option value='India'>India</option>
          <option value='Australia'>Australia</option>
          <option value='Sri Lanka'>Sri Lanka</option>
          <option value='China'>China</option>
          <option value='United States'>United States</option>
          <option value='Russia'>Russia</option>
          <option value='Others'>Others</option>
        </select>

        <label>Street Address</label>
        <input
          type='text'
          onChange={changeHandler}
          name='Street_Address'
          placeholder='1234 Main Street'
          value={formData.Street_Address}
        />

        <label>City</label>
        <input
          type='text'
          onChange={changeHandler}
          name='city'
          placeholder='Najafgarh'
          value={formData.city}
        />

        <label>Pin Code</label>
        <input
          type='number'
          onChange={changeHandler}
          name='pin'
          placeholder='110043'
          value={formData.pin}
          className='no-spinners' // Add this class for custom styling
        />

        <label>Gender</label>
        <div className='gender-container'>
          <input
            type='radio'
            onChange={changeHandler}
            name='gender'
            id='male'
            value='male'
            checked={formData.gender === 'male'}
          />
          <label htmlFor='male'>Male</label>
          <input
            type='radio'
            onChange={changeHandler}
            name='gender'
            id='female'
            value='female'
            checked={formData.gender === 'female'}
          />
          <label htmlFor='female'>Female</label>
        </div>

        <div className='notify-container'>
          <input
            type='checkbox'
            onChange={changeHandler}
            checked={formData.notify}
            id='notify'
            name='notify'
          />
          <label htmlFor='notify'>You will be notified</label>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
