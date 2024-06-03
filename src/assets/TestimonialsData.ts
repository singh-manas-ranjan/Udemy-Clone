export default [
  {
    review:
      "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
    platform: "stackOverflow.svg",
    responses: "37,076 responses collected",
    link: "View Web Development courses >",
  },
  {
    review:
      "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
    profilePic: "user1.jpeg",
    userName: "Alvin Lim",
    role: "Technical Co-Founder, CTO at Dimensional",
    link: "View this iOS & Swift course >",
  },
  {
    review:
      "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
    profilePic: "user2.jpeg",
    userName: "William A. Wachlin",
    role: "Partner Account Manager at Amazon Web Services",
    link: "View this AWS course >",
  },
  {
    review:
      "With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.",
    profilePic: "user3.png",
    userName: "Ian Stevens",
    role: "Head of Capability Development, North America",
    link: "Read full story >",
  },
];

export interface Testimonial {
  review: string;
  platform?: string;
  responses?: string;
  profilePic?: string;
  userName?: string;
  role?: string;
  link: string;
}
