/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, ReactNode } from "react";

interface SliderProps {
  children: ReactNode[];
  width?: string;
  duration?: number;
  toRight?: boolean;
  pauseOnHover?: boolean;
  blurBorders?: boolean;
  blurBoderColor?: string;
}

interface SlideProps {
  children: ReactNode;
  width?: string;
  [key: string]: unknown; // any 대신 사용
}

const Slider: React.FC<SliderProps> & { Slide: React.FC<SlideProps> } = ({
  children,
  width = "200px",
  duration = 40,
  toRight = false,
  pauseOnHover = false,
  blurBorders = false,
  blurBoderColor = "#fff",
}) => {
  const [idNanoid, setIdNanoid] = useState<string>("");

  const generarCadenaAleatoria = (): string => {
    let cadena = "";
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++) {
      cadena += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }

    return cadena;
  };

  useEffect(() => {
    setIdNanoid(generarCadenaAleatoria());
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.type = "text/css";
    const keyFrames = `
        @-webkit-keyframes slider_logo_slider {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(A_DYNAMIC_VALUE);
            }
        }
        @-moz-keyframes slider_logo_slider {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(A_DYNAMIC_VALUE);
            }
        }`;
    style.innerHTML = keyFrames.replace(
      /A_DYNAMIC_VALUE/g,
      `calc(${toRight ? "" : "-"}${width} * ${children?.length})`
    );
    document.getElementsByTagName("head")[0].appendChild(style);
  }, [toRight, width, children]);

  const handleMouseEnter = () => {
    const element = document.getElementById(`slider_${idNanoid}`);
    if (element) {
      element.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    const element = document.getElementById(`slider_${idNanoid}`);
    if (element) {
      element.style.animationPlayState = "running";
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "auto",
          margin: "auto",
          top: 0,
          overflow: "hidden",
        }}
        onMouseEnter={() => pauseOnHover && handleMouseEnter()}
        onMouseLeave={() => pauseOnHover && handleMouseLeave()}
        id={`slider_wrapper_${idNanoid}`}
      >
        <div
          style={{
            display: "flex",
            animation: `slider_logo_slider ${duration}s linear infinite`,
            width: `calc(${width} * ${children?.length * 3})`,
            top: 0,
          }}
          id={`slider_${idNanoid}`}
        >
          {children?.map((child, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(child as React.ReactElement<any>, { width })}
            </React.Fragment>
          ))}
          {children?.map((child, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(child as React.ReactElement<any>, { width })}
            </React.Fragment>
          ))}
          {children?.map((child, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(child as React.ReactElement<any>, { width })}
            </React.Fragment>
          ))}
        </div>
      </div>
      {blurBorders && (
        <>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "0px",
              width: "180px",
              transform: "rotate(180deg)",
              zIndex: 10,
              height: "105%",
              background: `linear-gradient(90deg, ${blurBoderColor} 10%, rgba(255, 255, 255, 0) 80%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "0px",
              width: "180px",
              zIndex: 10,
              height: "120%",
              background: `linear-gradient(90deg, ${blurBoderColor} 10%, rgba(255, 255, 255, 0) 80%)`,
            }}
          />
        </>
      )}
    </div>
  );
};

const Slide: React.FC<SlideProps> = ({
  children,
  width = "200px",
  ...props
}) => {
  return (
    <div
      style={{
        width: width,
        alignItems: "center",
        display: "flex",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Slider.Slide = Slide;

export default Slider;
