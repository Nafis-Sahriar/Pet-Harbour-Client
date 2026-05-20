# Pet Harbor

Pet Harbor is a full-stack Pet Adoption Platform where real users can browse pets, send adoption requests, manage their listed pets, manage their requests and save pets to their wishlist.

#Live Demo: [https://pet-harbour.vercel.app/](https://pet-harbour.vercel.app/)

Pet Harbor was built using the MERN Stack with Next.js App Router for the frontend and Express.js + MongoDB for the backend.

The main goal of this project is to create a modern and user-friendly pet adoption platform with real-world features like authentication, adoption workflow, filtering, wishlist management, dashboard management, and responsive UI design.

---

# Project Overview

Pet Harbor helps a verified logged in users list their own pet , adopt pets easily through a clean and responsive interface.Users can browse available pets,send adoption requests,and manage their own pet listings. And the pet owner will receive the request and can accept or reject the request. Once a request is accepted, the pet's status automatically gets updated to adopted and all other users who requested the same pet, their request will immediately get rejected. The main feature of Pet Harbor is that a user can List their pet for adoption and manage the listings through, edit the pet info or delete the entire pet listing. Also the user will be able to see all the request for a specific pet and manage the requests. 

The platform also contains a complete adoption workflow system where pet owners can manage incoming requests and control the adoption process. And
also requesters can manage their request and see the status of their request. It can be pending, accepted or rejected or the pet may be get adopted by someone else. The project also contains a wishlist system where users can easily save pets they are interested and have plan to adopt in the future. 

Also another important feature of this project is the search and filter system where users can search pets by name, and can also filter by species. 
The search functionality was implemented using MongoDB's `$regex` operator for flexible searching, and the filter system was implemented using the `$in` operator to allow filtering by multiple species.The search and filter state is persisted in the URL query parameters, allowing users to share their search results or return to them later.

# Technologies and NPM Packages Used

## Frontend

- Next.js App Router
- React.js
- Tailwind CSS
- HeroUI - For maximum component.
- Lucide React
- React Hot Toast
- React Fast Marquee
- React Icons
- Framer Motion
- Animate.css
- HTML, CSS, JavaScript

# Authentication 
- Better Auth and JWT Token (For Authentication)
- Google OAuth (For Google Authentication).

---

# Backend

- Node.js
- Express.js
- MongoDB Native Driver
- JWT Authentication
- CORS
- Dotenv
- JOSE-cjs for JWT Verification.

---

# Database

- MongoDB Atlas

---

# Deployment

- Vercel

---

# Core Features

# Authentication System

Implemented secure authentication using Better Auth. User can Sign up using their email , password and also Implemented Google Authentication, 
so that user can easily sign in using their Google Account. Without authentication users cannot acces the Dashboard, Pet Details, Adoption Form and all Dashboard contents.

## Features

- User Registration
- User Login
- Session Based Authentication
- Persistent Login Session
- Protected Routes
- Protected Backend APIs used JWT Authentication.
- Secure Dashboard Access
- User-based Conditional Rendering

---

# Pet Management System

Users can fully manage pet listings.

## A Users Can

- Add a new pet
- Edit their own listed existing pet.
- Delete their own pets
- View all pets They have listed.
- View featured pets
- View detailed pet information
- Add pet to wishlist.
- View requested pets status.

# Adoption Request System

The adoption system contains advanced backend logic and dynamic UI rendering.

## The person who do not own the pet Can

- Send adoption requests
- Choose adoption date
- Write a custom adoption message
- View request status.
- View pet details.
- Monitor pet adoption status.
- View if the pet got adopted by someone else.

## Pet Owners Can

- View all requests for their pets with the requester's information and message.
- Accept requests
- Reject requests
- Manage requests from dashboard
- See how many request the have got for each pet both in the Listing page and in Pet Details page.

---

# Advanced Adoption Workflow Logic

