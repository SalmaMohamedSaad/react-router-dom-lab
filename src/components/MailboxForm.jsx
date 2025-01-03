// src/components/PokemonForm.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const initialState = {
  boxHolder: '',
  boxSize: ''
}

const MailboxForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addMailbox(formData)
    setFormData(initialState)
    navigate('/mailboxes')
  }

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Mailbox Holder Name:</label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="">Select Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default MailboxForm
