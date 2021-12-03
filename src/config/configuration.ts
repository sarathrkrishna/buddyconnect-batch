import CONSTANTS from '../shared/constants/constants';
export default () => ({
  port: parseInt(process.env.PORT, 10) || CONSTANTS.SERVER.DEFAULT_PORT,
  environment: process.env.NODE_ENV,
  db: {
    port:
      parseInt(process.env.POSTGRES_LOCAL_PORT, 10) ||
      CONSTANTS.DATABASE.DEFAULT_PORT,
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  },
});
