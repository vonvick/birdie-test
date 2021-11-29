import React from "react";
import styled from "styled-components"
import { Table } from "../utility/Table";
import { TableHeaderInterface} from "../../typings";
import { useSelector } from "react-redux";
import {getRecipients} from "../../redux/features/recipients/recipientSlice";
import { useNavigate } from "react-router-dom";

const CareRecipientsTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;
  
  .id-column {
    width: 800px;
  }
  
  thead td {
    padding: 5px;
    border-left: 1px solid #808585;
  }
  
  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
    cursor: pointer;
  }
  
  tbody td {
    padding: 5px;
    border-left: 1px solid #808585;
  }
`;

const CareRecipientTableRow = styled(Table.Tr)`
  border: 1px solid #282c34;
  width: 100%;
`;

const CareRecipientTableHeader = styled(Table.Th)`
  width: 100%;
`;

const CareRecipientsList = () => {
  const navigate = useNavigate();

  const tableHeaders: TableHeaderInterface[] = [
    {
      className: 'id-column',
      columnName: 'Recipient ID',
      columnId: 'care_recipient_id'
    },
    {
      className: 'name-column',
      columnName: 'Recipient Name',
      columnId: 'recipient_name'
    },
  ];

  const recipients = useSelector(getRecipients);

  const loadRecipientEvents = (recipientId: string) => {
    navigate(`/recipients/${recipientId}`);
  }

  return (
    <div>
      <h2>Care Recipients</h2>

      <p>Click on a care recipient to view the events for them.</p>

      <CareRecipientsTable>
        <CareRecipientTableHeader>
          <CareRecipientTableRow>
            {
              tableHeaders.map((header: TableHeaderInterface, index: number) => {
                return (
                  <Table.Td key={index}>{header.columnName}</Table.Td>
                )
              })
            }
          </CareRecipientTableRow>
        </CareRecipientTableHeader>
        <Table.Body>
          {
            recipients.map((recipient, index) => {
              return (
                <CareRecipientTableRow
                  key={index}
                  onClick={() => loadRecipientEvents(recipient.care_recipient_id)}
                >
                  {
                    tableHeaders.map((header, headerIndex) => {
                      return (
                        <Table.Td key={headerIndex}>{ recipient[header.columnId] }</Table.Td>
                      )
                    })
                  }
                </CareRecipientTableRow>
              )
            })
          }
        </Table.Body>
      </CareRecipientsTable>
    </div>
  );
};

export default CareRecipientsList;
