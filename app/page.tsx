"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Spline from "@splinetool/react-spline";
import mini from "../public/mini.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="" style={{ width: "100%" }}>
          <div className="d-flex justify-content-center">
            <div>We strive for Quality Education</div>
            <div style={{ width: "720px", height: "100vh", alignItems:"end" }}>
              <Spline scene="https://prod.spline.design/ZdXdjmhBPewPIQ0b/scene.splinecode" />
            </div>
          </div>
        </div>
        {/* <div style={{width:"720px" ,height:"100vh"}}>
        <Spline scene="https://prod.spline.design/ZdXdjmhBPewPIQ0b/scene.splinecode" />
        </div> */}
        {/* <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div style={{}}>
              <Spline scene="https://prod.spline.design/DbroaNuVH24QfcpK/scene.splinecode" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
