export const fetchPets = async (searchTerm ="") => 
{
    
   const res = await fetch(`http://localhost:5000/allpets?search=${searchTerm}`,
      {
         cache:"no-store"
      }
   );

   if(!res.ok)
   {
      throw new Error("Failed to fetch pets");

   }
   const data = await res.json();
   return data || [];

}