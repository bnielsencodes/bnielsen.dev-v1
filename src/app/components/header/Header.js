import HeaderIntro from "@/app/components/header/HeaderIntro";
import TsParticles from "@/app/components/header/TsParticles";

export default function Header() {
  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.container}>
          <HeaderIntro />
        </div>
        <TsParticles />
      </header>
    </>
  );
}
