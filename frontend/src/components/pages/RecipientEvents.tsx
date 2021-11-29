import {useDispatch, useSelector} from "react-redux";
import {fetchEvents, selectAllRecipientEvents} from "../../redux/features/events/eventsSlice";
import styled from "styled-components";
import EventCard from "../utility/EventCard";
import { useParams } from "react-router-dom";
import {useEffect} from "react";
import {setCurrentRecipientId} from "../../redux/features/recipients/recipientSlice";

const StyledEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipientEvents = () => {
  const recipientsEvent = useSelector(selectAllRecipientEvents);
  const { recipientId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipientId) {
      dispatch(setCurrentRecipientId(recipientId));
      dispatch(fetchEvents({ page: 1, perPage: 10 }));
    }
  }, [recipientId, dispatch]);


  return (
    <>
      <h2>Recipient Events</h2>

      <StyledEventsContainer>
        { recipientsEvent.map((event, index) => {
          return(
            <EventCard key={index}>
              <p>{event.timestamp}</p>
            </EventCard>
          )
        }) }
      </StyledEventsContainer>
    </>
  );
};

export default RecipientEvents;
