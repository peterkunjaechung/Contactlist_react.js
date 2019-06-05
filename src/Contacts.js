import React from "react";
import Contact from "./Contact";
import { Table, } from "semantic-ui-react";

const Contacts = ({ contactList, remove, }) => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contactList.map( contact => (
          <Contact key={contact.id} {...contact} remove={remove} />
          // <Contact key={contact.id} contact={contact} remove={remove} />
          // <Contact id={1} name="Jerry" phone="801..." />
        ))
      }
    </Table.Body>
  </Table>
);

export default Contacts;
