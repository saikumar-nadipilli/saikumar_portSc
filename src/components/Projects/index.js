import { Component } from "react";
import { ThreeDots as Loader } from "react-loader-spinner";
import ProjectCard from "../ProjectCard";
import { v4 as uuidv4 } from "uuid";

import "./index.css";

const categoriesList = [
  { id: "ALL", displayText: "All" },
  { id: "MINI", displayText: "Mini Projects" },
  { id: "REACT", displayText: "React" },
  { id: "DYNAMIC", displayText: "Dynamic" },
  { id: "RESPONSIVE", displayText: "Responsive" },
  { id: "STATIC", displayText: "Static" },
];

const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const myProjectsList = [
  {
    id: uuidv4(),
    category: "MINI",
    name: "Jobby App",
    link: "https://saikumar5jobby.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699785687/Portfolio/Screenshot_from_2023-11-12_16-10-09_wrqcry.png",
  },
  {
    id: uuidv4(),
    category: "MINI",
    name: "Nxt Watch",
    link: "https://saikumar5watch.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699785893/Portfolio/Screenshot_from_2023-11-12_16-13-54_zwhjfx.png",
  },
  {
    id: uuidv4(),
    category: "DYNAMIC",
    name: "Todos App",
    link: "https://saikumartodos1.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699507867/Portfolio/Screenshot_from_2023-11-09_11-00-12_tzre5h.png",
  },
  {
    id: uuidv4(),
    category: "MINI",
    name: "IPL Dashboard",
    link: "https://saikumar5ipl.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699786415/Portfolio/Screenshot_from_2023-11-12_16-22-35_f0kod0.png",
  },
  {
    id: uuidv4(),
    category: "MINI",
    name: "Nxt Trendz",
    link: "https://saikumar5trendz.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699786195/Portfolio/Screenshot_from_2023-11-12_16-18-40_qhxnwx.png",
  },
  {
    id: uuidv4(),
    category: "RESPONSIVE",
    name: "E-Commerce Website",
    link: "https://saiecomwebsite.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699465107/Portfolio/Screenshot_from_2023-11-08_23-07-30_y6cvge.png",
  },
  {
    id: uuidv4(),
    category: "REACT",
    name: "Gradient Generator",
    link: "https://sai5gradient.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699786772/Portfolio/Screenshot_from_2023-11-12_16-28-29_eqyfv7.png",
  },
  {
    id: uuidv4(),
    category: "REACT",
    name: "Match Game",
    link: "https://saikumar5match.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699787023/Portfolio/Screenshot_from_2023-11-12_16-31-58_ronojk.png",
  },
  {
    id: uuidv4(),
    category: "REACT",
    name: "Money manager",
    link: "https://saikumar5money.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699787155/Portfolio/Screenshot_from_2023-11-12_16-35-12_qdzusg.png",
  },
  {
    id: uuidv4(),
    category: "REACT",
    name: "Digital Timer",
    link: "https://saikumardigital.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699787262/Portfolio/Screenshot_from_2023-11-12_16-37-01_qxwmvu.png",
  },
  {
    id: uuidv4(),
    category: "REACT",
    name: "App Store",
    link: "https://sai5appstore.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699787402/Portfolio/Screenshot_from_2023-11-12_16-39-01_xnt38a.png",
  },
  {
    id: uuidv4(),
    category: "REACT",
    name: "Appointment App",
    link: "https://sai5appointment.ccbp.tech",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699788413/Portfolio/Screenshot_from_2023-11-12_16-55-19_qc4lfv.png",
  },
  //   {
  //     id: uuidv4(),
  //     category: 'REACT',
  //     name: 'Prime Video',
  //     link: 'https://saikumar5prime.ccbp.tech/',
  //     imageUrl:
  //       'https://res.cloudinary.com/db2rwgh5v/image/upload/v1699788574/Portfolio/Screenshot_from_2023-11-12_16-58-28_h4khm0.png',
  //   },
  //   {
  //     id: uuidv4(),
  //     category: 'REACT',
  //     name: 'Password Manager',
  //     link: 'https://sai5password.ccbp.tech/',
  //     imageUrl:
  //       'https://res.cloudinary.com/db2rwgh5v/image/upload/v1699788706/Portfolio/Screenshot_from_2023-11-12_17-00-47_k8rcil.png',
  //   },

  {
    id: uuidv4(),
    category: "DYNAMIC",
    name: "Wikipedia Search",
    link: "https://sai5wikisearch.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699508119/Portfolio/Screenshot_from_2023-11-09_11-03-26_im2qgr.png",
  },
  {
    id: uuidv4(),
    category: "DYNAMIC",
    name: "Tip Calculator",
    link: "https://saitipcalculat.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699508588/Portfolio/Screenshot_from_2023-11-09_11-11-18_rgfldz.png",
  },
  {
    id: uuidv4(),
    category: "DYNAMIC",
    name: "Select your Pet",
    link: "https://saiselecturpet.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699508373/Portfolio/Screenshot_from_2023-11-09_11-08-35_xlbupj.png",
  },
  {
    id: uuidv4(),
    category: "DYNAMIC",
    name: "Peace Timer",
    link: "https://saipeacetimer.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699508727/Portfolio/Screenshot_from_2023-11-09_11-13-44_mhgf22.png",
  },
  {
    id: uuidv4(),
    category: "DYNAMIC",
    name: "Random Jokes Page",
    link: "https://saikumarjokes.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699464401/Portfolio/Screenshot_from_2023-11-08_22-54-45_xxfj3u.png",
  },

  {
    id: uuidv4(),
    category: "RESPONSIVE",
    name: "VR Website",
    link: "https://saikumarvrweb.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699464806/Portfolio/Screenshot_from_2023-11-08_23-01-50_fqxi73.png",
  },
  {
    id: uuidv4(),
    category: "RESPONSIVE",
    name: "User Portfolio Website",
    link: "https://saiuserportfoli.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699465022/Portfolio/Screenshot_from_2023-11-08_23-05-54_fi2sm1.png",
  },
  {
    id: uuidv4(),
    category: "RESPONSIVE",
    name: "Food Munch Website",
    link: "https://sai5foodmunch.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699465204/Portfolio/Screenshot_from_2023-11-08_23-09-12_e4bk6z.png",
  },
  {
    id: uuidv4(),
    category: "STATIC",
    name: "Book Store Page",
    link: "https://saibookstorepg.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699506593/Portfolio/Screenshot_from_2023-11-09_10-38-39_cbejmn.png",
  },
  {
    id: uuidv4(),
    category: "STATIC",
    name: "Podcasts Page",
    link: "https://saikumapodcast.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699506931/Portfolio/Screenshot_from_2023-11-09_10-44-40_tqz0hv.png",
  },
  {
    id: uuidv4(),
    category: "STATIC",
    name: "Sleep Music Page",
    link: "https://sai5musicpage.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699507098/Portfolio/Screenshot_from_2023-11-09_10-47-15_fc50sv.png",
  },
  {
    id: uuidv4(),
    category: "STATIC",
    name: "Conference Page",
    link: "https://sai5conference.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699507277/Portfolio/Screenshot_from_2023-11-09_10-50-12_fu4ors.png",
  },
  {
    id: uuidv4(),
    category: "STATIC",
    name: "Goa Page",
    link: "https://saikumargoapg.ccbp.tech/",
    imageUrl:
      "https://res.cloudinary.com/db2rwgh5v/image/upload/v1699507444/Portfolio/Screenshot_from_2023-11-09_10-52-53_auzjpl.png",
  },
];

