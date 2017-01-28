# send-events

## What is send-events?
> send events to Amplitude account
## Installation steps

#### Environment dependencies
Install node on Ubuntu server (Assumption: Ubuntu 16.04.1 x64 distribution):
```sh
# Node.js v7 installation on Digital Ocean droplet
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Set environment variables:
```sh
# open the following file
nano ~/.bashrc
# add the following lines of code to set environment variables
export AMPLITUDE_API_KEY<insertKey>
export PORT='8080'
# force session to read file
source ~/.bashrc
```

#### Clone project
Clone repo from github:
```sh
# run git clone
git clone https://github.com/juliusbuckley/send-events.git
```

#### Project dependencies

Install project dependencies:
```sh
# run install script
npm install
```

## Running the Application

#### Local development

Install nodemon for dev environment:
```sh
# install nodemon globally 
npm install -g nodemon
```

Start server and transpile with babel-cli:
```sh
# run dev start script
npm run dev:start
```
#### Production

Transpile server folder and start app: 
```sh
# run prod start script
npm start
```

## Testing

### Route testing

Confirm routes are working properly and returing Status Code 200

Start server for testing: 
```sh
# run test script
npm test
```

## APIs used
> Documentation for:
[Amplitude](hhttps://amplitude.zendesk.com/hc/en-us/articles/204771828 "Amplitude")