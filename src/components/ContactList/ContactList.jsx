import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.searchValue);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (filteredContacts.length === 0) {
    return;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={(contactId) => {
              dispatch(deleteContact(contactId));
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
