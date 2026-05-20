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


