export const addNoteFields = [
  {
    name: "subject",
    label: "Subject",
    placeholder: "Enter a subject for your note",
    value: "",
    error: false
  },
  {
    name: "note",
    label: "Note *",
    placeholder: "Enter a description for your note (required)",
    value: "",
    error: false
  },
];

const environment =
  process.env.NODE_ENV === "production" ? "gcp" : "development";

// expand in the future with more variants
const apiRouteController = process.env.REACT_APP_DOCKER_VARIANT === "nginx_routing" ? "/api" : "http://localhost:4000" ;

const apiRoot =
  environment === "gcp"
    ? apiRouteController // setting to same route controller for now, to fix prod
    : apiRouteController;

console.log('api controller', apiRouteController)

export const apiRoutes = {
  addNote: `${apiRoot + "/addNote"}`,
  getNotes: `${apiRoot + "/getNotes"}`
};

export const headers = { "Access-Control-Allow-Origin": "*" };
