export const fetchPets = async (searchTerm ="", species="") => 
{
    
   const res = await fetch(`http://localhost:5000/allpets?search=${searchTerm}&species=${species}`,
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