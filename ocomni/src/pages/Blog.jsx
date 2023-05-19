import React from "react";

export default function Blog() {
  return (
    <>
      <div className="">
        <div className="">
          <img
            src="https://media.istockphoto.com/id/522185319/photo/oh-no.jpg?s=612x612&w=0&k=20&c=ZaJhYVPSuPEdJuWQ4w1YA97Q5jQARdzCduph3QSDL84="
            alt=""
            className="object-cover w-full h-72"
          />
        </div>
        <div>
          {/* {infoBlogPost && infoBlogPost.length > 0 && (
            <div className="m-2 mb-6">
              <h2 className="px-3 text-2xl mt-6 font-semibold">
                Recent Informational Blog Post
              </h2>
              <Link to="/infoBlogPosts">
                <p className="px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out">
                  Show more Blog Posts
                </p>
              </Link>
              <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {infoBlogPost.map((blogPost) => (
                  <ListingItem
                    key={blogPost.id}
                    listing={blogPost.data}
                    id={blogPost.id}
                  />
                ))}
              </ul>
            </div>
          )} */}
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

//Info Blog stuff

// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import {
//   collection,
//   getDocs,
//   limit,
//   orderBy,
//   query,
//   startAfter,
//   where,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import Spinner from "../components/Spinner";
// import BlogItem from "../components/BlogItem";

// export default function InfoBlogs() {
//   const [blogPosts, setBlogPosts] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [lastFetchBlogPost, setLastFetchBlogPost] = useState(null);
//   useEffect(() => {
//     async function fetchBlogPosts() {
//       try {
//         const blogPostRef = collection(db, "blogs");
//         const q = query(
//           listingRef,
//           where("offer", "==", true),
//           orderBy("timestamp", "desc"),
//           limit(8)
//         );
//         const querySnap = await getDocs(q);
//         const lastVisible = querySnap.docs[querySnap.docs.length - 1];
//         setLastFetchListing(lastVisible);
//         const listings = [];
//         querySnap.forEach((doc) => {
//           return listings.push({
//             id: doc.id,
//             data: doc.data(),
//           });
//         });
//         setListings(listings);
//         setLoading(false);
//       } catch (error) {
//         toast.error("Could not fetch listing");
//       }
//     }

//     fetchListings();
//   }, []);

//   async function onFetchMoreListings() {
//     try {
//       const listingRef = collection(db, "listings");
//       const q = query(
//         listingRef,
//         where("offer", "==", true),
//         orderBy("timestamp", "desc"),
//         startAfter(lastFetchedListing),
//         limit(4)
//       );
//       const querySnap = await getDocs(q);
//       const lastVisible = querySnap.docs[querySnap.docs.length - 1];
//       setLastFetchListing(lastVisible);
//       const listings = [];
//       querySnap.forEach((doc) => {
//         return listings.push({
//           id: doc.id,
//           data: doc.data(),
//         });
//       });
//       setListings((prevState) => [...prevState, ...listings]);
//       setLoading(false);
//     } catch (error) {
//       toast.error("Could not fetch listing");
//     }
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-3">
//       <h1 className="text-3xl text-center mt-6 font-bold mb-6">Offers</h1>
//       {loading ? (
//         <Spinner />
//       ) : listings && listings.length > 0 ? (
//         <>
//           <main>
//             <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
//               {listings.map((listing) => (
//                 <ListingItem
//                   key={listing.id}
//                   id={listing.id}
//                   listing={listing.data}
//                 />
//               ))}
//             </ul>
//           </main>
//           {lastFetchedListing && (
//             <div className="flex justify-center items-center">
//               <button
//                 onClick={onFetchMoreListings}
//                 className="bg-white px-3 py-1.5 text-gray-700 border border-gray-300 mb-6 mt-6 hover:border-slate-600 rounded transition duration-150 ease-in-out"
//               >
//                 Load more
//               </button>
//             </div>
//           )}
//         </>
//       ) : (
//         <p>There are no current offers</p>
//       )}
//     </div>
//   );
// }
