"use client";

import Image from "next/image";
import styles from "./write.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";

import ReactQuill from "react-quill";

const WritePage = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  //   useEffect(() => {
  //     const storage = getStorage(app);
  //     const upload = () => {
  //       const name = new Date().getTime() + file.name;
  //       const storageRef = ref(storage, name);

  //       const uploadTask = uploadBytesResumable(storageRef, file);

  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           console.log("Upload is " + progress + "% done");
  //           switch (snapshot.state) {
  //             case "paused":
  //               console.log("Upload is paused");
  //               break;
  //             case "running":
  //               console.log("Upload is running");
  //               break;
  //           }
  //         },
  //         (error) => {},
  //         () => {
  //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //             setMedia(downloadURL);
  //           });
  //         }
  //       );
  //     };

  //     file && upload();
  //   }, [file]);

  //   if (status === "loading") {
  //     return <div className={styles.loading}>Loading...</div>;
  //   }

  //   if (status === "unauthenticated") {
  //     router.push("/");
  //   }

  const slugify = (str: any) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  // postId: { type: String, required: true, unique: true },
  // userId: { type: String, required: true, unique: true },
  // title: { type: String, required: true },
  // content: { type: String, required: true },
  // comments: { type: Array },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },

  const postData = {
    postId: "2121212121",
    userId: "swswswsws332",
    title: "test",
    content: "test 123",
    comments: [],
  };
  const handleSubmit = async () => {
    const res = await fetch("/api/post/create", {
      method: "POST",
      body: JSON.stringify({
        postId: "2121212121",
        userId: "swswswsws332",
        title: "test",
        content: "test 123",
        comments: [],
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      // router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className="flex justify-center items-center mt-20">
        <h2 className="text-3xl align-middle font-semibold">Let's Write </h2>
      </div>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              //   onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
