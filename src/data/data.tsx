import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilePicture.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Samartha Mudigere Girish.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a US based <strong className="text-stone-100">Software Engineer/Analyst</strong>, currently working
        at <strong className="text-stone-100">University of New Orleans</strong> helping build business automation, implement Workday SIS & bridge the technical gap between users and use of technologies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you’ll often find me playing <strong className="text-stone-100">Cricket</strong>, working on personal projects, enhancing my technical and personal skills or exploring the beautiful state of <strong className="text-stone-100">Louisiana</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a skilled full-stack developer with experience in Python, NodeJs, LAMP Stack, and Android app development. Currently, I'm exploring Terraform and building a personal data storage platform with automated backups. I have a strong interest in building and problem-solving, demonstrated by my career so far. Additionally, I'm passionate about optimizing hardware, from configuring a crypto mining rig to running open-source AI LLM's locally to playing with my Raspberry Pi for mini projects. Always eager to learn.`,
  aboutItems: [
    {label: 'Location', text: 'New Orleans, LA', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'India', Icon: FlagIcon},
    {label: 'Interests', text: 'Cricket, running, gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'University of New Orleans', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'University of New Orleans', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Kannada',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Next',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Android Native',
        level: 8,
      },
      {
        name: 'Redux',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2023 - Present',
    location: 'University of New Orelans',
    title: 'Computer Science',
    content: 
    <p>
      •Ability to analyze complex computational or software developmental problems.<br/>
      •Synthesize solutions with implementations by applying acquired knowledge in Artifical Intelligence & Software Engineering.<br/>
      •Opportunity to author/co-author papers and submit for review.
    </p>,
  },
  {
    date: 'September 2015 - April 2019',
    location: 'Oakland University',
    title: 'Bachelors in Science',
    content: 
    <p>
      •Collaborative projects and laboratories in core computer science and engineering courses.<br/>
      •Applied Senior Design capstone projects.<br/>
      •Internships with industry partners and organizations, providing real-world experience.<br/>
      •Participation in hackathons, coding competitions and software development challenges, including hosting nationwide events through the GrizzHacks student organization.<br/>
      •Hands-on semester projects.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - Present',
    location: 'University of New Orelans',
    title: 'Application Analyst',
    content: (
      <p>
        Extensive experience in application development, data analysis, and process automation within 
        PeopleSoft and Workday environments. Adept at leveraging Java, Python, PowerShell, SQL, 
        and Power BI to optimize system performance, troubleshoot errors, migrate data, and deliver 
        insightful reports for data-driven decision-making. Collaborated on implementing and 
        maintaining Workday Student to ensure seamless integration and timely delivery. Skilled in 
        implementing automation solutions using Power Automate and streamlining workflows across 
        diverse systems and platforms. Proven ability to drive successful project delivery while 
        ensuring data integrity and compliance with industry standards.
      </p>
    ),
  },
  {
    date: 'January 2019 - March 2022',
    location: 'DXC Technology',
    title: 'Software Engineer',
    content: (
      <p>
        Experienced in application migrations, technical lead for web application development, 
        adhering to Agile methodologies (Scrum, Kanban), and fostering collaboration with cross￾functional teams. Proficient in implementing robust CI/CD pipelines (Jenkins, Trivy, SonarQube, 
        Docker), facilitating testing, validation, and smooth deployments. Adept at gathering 
        requirements, sprint planning, and retrospectives. Deployed NodeJS web applications and 
        leveraged DevOps practices (IaC tools like Azure ARM templates, Terraform, Kubernetes). 
        Maintained comprehensive documentation for knowledge transfer. Excellent communication 
        skills, ensuring transparent progress updates across internal and external teams.
      </p>
    ),
  },
  {
    date: 'July 2018 - December 2018',
    location: 'Continental Automotive Systems',
    title: 'Software Engineering Intern',
    content: (
      <p>
        Proficient in automating software updates and security compliance using C#. Skilled in Agile 
        methodologies with a focus on timely delivery. Adept at analyzing, troubleshooting, and 
        resolving problems efficiently. Expertise in creating automated test scripts using PowerShell 
        and defining test environments. Ability to produce clear, concise, and thorough specifications 
        and documentation.
      </p>
    ),
  },
  {
    date: 'March 2017 - July 2018',
    location: 'Coupon Wallet LLC',
    title: 'Mobile App Developer',
    content: (
      <p>
        Experienced in building mobile applications from scratch and publishing to the Play Store for 
        internal and external clients. Proficient in diverse roles including documentation, requirements 
        analysis, development, and testing. Developed multi-threaded mobile apps integrated with 
        backend REST services, caching, and SQLite for optimized UI performance. Adept in Git 
        version control, branch management, and coordinating with team members. Successfully 
        integrated APIs from Google, AWS, Fabric, Facebook Graph, and external libraries to meet 
        client requirements.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me at:',
  items: [
    {
      type: ContactType.Email,
      text: 'samartha309@gmail.com',
      href: 'mailto:samartha309@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'New Orleans LA, USA',
      href: 'https://maps.app.goo.gl/p8mA4EbZ3d86PoW16',
    },
    {
      type: ContactType.Instagram,
      text: '@sammi_bammy',
      href: 'https://www.instagram.com/sammi_bammy/',
    },
    {
      type: ContactType.Github,
      text: 'smudigere',
      href: 'https://github.com/smudigere',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/smudigere'},
//  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/samartha-mudigere-girish-41234b135/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sammi_bammy/'},
//  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
