# Finance Buddy

#### Useful Commands

```
npm create vite@latest

npm init -y
npm i express cors body-parser express-async-errors express-validator
npm i -D @types/cors @types/express @types/node ts-node-dev typescript
npx tsc --init

npm install dotenv --save
ts-node-dev -r dotenv/config src/index.ts
```

### Todo

1. Swagger docs
2. Lint and Format
3. Error Handling
4. Request Validation
5. Unit test cases

### Deployment

```
docker build -t techwithshubh/finance-ui:$(cat version) .

Updating new version
echo NEW_VERSION=$(echo $(cat version) | awk -F. '{$NF = $NF + 1;} 1' | sed 's/ /./g')

kubectl apply -f infra/finance-ui.deployment.yml
kubectl port-forward svc/finance-ui-service 8081:80
kubectl get deployment
kubectl describe deployment finance-ui-deployment
kubectl rollout restart deployment finance-ui-deployment

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

kubectl get pods --namespace=ingress-nginx
kubectl apply -f finance-ui.ingress.yml
kubectl get ingress

kubectl delete -f finance-ui.deployment.yml
kubectl delete -f finance-ui.ingress.yml
kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

kubectl apply -f finance-ui.config.yml
kubectl delete -f finance-ui.config.yml
```

## Steps for Actions Pipeline

1. `cd` into ui folder
2. Generate new image version using git sha hash

```
echo "image_version=$(git rev-parse --short "$GITHUB_SHA")" >> "$GITHUB_ENV"
```
3. Once the version file is updated with new version, it should run the docker build using below command

```
docker build -t techwithshubh/finance-ui:$(cat version) .
```

4. Once the build is done. It should clone this github repo: `https://github.com/techwithshubh/finance-buddy-infra`

5. Install kustomize cli 
6. cd into dev folder `cd finance-buddy-infra/dev`
7. Run below command to the version in Kustomization.yml file using below command

```
kustomize edit set image FINANCE_BUDDY_UI_IMAGE=techwithshubh/finance-ui:$NEW_VERSION
```

8. Once the image version is updated successfully. Do the commit and push the changes to finance-buddy-infra repo.

## Note

1. For generating ssh key use below

```
ssh-keygen -t rsa -C "techwithshubh"
cp id_rsa id_rsa.pem
ssh-keygen -p -m pem -f id_rsa.pem
```