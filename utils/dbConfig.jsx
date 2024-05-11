import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'

const sql = neon('postgresql://gradydb_owner:pw4WRQ6HuzFB@ep-proud-king-a161pl59.ap-southeast-1.aws.neon.tech/gradydb?sslmode=require');
export const db = drizzle(sql,{schema});