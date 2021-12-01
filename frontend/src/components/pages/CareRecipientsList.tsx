import React, {useEffect} from "react";
import styled from "styled-components"
import { Table } from "../utility/Table";
import {Status, TableHeaderInterface} from "../../typings";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRecipients,
  getRecipients,
  getRecipientsStatus, setRecipientsStatus
} from "../../redux/features/recipients/recipientSlice";
import { useHistory } from "react-router-dom";
import {
  clearRecipientEvents,
  setEventStatus
} from "../../redux/features/events/eventsSlice";
import PaginationLoader from "../utility/PaginationLoader";

const StyledCareRecipientWrapper = styled.div`
  padding: 0 15px;
`;

const CareRecipientsTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;
  
  .id-column {
    width: 800px;
  }
  
  thead td {
    padding: 5px;
    border-left: 1px solid #808585;
    height: 70px;
    font-weight: bold;
  }
  
  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: #54c5c1;
    }
    cursor: pointer;
  }
  
  tbody td {
    padding: 5px;
    border-left: 1px solid #808585;
    height: 50px;
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
  const history = useHistory();
  const dispatch = useDispatch();
  const recipientStatus = useSelector(getRecipientsStatus);

  useEffect(() => {
    dispatch(setRecipientsStatus("loading"));
    dispatch(fetchRecipients({ perPage: 10, page: 1 }));
  }, [dispatch]);

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
    dispatch(setEventStatus("empty"));
    dispatch(clearRecipientEvents());
    history.push(`/recipients/${recipientId}`);
  }

  const recipientsData = () => {
    if (recipients.length < 1) {
      return (
        <PaginationLoader paginationState={recipientStatus as Status} handleLoadMore={() => {}} />
      );
    } else {
      return (
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
                    data-testid={recipient.care_recipient_id}
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
      );
    }
  };


  return (
    <StyledCareRecipientWrapper>
      <h2>Care Recipients List</h2>

      <p>Click on a care recipient to view the events for them.</p>

      { recipientsData() }

    </StyledCareRecipientWrapper>
  );
};

export default CareRecipientsList;
