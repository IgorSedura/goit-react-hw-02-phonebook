import PropTypes from 'prop-types';
import { Btn, Ul, Li } from './ConatactBookListStyles';

export const PhonebookList = ({ items, removeContacts }) => {
  const elemenst = items.map(({ id, name, number }) => (
    <Li key={id}>
      {name}: {number}
      <span>
        <Btn onClick={() => removeContacts(id)}>Delete</Btn>
      </span>
    </Li>
  ));
  return <Ul>{elemenst}</Ul>;
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