class Projects extends Component {
  state = {
    projectsList: [],
    activeCategoryId: categoriesList[0].id,
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount() {
    this.getAllProjects();
  }

  onChangeCategory = (event) => {
    this.setState({ activeCategoryId: event.target.value }, () =>
      this.getAllProjects()
    );
  };

  getAllProjects = async () => {
    const { activeCategoryId } = this.state;
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    let updatedProjects;
    if (activeCategoryId === "ALL") {
      updatedProjects = myProjectsList;
    } else {
      updatedProjects = myProjectsList.filter(
        (project) => project.category === activeCategoryId
      );
    }
    this.setState({
      projectsList: updatedProjects,
      apiStatus: apiStatusConstants.success,
    });
  };

  onClickRetry = () => {
    this.getAllProjects();
  };

  renderFailureView = () => (
    <div className="failure-container">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-info">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="failure-button"
        type="button"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  );

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#00BFFF" height={75} width={75} />
    </div>
  );

  renderProjectsView = () => {
    const { projectsList } = this.state;

    return (
      <ul className="projects-container">
        {projectsList.map((each) => (
          <ProjectCard key={each.id} projectCardDetails={each} />
        ))}
      </ul>
    );
  };

  renderProjects = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      case apiStatusConstants.success:
        return this.renderProjectsView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      default:
        return null;
    }
  };

  render() {
    const { activeCategoryId } = this.state;
    return (
      <>
        <div className="bg-container">
          <select
            className="select-input"
            value={activeCategoryId}
            onChange={this.onChangeCategory}
          >
            {categoriesList.map((each) => (
              <option key={each.id} value={each.id}>
                {each.displayText}
              </option>
            ))}
          </select>
          {this.renderProjects()}
        </div>
      </>
    );
  }
}

export default Projects;
