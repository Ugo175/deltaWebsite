"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export type GalleryPhoto = { src: string; width: number; height: number; alt: string };

export function PhotoGallery({ images = galleryImages, slideshow = false }: { images?: GalleryPhoto[]; slideshow?: boolean }) {
  // Callers omit the gallery entirely when there are no photographs.
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [timerReset, setTimerReset] = useState(0);
  const heldPointer = useRef<number | null>(null);
  const [holding, setHolding] = useState(false);
  useEffect(() => {
    if (!slideshow || holding || images.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden && heldPointer.current === null) setIndex(current => (current + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slideshow, holding, images.length, timerReset]);
  function releaseHold(pointerId: number) {
    if (heldPointer.current !== pointerId) return;
    heldPointer.current = null;
    setHolding(false);
    setTimerReset(current => current + 1);
  }
  const image = images[index];
  if (!image) return null;
  function move(direction: number) { setIndex(current => (current + direction + images.length) % images.length); setTimerReset(current => current + 1); }
  return <>
    {slideshow ? <section className="gallery-slideshow" aria-label="Chapter photographs" aria-roledescription="carousel" onKeyDown={event => {
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
    }}>
      <div className="slideshow-stage" role="group" aria-roledescription="slide" aria-label={`Photo ${index + 1} of ${images.length}`}>
        <button type="button" className="slideshow-arrow slideshow-arrow-left" aria-label="Previous photo" onClick={() => move(-1)} disabled={images.length < 2}><ChevronLeft size={30} aria-hidden="true" /></button>
        <div className="slideshow-photo"
          onPointerDown={event => {
            if (!event.isPrimary || event.button !== 0 || heldPointer.current !== null) return;
            event.currentTarget.setPointerCapture(event.pointerId);
            heldPointer.current = event.pointerId;
            setHolding(true);
          }}
          onPointerUp={event => releaseHold(event.pointerId)}
          onPointerCancel={event => releaseHold(event.pointerId)}
          onLostPointerCapture={event => releaseHold(event.pointerId)}
          onContextMenu={event => event.preventDefault()}>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 1200px) 80vw, 1000px" draggable={false} />
        </div>
        <button type="button" className="slideshow-arrow slideshow-arrow-right" aria-label="Next photo" onClick={() => move(1)} disabled={images.length < 2}><ChevronRight size={30} aria-hidden="true" /></button>
      </div>
    </section> : <div className="photo-grid">{images.map((photo, photoIndex) => <figure key={photo.src}><button className="photo-button" aria-label={`Enlarge photo ${photoIndex+1}: ${photo.alt}`} onClick={() => { setIndex(photoIndex); dialog.current?.showModal(); }}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 600px) 90vw, (max-width: 960px) 45vw, 30vw" /><span className="photo-expand" aria-hidden="true"><Expand size={16} /> Enlarge</span></button></figure>)}</div>}
    {!slideshow && <dialog ref={dialog} className="photo-dialog" aria-label="Chapter photo viewer" onKeyDown={event => { if(event.key === "ArrowRight") { event.preventDefault(); move(1); } if(event.key === "ArrowLeft") { event.preventDefault(); move(-1); } }}>
      <div className="viewer-toolbar"><p aria-live="polite">Photo {index+1} of {images.length}</p><button aria-label="Close photo viewer" onClick={() => dialog.current?.close()}><X size={24} /></button></div>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="90vw" loading="eager" className="viewer-image" />
      <div className="viewer-controls"><button aria-label="Previous photo" onClick={() => move(-1)}><ChevronLeft size={24} /></button><p className="sr-only" aria-live="polite">{image.alt}</p><button aria-label="Next photo" onClick={() => move(1)}><ChevronRight size={24} /></button></div>
    </dialog>}
  </>;
}
