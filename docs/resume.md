# Resume
Dan Mahoney

117 Pine Creek Dr  
Venetia, PA 15367  
danielmahoney6@gmail.com


## Skills
- **Languages**: Golang, Java, Node.js, Python, Bash
- **Databases**: PostgreSQL, InfluxDB, Oracle, MySQL, DynamoDB, MongoDB, ClickHouse
- **Infra**: Kubernetes, Docker AWS, Docker, Jenkins, Drone CI, Vagrant, Ansible, Terraform, CloudFormation, Packer, CircleCI, Git, PagerDuty, NewRelic, Nagios, Prometheus/Grafana/Alertmanager, Okta, Splunk, Tomcat, Jetty, Apache, NGINX, Envoy
- **OS**: CentOS, RHEL, Ubuntu


## Experience

### **Tatari - Senior Site Reliability Engineer** 
**May 2021 - Present**

- Led effort to deploy ClickHouse infrastructure into Kubernetes OLAP workloads that led to a 300% performance improvement
- Migrated all internal/external applications to ArgoCD to replace legacy continuous deployment system
- Converted AWS lambda infrastructure from zipped source code to container runtime with enhanced CI/CD pipelines
- Rolled out Istio service mesh on all Kubernetes clusters, migrating all services to use Istio within the cluster
- Implemented cluster autoscaling on all EKS cluster to support dynamic workloads
- Integrated Okta with several internal applications using OIDC authorization and authentication with fine-grained access controls
- Wrote a Github App that managed all container and package and container deployments

### **Govini - Lead DevOps Engineer**
**MARCH 2019 - MAY 2021**

- Created an internal CLI used by software engineers to grant temporary access tokens through Okta.
- Designed and implemented OIDC authorization strategy for external/internal applications using Okta as the Identity as a Service provider.
- Create infrastructure from scratch using terraform and cloudformation. Multiple VPC networks that spanned the GovCloud West and East regions with high available architecture.
- Used AWS API Gateway and Lambda to create a web hook framework that is used by internal and external services to trigger downstream processes, and retrieve API tokens.
- Integrated multiple services in AWS (Prometheus, Alert Manager, Nagios, Jenkins, SaaS applications, Trend Micro Deep Security, and Splunk) with Okta and created CLI client for engineering team to interact with Okta APIs
- Provisioned a Jenkins cluster that leveraged spot instances to lower costs on long-running processing jobs
- Created CICD process for projects using Gitlab's framework, Jenkins webhooks, and ansible to build/package/deploy artifacts to development/qa/production environment
- Migrated legacy SaaS architecture to auto-scaling groups to improve resilience and performance
- Automated database backup/restore jobs on Jenkins, and other daily maintenance tasks
- Enhanced network security to introduce private subnets, NACL, and finer-grained access controls on security groups
- Codified multiple production-grade base images with Packer and integrated the build with Jenkins

### **Aquicore - Senior Software Engineer**
**FEBRUARY 2018 - JANUARY 2019**

- Lead engineer on a project to create a new API that would ingest a large volume of energy usage statistics from commercial buildings. Leveraged AWS's API Gateway with lambda proxy integrations and Kinesis streams to process incoming data time series database InfluxDB
- Created immutable infrastructure with Terraform and Cloudformation to maintain and deploy API gateway resources
- Introduced ansible vault into existing playbooks to securely store secrets at rest
- Worked on react native mobile application to create a highly customizable dashboard screen with energy usage statistics. Designed and implemented the frontend and backend for this feature
- Fully automated the deploy process for a react native mobile application utilizing the Expo framework. The process would build react native artifacts, tag, and publish updates to the iOS app store and Android play store

### **Ellucian - Software Engineer**
**FEBRUARY 2017 - FEBRUARY 2018**

- Worked as a full-stack software engineer on a cloud platform SaaS "data lake" application that used AngularJS on the frontend and node.js backend
- Created microservice to interact with multiple Easticache clusters over the destructure "data lake"
- Used AWS API Gateway to build a comprehensive API facade to allow internal data consumers, and external vendors quick access to data, while providing a 15% cost reduction
- Migrated legacy microservices to AWS ECS service and also codify the infrastructure with Terraform and set up proper blue/green deploys
- Set up JMeter work pools to performance test the SaaS application APIs using spot instances to control costs

### **POLITICO - Software Engineer (Contract)** 
**AUGUST 2016 - FEBRUARY 2017**

- Served as a software team on the 2016 election coverage team
- Worked to increase performance and flexibility of election data processor which processed data from all 2016 primary and general election races
- Introduced multi-threading into the Java 9 spring boot application
- Created an internal application to aggregate user actions (unique logins, track clicks, user subscription events, and other important analytics) on www.politico.com and www.politicopro.com and compare with listserv activity from customers. The application was built with node.js on the express framework

### **CapTech Ventures Inc. - Consultant (Contract)**
**JANUARY 2016 - AUGUST 2016**

- Served as a software engineer consultant for L Brands Inc (Victoria Secrets) and was a backend software engineer on the mobile applications team
- Helped build a sophisticated microservices architecture used by Victoria's Secret and Bed Bath and Beyond iOS and Android mobile applications
- Used Spring Boot and MVC 4 Java framework to create APIs that served custom data models, in-store and online offers, and process user locations
- Wrote unit and integration tests to satisfy an 80% code coverage requirement
- Helped deploy Hazelcast in-memory data grids to cache unique data objects and increase the performance of the APIs

### **Highmark Inc., Pittsburgh, PA - Assoc. Application Developer**
**DECEMBER 2013 - JANUARY 2016**

- Created and maintained internal and external RESTful web services that processed insurance claims
- Used AngularJS 1.x to create a responsive mobile-friendly design
- Decreased page load time by 60% for an internal dashboard application
- Created several APIs that replaced legacy PL/SQL stored procedures

## Education
AUGUST 2007 - MAY 2012  
University of Pittsburgh, Pittsburgh, PA - B.S. Computer Science

AUGUST 2007 - MAY 2012  
University of Pittsburgh, Pittsburgh, PA - B.S. Health Information Management
