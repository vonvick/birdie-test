import {useDispatch, useSelector} from "react-redux";
import {
  fetchEvents, getEventsPagination, getEventsStatus,
  selectAllRecipientEventIds, setEventStatus,
} from "../../redux/features/events/eventsSlice";
import styled from "styled-components";
import EventCard from "../utility/EventCard";
import { useParams } from "react-router-dom";
import {useEffect} from "react";
import {setCurrentRecipientId} from "../../redux/features/recipients/recipientSlice";
import PaginationLoader from "../utility/PaginationLoader";
import {Status} from "../../typings";

const StyledEventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    padding: 0 15px;
  }
  .pagination-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const StyledEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 180px);
  overflow-y: auto;
  width: 100%;
`;

const RecipientEvents = () => {
  const eventsIds = useSelector(selectAllRecipientEventIds);
  const eventStatus = useSelector(getEventsStatus);
  const paginationData = useSelector(getEventsPagination)
  const { recipientId } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    if (recipientId) {
      dispatch(setCurrentRecipientId(recipientId));
      dispatch(setEventStatus("loading"));
      dispatch(fetchEvents({ page: 1, perPage: 10 }));
    }
  }, [recipientId, dispatch]);

  const loadMoreEvents = () => {
    dispatch(setEventStatus("loading"));
    dispatch(fetchEvents({ page: paginationData.currentPage + 1, perPage: paginationData.pageSize }))
  }

  return (
    <StyledEventsWrapper>
      <h2>Recipient Events</h2>
      <div className="pagination-container">
        <PaginationLoader paginationState={eventStatus as Status} handleLoadMore={() => loadMoreEvents()} />
      </div>
      <StyledEventsContainer>
        { eventsIds.map((eventId, index) => {
          return(
            <EventCard key={index} eventId={eventId} />
          )
        }) }
      </StyledEventsContainer>
    </StyledEventsWrapper>
  );
};

export default RecipientEvents;
