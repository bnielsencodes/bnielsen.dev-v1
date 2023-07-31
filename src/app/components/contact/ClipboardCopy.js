export default function ClipboardCopy() {
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
