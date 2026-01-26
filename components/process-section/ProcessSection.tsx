"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./ProcessSection.module.scss";
import processData from "../../data/process.json";
import type { ProcessData } from "./types";
import { ProcessStep } from "./ProcessStep";

export const ProcessSection = () => {
  const { headline, steps, philosophyStatement } = processData as ProcessData;
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineFillRef = useRef<HTMLDivElement | null>(null);
  const lineTrackRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);
  const markersRef = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const updateLine = () => {
        const section = sectionRef.current;
        const timeline = timelineRef.current;
        const lineTrack = lineTrackRef.current;
        const lineFill = lineFillRef.current;
        const markers = markersRef.current.filter(
          (marker): marker is HTMLDivElement => Boolean(marker)
        );

        if (!section || !timeline || !lineTrack || !lineFill || !markers.length) {
          return null;
        }

        const sectionRect = section.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        const firstMarker = markers[0];
        const lastMarker = markers[markers.length - 1];
        const firstRect = firstMarker.getBoundingClientRect();
        const lastRect = lastMarker.getBoundingClientRect();
        const markerOffset = firstRect.height / 2;
        const startOffset = firstRect.top - sectionRect.top + markerOffset;
        const endOffset = lastRect.top - sectionRect.top + markerOffset;
        const trackHeight = Math.max(0, endOffset - startOffset);
        const timelineOffset = timelineRect.top - sectionRect.top;

        gsap.set(lineTrack, {
          top: startOffset - timelineOffset,
          height: trackHeight,
        });
        gsap.set(lineFill, {
          top: startOffset - timelineOffset,
          height: 0,
        });

        return { startOffset, endOffset, trackHeight };
      };

      let lineTrigger: ScrollTrigger | null = null;
      const buildLineTrigger = () => {
        const result = updateLine();

        if (!result || !sectionRef.current || !lineFillRef.current) {
          return;
        }

        const { startOffset, endOffset, trackHeight } = result;

        if (lineTrigger) {
          lineTrigger.kill();
        }

        lineTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: () => `top+=${startOffset} center`,
          end: () => `top+=${endOffset} center`,
          scrub: true,
          onUpdate: (self) => {
            gsap.to(lineFillRef.current, {
              height: trackHeight * self.progress,
              ease: "none",
              duration: 0.1,
              overwrite: true,
            });
          },
        });
      };

      buildLineTrigger();
      ScrollTrigger.addEventListener("refreshInit", buildLineTrigger);

      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", buildLineTrigger);
        if (lineTrigger) {
          lineTrigger.kill();
        }
      };
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.section} id="process" ref={sectionRef}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{headline}</h2>
      </div>

      <div className={styles.timeline} ref={timelineRef}>
        <div className={styles.lineTrack} ref={lineTrackRef} />
        <div className={styles.lineFill} ref={lineFillRef} />

        <div className={styles.steps}>
          {steps.map((step, index) => {
            const isActive = activeStep >= index;

            return (
              <ProcessStep
                key={step.id}
                step={step}
                isActive={isActive}
                setStepRef={(el) => {
                  stepsRef.current[index] = el;
                }}
                setMarkerRef={(el) => {
                  markersRef.current[index] = el;
                }}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.philosophy}>
        <p className={styles.philosophyStatement}>{philosophyStatement}</p>
      </div>
    </section>
  );
};
