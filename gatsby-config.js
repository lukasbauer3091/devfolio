module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lukasbauer3091.github.io/`,
    // Name
    name: 'Lukas Bauer',
    // Main Site Title
    title: `Lukas Bauer | Computer Engineer`,
    // Description that goes under your name in main bio
    description: `Get to know me. Or at least the digital me!`,
    // Optional: Github account URL
    github: `https://github.com/lukasbauer3091`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/lukas-bauer-j/`,
    // Content of the About Me section
    about: `I believe the first step to ethical and successful technological development is understanding. I never shy away from (or rather, I enjoy) documentation, learning, and understanding as much as possible to make effective and creative design decisions. I am passionate about being a lifelong learner, and increasing the accessibility of the technology which captivates me. Creativity in problem solving, an open and accepting mind, and an entrepreneurial spirit are characteristics which make me stand out.

    I am currently focused on Computer Vision, Machine Learning, and a finding a future career in self-driving vehicle software.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      //{
      //name: 'VFX Tool Fluency',
      //description:
      //'(Nuke) Current project. Doing a dive into Nuke and following tutorials on muzzle flashes, rotoscoping methods, and other useful node workflows. The goal of this self-teaching is to determine practical applications of image generation and modifying with AI and ML.',
      //link: 'https://github.com/RyanFitzgerald/devfolio',
      //},
      {
        name: 'AI Image Generation and Manipulation (Stable Diffusion, FaceSwap, XMem) ',
        description:
          '(Python, Tensorflow, Pytorch) Built ML projects to learn new packages and employ cutting edge techniques such as textual inversion and an Atkinson-Shiffrin Memory Model. Used Tensorflow for classification and generation projects with the fashion MNIST dataset, trained custom tokens for use with Stable Diffusion using textual inversion, and have used PyTorch for automatic segmentation and rotoscoping with XMem.',
        link: '#',
      },
      {
        name: 'Capstone project - Using Custom Computer Vision to Collect Consent in Facial Recognition Systems',
        description:
          '(Python, OpenCV) The Privacy Commissioner of Canada has specified that automated facial recognition systems must be subject to the same privacy standards as other forms of biometric data collection. This project uses OpenCV (Python) to provide a solution to this through intelligent custom wearable privacy-badges. This project won 2nd place at the Professional Engineers of Ontario student paper competition in Kingston.',
        link: 'https://github.com/jeffm9500/Capstone',
      },
      {
        name: 'Neurol - Modular Framework Package for Developing Brain-computer Interfaces',
        description:
          '(Python, Neurotech) Neurol is a python package for implementing Brain-Computer Interfaces in a modular manner. I helped oversee the development of this project and created a Python script to interface a Muse EEG headset with a IoT smart-home system to modify lights based on calculated concentration level. This project won 3rd place at the NeurotechX Design Competition.',
        link: 'https://github.com/merlin-neurotech/neurol',
      },
      {
        name: 'Computer Vision and Self Driving Vehicles Undergraduate Lab Design',
        description:
          '(Python, OpenCV) Was the lead developer of an undergraduate computer vision lab which introduces students to self-driving vehicle technology. Built a modular Python package with OpenCV to give students streamlined commands to interface image detection with custom mini-rover hardware.',
        link: '#',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Freelance Software Developer',
        description: 'Full-Stack Developer to help small businesses digitize during COVID-19, May 2021 - Present',
        link: '#',
      },
      {
        name: 'De Lange Landen',
        description: 'IT Delivery Specialist, May 2019 - Sept 2019',
        link: '#',
      },
      {
        name: 'McMaster Automotive Research Centre - Center for Mechatronics and Hybrid Technologies',
        description: 'Self-driving Rover Module Project Lead, Computer Vision Developer, Jun 2017 - Aug 2018',
        link: '#',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Personality',
        description: 'Personable, entrepreneurial, self-driven, creative, fast-learner, good communicator, high attention to detail',
      },
      {
        name: 'Languages & Frameworks',
        description:
          'Python, OpenCV, Tensorflow, PyTorch, PHP, SQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Powershell, Windows Subsystem for Linux, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
