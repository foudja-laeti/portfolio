import {
  LuServer, LuMonitor, LuSmartphone, LuWrench, LuDatabase, LuBriefcase, LuGraduationCap,
  LuMicroscope, LuLanguages, LuHand, LuLayers, LuRocket, LuMail, LuLightbulb, LuMapPin,
  LuSparkles, LuMenu, LuSun, LuMoon, LuSend, LuCloud,
} from 'react-icons/lu'
import {
  SiPython, SiDjango, SiLaravel, SiJavascript, SiReact, SiAngular, SiHtml5, SiFlutter,
  SiPostman, SiInsomnia, SiGit, SiGithub, SiFigma, SiSonarqubeserver, SiGrafana,
  SiPrometheus, SiDocker, SiVercel, SiPostgresql, SiMysql, SiFastapi, SiTypescript, SiMongodb, SiPhp, SiNodedotjs,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const icones = {
  // interface
  backend: LuServer,
  frontend: LuMonitor,
  mobile: LuSmartphone,
  outils: LuWrench,
  bdd: LuDatabase,
  experience: LuBriefcase,
  diplome: LuGraduationCap,
  sciences: LuMicroscope,
  langues: LuLanguages,
  apropos: LuHand,
  competences: LuLayers,
  projets: LuRocket,
  contact: LuMail,
  astuce: LuLightbulb,
  lieu: LuMapPin,
  tout: LuSparkles,
  etincelle: LuSparkles,
  menu: LuMenu,
  soleil: LuSun,
  lune: LuMoon,
  envoyer: LuSend,
  stage: LuBriefcase,
  collab: LuLightbulb,
  // technologies
  python: SiPython,
  django: SiDjango,
  laravel: SiLaravel,
  javascript: SiJavascript,
  react: SiReact,
  angular: SiAngular,
  html5: SiHtml5,
  flutter: SiFlutter,
  postman: SiPostman,
  insomnia: SiInsomnia,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  vscode: VscVscode,
  sonarqube: SiSonarqubeserver,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
  docker: SiDocker,
  o2switch: LuCloud,
  vercel: SiVercel,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  monolithique: LuLayers,
  microservices: LuLayers,
  architecture: LuLayers,
  typescript : SiTypescript,
  fastapi : SiFastapi,
  node : SiNodedotjs,
  php : SiPhp,
 
}

function Icone({ nom, className }) {
  const Composant = icones[nom]
  if (!Composant) return null
  return <Composant className={className} aria-hidden="true" />
}

export default Icone