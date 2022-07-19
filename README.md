This project is created with React and Docker and deployed on GCP.     
Visit https://www.boliu.ca to see details.      
   
Step1: To build image   
docker build -t personal-website .   
   
Step2: Run container from image    
docker run -it -p 3001:3000 personal-website    

Step3: Register image in GCP (HAVE gcloud CLI ready)    
docker tag personal-website us-central1-docker.pkg.dev/v2ray-vpn-307805/web/personal-website:<tag>
docker push us-central1-docker.pkg.dev/v2ray-vpn-307805/web/personal-website:latest:<tag>

Step4: Deploy using GCP cloud run