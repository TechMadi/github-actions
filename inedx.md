# CI 
A software development practice where code changes are automatically built , tested and intergrated into main codebase frequently

- Automated Testing 
- Code quality  checks 
- Artifact generation 


# CD  ( Continous  Development)
SDP of automatically deploying code  changes to production or staging environments after passing through the CI pipeline 
- Automate Deployment 
- Rollback 
- Environment Provisioning 

# Other tools 
- Gitlab 
- Azure devops 
- Travis CI 
- Bit bucket 
- Jenkins


- Tightly intergrated with github 
- Vast library of Github action in the marketplace 



# Building a   Workflow  with Github Actions 
Configured automated process 

```yaml
#Name of  your workflow
name: learn-github-actions

#pull , issue comments 
on: [push]
jobs: 
    checks-beta-version: 
    # software dependency
        runs-on: ubuntu-latest
        steps: 
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                node-version:'20'

                # shell comands
            - run: npm install -g bats 
            - run: bats -v
        


```

- Github Hosted runners 
- runnr grous for  organizations
- Self-hosted runners
