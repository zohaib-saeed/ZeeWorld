import React from "react";
import Container from "../Shared/Container/Container";

const Map = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155984.57352126975!2d5.46216585!3d52.347588349999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63a4fa67cac6b%3A0xef03e8338facf090!2sZeewolde%2C%20Netherlands!5e0!3m2!1sen!2s!4v1679702641647!5m2!1sen!2s"
        allowfullscreen=""
        loading="lazy"
        className="w-full h-[550px] mdl:h-[600px] rounded-b-3xl"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Map;
