import { Title, Text, Input, Container } from './FilterStyles';

export const Filter = ({ handleFilter }) => {
  return (
    <Container>
      <Title>Contacts</Title>
      <Text>Find constacts by name</Text>
      <Input onChange={handleFilter} type="text" />
    </Container>
  );
};
