import ProjectCard from './ProjectCard';
import styles from '../../@layout_app/styles/project_page.module.css';

const dummyData = [
  {
    id: Date.now(),
    title: 'Node Mongo',
    projectsCount: 3,
    imgSrc: '/@images_app/node-mongo.svg',
  },
  {
    id: Date.now(),
    title: 'Collabocate',
    projectsCount: 5,
    imgSrc: '/@images_app/project-4.svg',
  },
  {
    id: Date.now(),
    title: 'Building Blocks',
    projectsCount: 2,
    imgSrc: '/@images_app/project-2.svg',
  },
  {
    id: Date.now(),
    title: 'Use-me-for-experement',
    projectsCount: 4,
    imgSrc: '@images_app/project-3.svg',
  },


];


export default function ProjectList() {
  return (
    <div className={styles.cardGrid}>
      {
        dummyData.map(project => (
          <ProjectCard key={project.id} title={project.title} projectsCount={project.projectsCount} buttonText='Contribute to Project' imageSrc={project.imgSrc} altText={project.title} />
        ))
      }
    </div>
  );
}