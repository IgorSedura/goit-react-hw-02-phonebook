export const Filter = ({ handleFilter }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <p>Find constacts by name</p>
      <input onChange={handleFilter} type="text" />
    </div>
  );
};
