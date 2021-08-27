# Deploy scripts
For deployment, I have created two separate env branches. One for stage and another for production. The deployment is very simple. We build the assets and optimise for the environments. Then we add and commit them, but we only push the dist directory to the environment branches.

The dist folder git code was found here: https://gist.github.com/joshuapekera/ef364073b01fb0e21d3f.

### Stage
`git checkout master && git branch -D env/stage && git checkout -b env/stage && npm run build && git add -f dist && git commit -m "env/stage: Deploying assets to stage." && git subtree push --prefix dist origin env/stage`

Prior to running this script, we need to delete env/stage branch.

### Prod:
`git checkout master && git branch -D env/prod && git checkout -b env/prod && npm run build && git add -f dist && git commit -m "env/prod: Deploying assets to prod." && git subtree push --prefix dist origin env/prod"`

Prior to running this script, we need to delete env/prod branch.