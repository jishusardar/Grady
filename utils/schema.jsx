import { primaryKey } from "drizzle-orm/mysql-core";
import { integer, numeric, pgTable, serial,varchar } from "drizzle-orm/pg-core";

export const Teams=pgTable('teams',{
    id:serial('id').primaryKey(),
    name:varchar('name').notNull().unique(),
    points:varchar('points').notNull(),
    icon:varchar('icon'),
    createdBy:varchar('createdBy').notNull()
})

export const Grades=pgTable('grade',{
    id:serial('id').primaryKey(),
    name:varchar('Judgename').notNull(),
    points:numeric('points').notNull().default(0),
    TeamId:integer('TeamId').references(()=>Teams.id),
    createdBy:varchar('createdBy').notNull()
})