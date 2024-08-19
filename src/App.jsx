import "./App.css";
import JobOffer from "./components/jobOffer";

function App() {
  return (
    <>
      <div className="header"></div>
      <div className="main-container">
        <JobOffer
          style="containerOffer"
          color="red"
          name="Chef de Projet"
          contract="Paris - Contrat : CDI"
        />
        <JobOffer
          style="containerOffer"
          color="blue"
          name="Développeur Front-End"
          contract="Paris - Contrat : CDI"
        />
        <JobOffer
          style="containerOffer"
          color="green"
          name="Développeur Back-End"
          contract="Paris - Contrat : CDI"
        />
        <JobOffer
          style="containerOffer"
          color="purple"
          name="Data Analyst"
          contract="Paris - Contrat : CDI"
        />
        <JobOffer
          style="containerOffer"
          color="orange"
          name="Product Manager"
          contract="Paris - Contrat : CDI"
        />
        <JobOffer
          style="containerOffer"
          color="pink"
          name="UX/UI Designer"
          contract="Paris - Contrat : CDI"
        />
        <JobOffer
          style="containerOffer"
          color="yellow"
          name="DevOps Engineer"
          contract="Paris - Contrat : CDI"
        />
        <JobOffer
          style="containerOffer"
          color="brown"
          name="Responsable Marketing"
          contract="Paris - Contrat : CDI"
        />
        <JobOffer
          style="containerOffer"
          color="cyan"
          name="Consultant en Stratégie"
          contract="Paris - Contrat : CDI"
        />
      </div>
      <div className="footer">
        made in<span>&nbsp;react&nbsp;</span>by
        <span>&nbsp;Thibaud TD&nbsp;</span>
      </div>{" "}
    </>
  );
}

export default App;
