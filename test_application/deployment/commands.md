kubectl apply -f deployment.yaml
kubectl port-forward svc/nginx-service 8080:80 -- for port forwarding
http://localhost:8080
