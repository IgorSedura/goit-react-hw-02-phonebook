import PropTypes from 'prop-types';

export const PhonebookList = ({ items, removeContacts }) => {
  const elemenst = items.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <span>
        <button onClick={() => removeContacts(id)}>Delete</button>
      </span>
    </li>
  ));
  return <ul>{elemenst}</ul>;
};

PhonebookList.defaultProps = {
  items: [],
};

PhonebookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
