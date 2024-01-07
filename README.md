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
docker build -t techwithshubh/finance-ui .

kubectl apply -f finance-ui.deployment.yml
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