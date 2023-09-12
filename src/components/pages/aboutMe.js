import React from "react";
import "../../styles/aboutMe.css";

const styles = {
  aboutMeStyles: {
    background: "orange",
  },
};

function aboutMe() {
  return (
    <section style={styles.aboutMeStyles} id="AboutMe" className="aboutMe">
      <h2>About Me</h2>
      <p>
        Hi there! I'm an outdoor enthusiast with a passion for adventure and
        exploration. Whether I'm outside rock climbing, carving down powdery
        slopes, or pounding out miles on a trail run, I love to challenge myself
        and push my limits. For the past decade, I've been fully immersed in the
        outdoor industry. In the winter months, I worked as a ski patroller at
        Park City Mountain Resort, keeping thousands of skiers safe and
        responding to any emergencies that arose. Come summer, I transitioned
        into guiding, leading groups of intrepid adventurers up the iconic and
        including the formidable Mt. Rainier. Despite my love for the outdoors,
        I recently decided to shift gears and explore a new path. I'm currently
        working as an EMT in the emergency department at the University of Utah,
        where I'm constantly learning and growing as a medical professional. But
        my thirst for knowledge doesn't stop there. In my spare time, I've taken
        up coding and am absolutely thrilled to be diving headfirst into this
        fascinating and ever-evolving field. It's a completely new challenge for
        me, but one that I'm eager to tackle with enthusiasm and determination.
        When I'm not coding or working in the emergency department, you can find
        me behind the lens of my camera, capturing the beauty of the natural
        world around me. I also love to cook and garden, constantly
        experimenting with new recipes and nurturing my green thumb. Overall,
        I'm a lifelong learner and adventurer, always seeking new experiences
        and challenges. I can't wait to see where this journey takes me next!
      </p>
    </section>
  );
}

export default aboutMe;
