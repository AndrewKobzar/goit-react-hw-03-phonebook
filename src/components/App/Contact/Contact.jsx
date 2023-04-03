import PropTypes from 'prop-types';
import s from './Contact.module.css';

function Contact({ name, number, onDeleteContact, contactId }) {
  return (
    <>
      <p>
        {name} 
      </p>
      <p className={s.number}>{number}</p>
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(contactId)}
      >
        Delete
      </button>

    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
