/* istanbul ignore file */
const apiRoot =
  process.env.NODE_ENV === "production" ? "/api/" : "http://localhost:4000";

export const apiRoutes = {
  addNote: `${`${apiRoot}`}`,
  getNotes: `${`${apiRoot}`}`
};
