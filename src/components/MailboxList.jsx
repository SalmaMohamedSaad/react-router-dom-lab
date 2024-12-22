import { Link } from 'react-router-dom'
const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox</h2>
      <ul>
        {props.mailboxes.map((currentMailbox) =>
          currentMailbox._id ? (
            <li key={currentMailbox._id} className="mail-box">
              <h5>Mailbox Number {currentMailbox._id}</h5>
              <Link to={`/mailboxes/${currentMailbox._id}`}>
                {currentMailbox.boxHolder}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </>
  )
}

export default MailboxList
