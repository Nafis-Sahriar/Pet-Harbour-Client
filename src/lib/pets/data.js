export const fetchPets = async (searchTerm ="", species="") => 
{
    
   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allpets?search=${searchTerm}&species=${species}`,
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