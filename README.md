# docker-courses-aws-product

Section 8-12 of the Docker and Kubernetes: the complete guide on udemy.

Proof of concept goal of a fibonacci sequence calculator, which is fully integrated with travis CI and AWS.

Over-the-top tech stack was chosen to experiment with multi-container CI / CD practices with AWS:
 - using nginx to route requests to either react UI or express server API.
 - PostgresDB to store values that have been calculated.
 - Redis to store cached calculated values.
 - A worker to calculate new redis indices, and put values back into redis.