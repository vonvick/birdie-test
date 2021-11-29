import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface PayloadAttributes {
  id: string;
  event_type: string;
  visit_id: string;
  timestamp: Date;
  caregiver_id: string;
  care_recipient_id: string;
  [x: string]: any;
}

@Entity("events")
export class Events {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column("varchar", { length: 128 })
  event_type!: string;

  @Column("varchar", { length: 36 })
  visit_id!: string;

  @Column("varchar", { length: 50 })
  timestamp!: string;

  @Column("varchar", { length: 36 })
  caregiver_id!: string;

  @Column("varchar", { length: 36 })
  care_recipient_id!: string;

  @Column("json")
  payload!: PayloadAttributes;
}
