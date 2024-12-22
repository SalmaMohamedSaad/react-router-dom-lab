import { useNavigate, useParams } from 'react-router-dom'
const MailboxDetails = ({ mailboxes, deleteMailbox }) => {
  const { mailboxId } = useParams()
  const navigate = useNavigate()
  const oneMailbox = mailboxes.find((mailbox) => mailbox._id === +mailboxId)
  if (!oneMailbox) {
    return <p>Mailbox not found!</p>
  }
  const handleClick = () => {
    deleteMailbox(+mailboxId)
    navigate('/mailboxes')
  }
  return (
    <div className="mail-box">
      <h2>{oneMailbox.boxHolder}</h2>
      <dl>
        <dt>Size:</dt>
        <dd>{oneMailbox.boxSize}</dd>
      </dl>
      <button
        style={{ backgroundColor: 'red', color: 'white' }}
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  )
}

export default MailboxDetails
