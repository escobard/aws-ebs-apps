# docker-courses-aws-product

Production version available here: http://create-app.us-east-2.elasticbeanstalk.com/

## Product Summary

Section 8-11 of the Docker and Kubernetes: the complete guide on udemy.

Boilerplate application forked from [escobard/create-app](https://github.com/escobard/create-app). 

Expanded documentation on app usage here: [escobard/create-app/README.md](https://github.com/escobard/create-app/blob/master/README.md)

Over-the-top tech stack was chosen to experiment with multi-container CI / CD practices with AWS:
 - using nginx to route requests to either react UI or express server API.
 - PostgresDB to store values that have been calculated.
 - React user interface as the controller.
 - Node.js API.

## AWS Elastic Beanstalk with Containers

Documentation for our `Dockerrun.aws.json` file here: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definitions

## AWS dedicated DB

For this stack, a containerized DB instance was chosen instead of a managed AWS solution to save money.

### Contribution

All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## Libraries, Frameworks & Tools

[Amazon Web Services](https://aws.amazon.com/)

[Travis CI](https://travis-ci.com/)