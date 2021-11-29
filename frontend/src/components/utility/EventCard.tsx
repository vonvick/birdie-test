import styled from "styled-components";
import {EventTypesInterface, ExtendedProps, IconMappingsInterface} from "../../typings";
import {useSelector} from "react-redux";
import {selectEventTypeById} from "../../redux/features/eventsTypes/eventTypesSlice";
import {RootState} from "../../redux/store";
import {selectEventsById} from "../../redux/features/events/eventsSlice";
import {EntityId} from "@reduxjs/toolkit";
import {formatFieldsName} from "../../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import iconsMapping from "../../helpers/icons-mapping.json"

const StyledCard = styled.div`
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  width: 350px;
  height: auto;
  border-radius: 8px;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  min-height: 250px;
  position: relative;
  margin: 10px auto;
  .timestamp {
    position: absolute;
    bottom: 8px;
    font-size: 10px;
    font-style: italic;
  }
`;

const StyledCardDetailsWrapper = styled.div`
  display: flex;
  .event-icon {
    display: flex;
    align-items: center;
    padding: 5px;
    flex: 1 0 150px;
  }
  .event-details {
    display: flex;
    flex-flow: column wrap;
    flex: 1 0 320px;
  }
  .field-text {
    font-size: 12px;
    span {
      font-weight: bold;
    }
  }
`;

interface EventCardProps extends ExtendedProps {
  eventId: EntityId
}

const EventCard = ({ children, ...rest }: EventCardProps) => {
  const { eventId } = rest;
  const event = useSelector((state: RootState) => selectEventsById(state, eventId))
  const eventType = useSelector((state: RootState) => selectEventTypeById(state, event?.event_type as EntityId)) as EventTypesInterface;
  let date = 'N/A'
  let time = ''

  if (typeof event !== 'undefined') {
    const { event_type } = event;
    const iconName = (iconsMapping as IconMappingsInterface)[event_type]
    const timestamp = new Date(event.timestamp)
    date = timestamp.toDateString();
    time = timestamp.toLocaleTimeString();

    return (
      <StyledCard {...rest}>
        <div className="event-type">
          <h4 className="capitalize">{formatFieldsName(event.event_type)}</h4>
        </div>
        <StyledCardDetailsWrapper>
          <div className="event-icon">
            <FontAwesomeIcon icon={iconName} size="3x" />
          </div>
          <div className="event-details">
            {eventType?.fields.map((field: string, index: number) => {
              return (
                <p className="field-text" key={index}><span>{formatFieldsName(field)}:</span> {formatFieldsName(event?.payload[field])}</p>
              );
            })}
          </div>
        </StyledCardDetailsWrapper>
        <div className="timestamp">{date} {time}</div>
        {children}
      </StyledCard>
    );
  } else {
    return (
      <StyledCard {...rest}>
        <h3>No Event Details at this time</h3>
      </StyledCard>
    );
  }
};

export default EventCard;
