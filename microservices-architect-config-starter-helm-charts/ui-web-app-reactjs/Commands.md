
helm install ui .\ui-helm

& minikube -p minikube docker-env --shell powershell | Invoke-Expression -- to access minikube docker environment 

docker build -t react-ui:latest . -- to build the image locally 
To upgrade helm charts to use local image -- helm upgrade --install ui .\ui-helm `
>>   --set image.repository=react-ui `
>>   --set image.tag=latest `
>>   --set image.pullPolicy=IfNotPresent

kubectl get all
kubectl port-forward pod/ui-deployment-695c867dd4-t7xjz 8080:8080 -- for port forwarding 
Access the application at http://localhost:8080