import React, { useState } from "react";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";

export default function CreateBlogs() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "mark",
    title: "",
    author: "",
    roles: "",
    hook: "",
    heading: "",
    subheading1: "",
    subheading2: "",
    subheading3: "",
    date: "",
    body1: "",
    body2: "",
    body3: "",
    images: {},
  });
  const {
    type,
    title,
    author,
    roles,
    heading,
    subheading1,
    subheading2,
    subheading3,
    date,
    body1,
    body2,
    body3,
    hook,
    images,
  } = formData;

  function addRole(role) {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className =
      "px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-3xl transition duration-150 ease-in-out focus:border-slate-600 mb-6";

    const rolesContainer = document.getElementById("roles-container");
    rolesContainer.appendChild(newInput);
  }

  function onChange(e) {
    let boolean = null;
    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    //Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    //Text/Boolean/Number
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (images.length > 1 || images.length === 0) {
      setLoading(false);
      toast.error("Only one image can be uploaded ");
      return;
    }

    async function storeImage(image) {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error("promise in /CreateBlogs"));
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    }

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch((error) => {
      setLoading(false);
      console.log(error);
      toast.error("Images not uploaded");
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls,
      timestamp: serverTimestamp(),
      userRef: auth.currentUser.uid,
    };
    delete formDataCopy.images;
    const docRef = await addDoc(collection(db, "blogs"), formDataCopy);
    setLoading(false);
    toast.success("Blog post created!");
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">
        Create a Blog Post
      </h1>
      <form onSubmit={onSubmit} action="">
        <p className="text-lg mt-6 font-semibold">Informational / Marketing</p>
        <div className="flex flex-row space-between space-x-3">
          <button
            type="button"
            id="type"
            value="info"
            onClick={onChange}
            className={` px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duraiton-150 ease-in-out w-full ${
              type == "mark" ? "bg-white text-black" : "bg-[#E5E1F4] text-white"
            }`}
          >
            Info
          </button>
          <button
            type="button"
            id="type"
            value="mark"
            onClick={onChange}
            className={` px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duraiton-150 ease-in-out w-full ${
              type == "info" ? "bg-white text-black" : "bg-[#E5E1F4] text-white"
            }`}
          >
            Marketing
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Author Name</p>
        <input
          type="text"
          id="author"
          value={author}
          onChange={onChange}
          placeholder="First and Last Name (Max 50 Characters)."
          maxLength="50"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <div className="">
          <p className="text-lg mt-6 font-semibold">Roles</p>
          <input
            type="text"
            id="roles"
            value={roles}
            onClick={() => {}}
            onChange={onChange}
            placeholder={`Write Job Here`}
            className=" px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded-3xl transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
          />
          <div className="flex flex-row space-x-2 "></div>

          <button
            id="roles"
            value={roles}
            onClick={addRole}
            onChange={onChange}
            className=" px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded-3xl transition duration-150 ease-in-out mb-6 hover:bg-gray-300 active:bg-gray-500"
          >
            <div className="flex flex-row space-x-2 ">
              <p className="whitespace-nowrap">Add More +</p>
            </div>
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Date Published</p>
        <input
          type="date"
          id="date"
          value={date}
          onChange={onChange}
          placeholder="Write as MM/DD/YYYY"
          required
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <p className="text-lg mt-3 font-semibold">Title </p>
        <input
          type="text"
          id="title"
          value={title}
          onChange={onChange}
          placeholder="Title here (Max 100 Characters.)"
          maxLength="100"
          minLength="20"
          required
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-2"
        />
        <p className="text-lg mt-1 font-semibold">Hook</p>
        <textarea
          type="text"
          id="hook"
          value={hook}
          onChange={onChange}
          placeholder="Title here"
          required
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <p className="text-lg font-semibold">Heading</p>
        <textarea
          type="text"
          id="heading"
          value={heading}
          onChange={onChange}
          placeholder="Heading"
          required
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <p className="text-lg font-semibold">Subheading 1</p>
        <textarea
          type="text"
          id="subheading1"
          value={subheading1}
          onChange={onChange}
          placeholder="Subheading"
          required
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Subheading 2</p>
        <textarea
          type="text"
          id="subheading2"
          value={subheading2}
          onChange={onChange}
          placeholder="Subheading"
          required
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Subheading 3</p>
        <textarea
          type="text"
          id="subheading3"
          value={subheading3}
          onChange={onChange}
          placeholder="Subheading"
          required
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <p className="text-lg font-semibold">Body 1</p>
        <textarea
          type="text"
          id="body1"
          value={body1}
          onChange={onChange}
          placeholder="Body Text..."
          required
          max="3000"
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Body 2</p>
        <textarea
          type="text"
          id="body2"
          value={body2}
          onChange={onChange}
          placeholder="Body Text..."
          required
          max="4000"
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Body 3</p>
        <textarea
          type="text"
          id="body3"
          value={body3}
          onChange={onChange}
          placeholder="Body Text..."
          required
          max="3000"
          className="w-full px-4 py-2 text-xl text-gray-700  bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />

        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            id="images"
            onChange={onChange}
            accept=".jpg, .png, .jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>

        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out"
        >
          Create Blog Post
        </button>
      </form>
    </main>
  );
}
