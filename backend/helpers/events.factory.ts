// import * as Faker from 'faker';
//
// const eventTypesAndFields = () => {
//   return {
//     alert_qualified: [],
//     alert_raised: [],
//     catheter_observation: [],
//     check_in: [],
//     check_out: [],
//     concern_raised: [],
//     fluid_intake_observation: [],
//     food_intake_observation: [],
//     general_observation: [],
//     incontinence_pad_observation: [],
//     medication_schedule_created: [],
//     medication_schedule_updated: [],
//     mental_health_observation: [],
//     mood_observation: [],
//     no_medication_observation_received: [],
//     physical_health_observation: [],
//     regular_medication_maybe_taken: [],
//     regular_medication_not_taken: [],
//     regular_medication_partially_taken: [],
//     regular_medication_taken: [],
//     task_completed: [],
//     task_completion_reverted: [],
//     task_schedule_created: [],
//     toilet_visit_recorded: [],
//     visit_cancelled: [],
//     visit_completed: [],
//   }
// }
//
// export const caregiver_ids = () => {
//   const ids = []
//   for(let i = 0; i < 3; i++) {
//     ids.push(Faker.datatype.uuid());
//   }
//
//   return ids;
// };
//
// export const payloadFactory = ({ event_type, caregiver_id, care_recipient_id }) => {
//   return {
//     id: Faker.datatype.uuid(),
//     visit_id: Faker.datatype.uuid(),
//     timestamp: Faker.date.past(),
//     event_type,
//     caregiver_id,
//     task_instance_id: "dHwzNzA0NWY3ZC1iOTIxLTQ5MDQtODI1Zi1kMWM0ZWMxZTg4MGR8MjAxOS0wNS0wNlQyMzowMDowMC4wMDBafEFOWVRJTUU=",
//     task_schedule_id: "37045f7d-b921-4904-825f-d1c4ec1e880d",
//     care_recipient_id,
//     task_definition_id: "81fcab77-5192-4abc-86e4-0e73752bfcbf",
//     task_schedule_note: "Assist Annie to put clean clothes on, assist with putting shoes on.",
//     task_definition_description: "Assist to dress / undress"
//   };
// };
//
// export const eventsFactory = ({ event_type, payload, care_recipient_id, caregiver_id }) => {
//   return {
//     id: Faker.datatype.uuid(),
//     event_type,
//     visit_id: "87148b29-2939-484c-9ae1-b8656a1298bf",
//     timestamp: "2019-05-07T16:04:14.404Z",
//     caregiver_id,
//     care_recipient_id,
//     payload: {
//       id: "74515760-1fd4-4538-a586-671203fbd2e8",
//       visit_id: "87148b29-2939-484c-9ae1-b8656a1298bf",
//       timestamp: "2019-05-07T16:04:14.404Z",
//       event_type: "task_completed",
//       caregiver_id: "183ed034-359b-4dab-9f7f-681f26c0c144",
//       task_instance_id: "dHwzNzA0NWY3ZC1iOTIxLTQ5MDQtODI1Zi1kMWM0ZWMxZTg4MGR8MjAxOS0wNS0wNlQyMzowMDowMC4wMDBafEFOWVRJTUU=",
//       task_schedule_id: "37045f7d-b921-4904-825f-d1c4ec1e880d",
//       care_recipient_id: "e3e2bff8-d318-4760-beea-841a75f00227",
//       task_definition_id: "81fcab77-5192-4abc-86e4-0e73752bfcbf",
//       task_schedule_note: "Assist Annie to put clean clothes on, assist with putting shoes on.",
//       task_definition_description: "Assist to dress / undress"
//     }
//   };
// };
