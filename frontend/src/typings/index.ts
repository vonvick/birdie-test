import React from "react";
import {IconName} from "@fortawesome/fontawesome-common-types";

export interface PayloadAttributesInterface {
  id: string;
  event_type: string;
  visit_id: string;
  timestamp: string;
  caregiver_id: string;
  care_recipient_id: string;
  [x: string]: any;
}

export interface PaginationInterface {
  currentPage: number
  pageCount?: number
  pageSize: number
  totalCount?: number
}

export interface EventTypesInterface {
  id: string
  fields: string[]
}

export interface RecipientInterface {
  care_recipient_id: string
  [x: string]: any
}

export interface PaginationRequestInterface {
  perPage: number
  page: number
}

export interface TableHeaderInterface {
  className?: string
  columnName: string
  columnId: string
}

export interface ExtendedProps extends React.HTMLAttributes<HTMLElement> {
  name?: string
}

export interface MenuList {
  name: string
  path: string
}

export type Status = "completed" | "loading" | "loaded" | "empty" | "error";

export interface IconMappingsInterface {
  alert_qualified: IconName;
  alert_raised: IconName;
  catheter_observation: IconName;
  check_in: IconName;
  check_out: IconName;
  concern_raised: IconName;
  fluid_intake_observation: IconName;
  food_intake_observation: IconName;
  general_observation: IconName;
  incontinence_pad_observation: IconName;
  medication_schedule_created: IconName;
  medication_schedule_updated: IconName;
  mental_health_observation: IconName;
  mood_observation: IconName;
  no_medication_observation_received: IconName;
  physical_health_observation: IconName;
  regular_medication_maybe_taken: IconName;
  regular_medication_not_taken: IconName;
  regular_medication_partially_taken: IconName;
  regular_medication_taken: IconName;
  task_completed: IconName;
  task_completion_reverted: IconName;
  task_schedule_created: IconName;
  toilet_visit_recorded: IconName;
  visit_cancelled: IconName;
  visit_completed: IconName;
  [x: string]: IconName;
}
