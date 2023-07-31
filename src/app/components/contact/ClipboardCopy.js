"use client";
import { useState } from "react";
export default function ClipboardCopy() {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = (e) => {
    e.preventDefault();
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard("brandon@bnielsen.dev")
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button
        className={styles.btn}
        onClick={handleCopyClick}
        title="Click to copy email address"
      >
        <strong>brandon@bnielsen.dev</strong>
      </button>
      <span className={styles.message}>{isCopied ? "Copied!" : ""}</span>
    </>
  );
}
