import React from "react";
import HeroSection from "../components/Hero";
import ActionAreaCard from "../components/Card";
import Grid from "../components/Grid";
import GridCards from "../components/Grid";
import Aboutus from "../components/Aboutus";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <GridCards />
      <Aboutus />
      <Form />
      <Footer />
    </div>
  );
}
