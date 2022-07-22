interface projectInfo {
  title: string;
  description: string;
  to: {
    git: string;
    deploy: string;
  };
}

const projects: Array<projectInfo> = [
  {
    title: "Odinbook",
    description:
      "Facebook 'Clon' made as a final project for TheOdinProject.com",
    to: {
      git: "https://github.com/leandrob0/odinbook-app",
      deploy: "https://odinbook-top.herokuapp.com/",
    },
  },
];

export default projects;
