// src/App.jsx
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
const initialState = [
  {
    boxHolder: '',
    boxSize: ''
  }
]

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState)
  const [mailboxNumber, setMailboxNumber] = useState()
  const addMailbox = (newMailbox) => {
    if (mailboxNumber) {
      newMailbox._id = mailboxNumber + 1
    } else {
      newMailbox._id = 1
    }
    setMailboxNumber(newMailbox._id)
    setMailboxes([...mailboxes, newMailbox])
  }
  const deleteMailbox = (id) => {
    setMailboxes(mailboxes.filter((mailbox) => mailbox._id !== id))
  }
  return (
    <div>
      <NavBar />
      <h1>Mailbox List</h1>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={
            <MailboxDetails
              mailboxes={mailboxes}
              deleteMailbox={deleteMailbox}
            />
          }
        />
        <Route path="*" element={<h3>Page not found</h3>} />
      </Routes>
    </div>
  )
}

export default App
