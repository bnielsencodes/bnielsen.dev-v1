import HeaderIntro from "@/app/components/header/HeaderIntro";

export default function Header() {
  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.container}>
          <HeaderIntro />
        </div>
      </header>
    </>
  );
}
