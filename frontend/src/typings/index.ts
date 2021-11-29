import React from "react";

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