When a user sends an adoption request -
- The request is stored in the database with a pending status
- The UI of the user changes to show the pending status. 
- The pet owner receives the request and can see the requester's information and message in the request modal.
- The user can also see the number of requests per pet on the request modal icon.

When an owner accepts one adoption request:

- The selected request becomes accepted.
- Requester's UI automatically gets updated to show the accepted status.
- All other requests for the same pet automatically become rejected
- And the UI of all other requesters automatically gets updated to show the rejected status.
- Pet adoption status changes to adopted.
- The pet is removed from the available pets list.
- The owner can no longer receive new request for that pet.
- The owner can no longer edit that one pet's information.
- All other users who not even requested will see that the pet got adopted by someone else UI in
the pet details page.
- When a pet gets adopted, no one can also add it to their wishlist. 
- The pet is marked as adopted in the database.
- The pet becomes unavailable for future adoption.

---

# Conditional Rendering System

The project contains advanced UI rendering logic depending on different conditions.

## Features
---

### UI Changes Based On

- Pet Owner
- Logged In User
- Pending Request
- Accepted Request
- Rejected Request
- Already Adopted Pet
- Non owner


Different components automatically render depending on the current state of the pet or request.

---

# Wishlist System

Users can save pets into a wishlist.

## Features

- Add pets to wishlist from homepage's featured section or All pets Page or by searching and filtering pets.
- Prevent duplicate wishlist entries.
- View all wishlist items inside their dashboard route.
- Navigate directly to pet details page or remove the pet from wishlist.
- User-specific wishlist system. One user cannot see other user's wishlist and cannot add or remove pets from other user's wishlist.

---

# Search and Filter System

Implemented using MongoDB query operators and URL query parameters.

## Features

### $regex Search

Users can search pets by:

- Pet Name
- User can enter full name or a single character to search. 
- The search is case-insensitive and matches any part of the pet name.
- If the user starts typing, the result will not be shown until the user clicks search button.
- All pets will automatically get shown again when the search query is cleared.

### $in Filter

Users can filter pets bt:

- Species
- Users can select one species to filter.
- They will see the matching pets immediately.
- If the user chooses "Filter by Species" option, all pets will automatically get shown again.

# Dashboard System

Each logged in user has a personal dashboard.

### Features

- My Listings
- My Requests
- Wishlist Section
- Request Management
- Pet Management
- Adoption Status Monitoring

---

## UI Color Palette

```bash
#FFFCF6
#F4E7D3
#E8D1B1
#CFA77A
#80573A
#2F2D2A
```

---

# UI & UX Features

- Fully Responsive Design
- Dynamic Conditional Rendering
- Loading States
- Disabled Buttons During Requests
- Toast Notifications
- Smooth User Experience
- Clean Dashboard Layout
- Mobile Friendly Navigation
- Reusable Components

---

# Loading , Error and State Management

Implemented multiple loading systems for better user experience.

## Features

- Next.js `loading.js`
- Dynamic Loading UI
- Disabled Actions During API Calls
- State-based Rendering
- Real-time UI Updates
- Refresh After Mutation
- Error Handling with Toast Notifications
- Next.js `error.js` for Global Error Handling
- Next.js `not-found.js` for 404 Handling

---

## Implemented Optimizations

- Server Side Rendering
- Dynamic Rendering
- Optimized Fetching
- Reusable Components
- Conditional Component Rendering
- Reduced Unnecessary Requests

---

# Final Note

Pet Harbor was built as a real-world full-stack MERN project to practice modern web development concepts using Next.js App Router and Express.js backend architecture. It is my first project where I implemented a complete workflow of a real world system and used Server, Database for data
storing.

This project helped to  improve my understanding of:

- Backend Architecture
- API Design
- Database Design
- Authentication Systems
- Dynamic UI Rendering
- Full Stack Data Flow
- Real-world Business Logic
- Modern React Patterns
- Dashboard Systems
- Scalable Component Design

I will continue to learn and build ....... In sha Allah.

### Author

Nafis Sahriar Redwan

May 21 - 2026
YKSG-1, DSC, Dhaka.