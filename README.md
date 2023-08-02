# Realtime Chat App

This is a Realtime Chat App built using Next.js, React, TypeScript, Tailwind CSS, Redis, and Upstash. It allows users to engage in real-time conversations with each other through Google login.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Acknowledgments](#acknowledgments)

## Introduction

This Realtime Chat App provides a seamless and interactive platform for users to chat with others in real time. It is built on top of Next.js, a popular React framework that allows for server-side rendering and easy scalability.

## Features

- Realtime chat with multiple users
- Simple and intuitive user interface
- Message notifications
- Secure authentication system
- Google login

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Redis
- Upstash

## Getting Started

To run this application on your local machine, follow these steps:

1. Clone the repository: git clone

2. Install the dependencies: npm i

3. Start the development server: npm run dev

   
4. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Setup

Before running the application, you need to set up the Redis database. Follow these steps to configure it:

1. Create an account on [Upstash](https://upstash.com/) if you don't have one already.
2. Set the environment variables. You can create a `.env` file in the root directory of the project and add the following:

NEXTAUTH_SECRET=whateveryouwant

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

PUSHER_APP_ID=""
NEXT_PUBLIC_PUSHER_APP_KEY=""
PUSHER_APP_SECRET=""

3. You're all set! Now, you can start the development server and enjoy the Realtime Chat App.

## Acknowledgments

This Realtime Chat App was developed with the guidance and support from the "Josh tried coding" YouTube channel. Thanks to "Josh tried coding" for the valuable tutorials and insights that made this project possible.

Make sure to check out the "Josh tried coding" channel for more amazing coding content and tutorials: [Josh tried coding - YouTube](https://www.youtube.com/@joshtriedcoding)

---

Happy chatting! 😊


