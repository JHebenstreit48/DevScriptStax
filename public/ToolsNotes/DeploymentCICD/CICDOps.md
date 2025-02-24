# CI/CD and DevOps Notes

## What is Deployment?

<span class="emphasis">Deployment</span> is the full <span class="emphasis">process</span> of getting an <span class="emphasis">application</span> <span class="secondEmphasis">production</span> ready.

### Key Aspects of Deployment
- Ensures the <span class="emphasis">web application</span> is <span class="secondEmphasis">reliable</span>, <span class="secondEmphasis">secure</span>, and properly <span class="secondEmphasis">maintained</span> over time.
- A production-ready application includes:
  - Environment configuration
  - Automated testing
  - Version control
  - Security
  - Monitoring and logging
  - Documentation

---

## DevOps Overview

<span class="emphasis">DevOps</span> is a mindset devoted to collaboration, communication, and integration between developers and operations teams.

### Goals of DevOps
- Foster collaboration and experimentation among teams.
- Improve the speed and reliability of projects by automating parts of the development and deployment process.

### Key Questions in DevOps
- **Why?**: The reasons and motivations behind a strategy.
- **What?**: The goals and objectives the strategy intends to achieve.
- **Who?**: The people who benefit from the solution.

### Standards vs. Rules in DevOps
- **Standards**: Flexible norms or guidelines agreed upon as best practices.
  - Promote efficiency, consistency, and quality.
  - Adaptable to specific projects or situations.
- **Rules**: Strict, non-negotiable requirements.
  - Address legal, security, and safety concerns.

### Examples of Rules
- Password and secret key policies.
- Access control rules.
- Workplace compliance.

---

## Continuous Integration and Continuous Delivery/Deployment (CI/CD)

### What is CI/CD?
- A set of practices and tools that automate the process of software development, testing, and deployment.
- Shortens the software development lifecycle and bridges the gap between development and IT infrastructure maintenance.

### Benefits of CI/CD
- Shortens the time needed for deployment, increasing productivity.
- Results in fewer bugs in the product.

### CI/CD Pipeline
- Consists of **continuous integration**, **delivery**, and **deployment** phases.
- Each phase has specific tasks or processes to perform.
- Each phase consists of sequential stages defined by the company’s workflows.

### CI/CD Pipeline Stages
1. **Code**
2. **Build**
3. **Integrate**
4. **Test**
5. **Release**
6. **Deploy**

### Phases of CI/CD
- **Continuous Integration**: Spans from the Code to Test phase.
  - Automatically integrates and tests code changes.
- **Continuous Delivery**: Spans from the Code to Release phase.
  - Automatically releases to a staging environment when all tests pass.
- **Continuous Deployment**: Spans from the Code to Deployment phase.
  - Automatically releases to the production environment if all tests pass.
```
