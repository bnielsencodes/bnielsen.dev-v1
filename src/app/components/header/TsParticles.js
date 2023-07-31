"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "./TsParticles.module.scss";

export default function TsParticles() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <>
      <Particles
        className={styles.tsparticles}
        init={particlesInit}
        options={{
          fps_limit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: false,
                  force: 2,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 50,
                speed: 0.0075,
                duration: 30,
              },
            },
          },
          particles: {
            color: {
              value: [
                "#785af0",
                "#785af0",
                "#785af0",
                "#785af0",
                "#785af0",
                "#785af0",
                "#785af0",
                "#785af0",
                "#785af0",
                "#785af0",
                "#2cb67d",
              ],
            },
            move: {
              size: true,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1500,
              },
              value: 250,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0,
                speed: 1.1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100,
              },
              polygon: {
                nb_sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "circle",
            },
            size: {
              anim: {
                enable: false,
                size_min: 0.3,
                speed: 4,
                sync: false,
              },
              random: true,
              value: 3,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            type: "none",
            url: "",
          },
          retina_detect: true,
        }}
      />
    </>
  );
}
