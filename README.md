# send-events

## What is send-events?
 > read JSON encoded events and send to Amplitude account
 
# Table of Contents

* [send-events](#send-events)
* [Technology Stack](#technology-stack)
* [Installation](#installation)
* [Operation](#operation)
* [Send Events to Amplitude](#send-events-to-amplitude)
* [Testing](#testing)
* [Amplitude API](#amplitude-api)

# Technology Stack

 * Node/Express
 * Bootstrap

## Installation

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

## Operation

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

## Send Events to Amplitude
There are 2 ways to send events:

1. HTTP request GET /events
2. click "Send events to amplitude" button on homepage

## Testing

### Route testing

Confirm routes are working properly and returing Status Code 200

Start server for testing (Make sure server is not running prior to test): 
```sh
# run test script
npm test
```

## Amplitude API
>Documentation for:
[Amplitude](https://amplitude.zendesk.com/hc/en-us/articles/204771828 "Amplitude")
