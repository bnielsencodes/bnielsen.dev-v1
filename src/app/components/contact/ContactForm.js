"use client";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/sharp-solid-svg-icons";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknewaqj");

  if (state.succeeded) {
    return <p className={styles["send-confirm"]}>Thanks for your email!</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Let&apos;s connect!</h2>
      <div className={styles.text}>
        Email me at{" "}
        <FontAwesomeIcon className="fa-arrow-right" icon={faArrowRight} />{" "}
        <div className={styles["clipboard-copy"]}>
        </div>
        <strong>
          <a className={styles["mailto"]} href="mailto:bnielsencodes@gmail.com">
            brandon@bnielsen.dev
          </a>
        </strong>
        <br />
        or send me a quick message here:
      </div>
      <fieldset className={styles.fieldset}>
        <input
          className={`${styles["input"]} ${styles["input--name"]}`}
          type="name"
          name="name"
          placeholder="Name"
          aria-label="Enter your name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input
          className={`${styles["input"]} ${styles["input--email"]}`}
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Enter your email address"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className={`${styles["input"]} ${styles["input--message"]}`}
          name="message"
          placeholder="Message"
          aria-label="Enter a message"
          required
          rows="7"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </fieldset>

      <div className={styles.submit}>
        <ValidationError className={styles.error} errors={state.errors} />
        <button
          className={styles["submit-btn"]}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
