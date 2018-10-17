#!/usr/bin/env bash

# DO NOT RUN THIS SCRIPT MANUALLY

# Initial vagrant installations for git, docker, ...

echo ">>> Setting timezone..."
sudo mv /etc/localtime /etc/localtime.bak
sudo ln -s /usr/share/zoneinfo/Europe/Berlin /etc/localtime

echo ">>> Removing mooval repos from YUM..."
sudo rm -r /etc/yum.repos.d/moovel_repo.repo
sudo rm -r /etc/yum.repos.d/logstash_1.3.x_packages.repo

echo ">>> Installing software..."
sudo yum install -y git gcc zip unzip curl vim

echo ">>> Installing OS updates..."
sudo yum update -y

echo ">>> Installing docker..."
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce
sudo groupadd docker
sudo usermod -aG docker vagrant
sudo mkdir -p /etc/systemd/system/docker.service.d
sudo cat << EOF > /etc/systemd/system/docker.service.d/http-proxy.conf
[Service]
Environment="HTTP_PROXY=http://10.0.2.2:3128" "HTTPS_PROXY=http://10.0.2.2:3128"
EOF
sudo systemctl enable docker
sudo systemctl start docker

# Check docker version
sudo docker version

# Set docker proxy
mkdir .docker
cat << EOF > .docker/config.json
{
  "proxies":
  {
    "default":
    {
      "httpProxy": "http://10.0.2.2:3128",
      "httpsProxy": "http://10.0.2.2:3128"
    }
  }
}
EOF

