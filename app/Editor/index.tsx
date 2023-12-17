"use client";

import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { v4 as uuidv4 } from "uuid";
import { formats } from "@/lib/utils";

const WritePage = ({ userId }: any) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  console.log(title, "slug", value);

  const handleSubmit = async () => {
    if (title && title) {
      console.log("run");
      const res = await fetch("/api/post/create", {
        method: "POST",
        body: JSON.stringify({
          postId: uuidv4(),
          userId: "jj",
          title: title,
          content: value,
          comments: [],
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        // router.push(`/posts/${data.slug}`);
      }
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
          formats={formats}
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
