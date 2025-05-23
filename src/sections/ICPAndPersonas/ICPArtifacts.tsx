import React from "react";
import {
  icpData,
  journeys,
  personas,
  segments,
} from "../../data/icpAndPersonas";

// 1. ICP One-Pager Component
function ICPOnePager() {
  const {
    industry,
    region,
    topMetrics,
    mainPain,
    focus,
    companySize,
    keyRoles,
    demographic,
    userContext,
  } = icpData;

  return (
    <div className="card">
      <h3 className="card__title">ICP One-Pager</h3>
      <h4 className="card__subtitle">Learning Accountability Vacuum</h4>
      <dl className="card__list">
        <dt>Industry</dt>
        <dd>{industry}</dd>

        {focus.includes("b2b") && (
          <>
            <dt>Company Size</dt>
            <dd>{companySize}</dd>
            <dt>Key Roles</dt>
            <dd>{keyRoles!.join(", ")}</dd>
          </>
        )}

        {focus.includes("b2c") && (
          <>
            <dt>Demographic</dt>
            <dd>{demographic!.join(", ")}</dd>
            <dt>User Context</dt>
            <dd>{userContext}</dd>
          </>
        )}

        <dt>Region</dt>
        <dd>{region}</dd>
        <dt>Top Metrics</dt>
        <dd>{topMetrics.join(", ")}</dd>
        <dt>Main Pain</dt>
        <dd>{mainPain}</dd>
      </dl>
    </div>
  );
}

function PersonaCards() {
  return (
    <>
      <h2>Persona Cards</h2>
      <div className="card-grid">
        {personas.map((p, i) => (
          <div className="card" key={i}>
            <h4 className="card__title">{p.name}</h4>
            <h5 className="card__subtitle">{p.role}</h5>
            <dl className="card__list">
              <dt>Goals</dt>
              <dd>{p.goals.join(", ")}</dd>
              <dt>Frustrations</dt>
              <dd>{p.frustrations.join(", ")}</dd>
              <dt>Channels</dt>
              <dd>{p.channels.join(", ")}</dd>
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

function SegmentationTable() {
  return (
    <>
      <h2>Segmentation & Scoring Table</h2>
      <table>
        <thead>
          <tr>
            <th>Segment</th>
            <th>Fit (1-5)</th>
            <th>Intent (1-5)</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((s, i) => (
            <tr key={i}>
              <td>{s.segment}</td>
              <td>{s.fit}</td>
              <td>{s.intent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function PersonaJourneyMaps() {
  return (
    <>
      <h2>Persona Journey Maps</h2>
      <div className="card-grid">
        {journeys.map((j, i) => (
          <div className="card" key={i}>
            <h4 className="card__title">{j.persona}</h4>
            <dl className="card__list">
              {j.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <dt>{step.stage}</dt>
                  <dd>
                    {step.action} <em>({step.feeling})</em>
                  </dd>
                </React.Fragment>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </>
  );
}

// Aggregate Export
export default function ICPArtifacts() {
  return (
    <div>
      <ICPOnePager />
      <br />
      <PersonaCards />
      <br />
      <SegmentationTable />
      <br />
      <PersonaJourneyMaps />
    </div>
  );
}
