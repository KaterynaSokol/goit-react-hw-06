import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <>
      <div className={css.contactItem}>
        <p className={css.contactName}>
          <FaUser className={css.icon} size="15px" />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} size="15px" />
          {number}
        </p>
        <button
          type="button"
          className={css.contactDeleteBtn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
