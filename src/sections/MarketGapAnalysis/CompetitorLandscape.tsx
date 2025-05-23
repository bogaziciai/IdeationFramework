import React from "react";
import {
  competitors,
  marketGaps,
  porterForces,
  swotData,
  valuePropCanvas,
  type SWOTData,
} from "../../data/competitors";
import { rateToEmoji } from "../../data/types";

export function MarketGaps() {
  return (
    <>
      {" "}
      <h3>Market Gaps</h3>
      <p>
        These gaps represent unmet needs in the “{valuePropCanvas.title}” space:
      </p>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr>
            <th>Gap</th>
            <th style={{ textAlign: "center" }}>Impact</th>
            <th style={{ textAlign: "center" }}>Effort</th>
          </tr>
        </thead>
        <tbody>
          {marketGaps.map((g, i) => (
            <tr key={i}>
              <td>{g.description}</td>
              <td style={{ textAlign: "center" }}>{rateToEmoji(g.impact)}</td>
              <td style={{ textAlign: "center" }}>
                {rateToEmoji(g.effort, true)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function ValuePropositionCanvas() {
  const {
    title,
    customerProfile: { jobs, pains, gains },
    valueMap: { painRelievers, gainCreators },
  } = valuePropCanvas;

  return (
    <>
      <h3>Value Proposition Canvas</h3>
      <p>
        Align customer needs (“jobs, pains, gains”) with how your solution
        alleviates pains and creates gains.
      </p>
      <br />
      <h4>{title}</h4>
      <div className="card">
        <h4 className="card__title">Customer Profile</h4>
        <dl className="card__list">
          <dt>Jobs to Be Done</dt>
          <dd>{jobs.join("; ")}</dd>
          <dt>Pains</dt>
          <dd>{pains.join("; ")}</dd>
          <dt>Gains</dt>
          <dd>{gains.join("; ")}</dd>
        </dl>
      </div>
      <br />
      <div className="card">
        <h4 className="card__title">Value Map</h4>
        <dl className="card__list">
          <dt>Pain Relievers</dt>
          <dd>{painRelievers.join("; ")}</dd>
          <dt>Gain Creators</dt>
          <dd>{gainCreators.join("; ")}</dd>
        </dl>
      </div>
    </>
  );
}

export function SWOTAnalysis() {
  return (
    <>
      <h3>SWOT Analysis of Key Competitors</h3>
      <div className="swot-grid">
        {swotData.map((cat: SWOTData, idx: number) => (
          <div className="card" key={idx}>
            <h3 className="card__title">{cat.category}</h3>
            <ul>
              {cat.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export function PortersFiveForces() {
  return (
    <>
      <h3>Porter’s Five Forces</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px" }}>Force</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Description</th>
            <th style={{ textAlign: "center", padding: "8px" }}>Impact</th>
          </tr>
        </thead>
        <tbody>
          {porterForces.map((f, i) => (
            <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={{ padding: "8px" }}>{f.name}</td>
              <td style={{ padding: "8px" }}>{f.description}</td>
              <td style={{ textAlign: "center", padding: "8px" }}>
                {rateToEmoji(f.confidence)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export function CompetitorLandscape() {
  return (
    <>
      <h3>Competitor Landscape</h3>
      <p>Key platforms tackling this problem include:</p>
      <ul>
        {competitors.map((c, i) => (
          <li key={i}>
            <strong>{c.name}</strong>
            {c.notes ? ` – ${c.notes}` : null}
          </li>
        ))}
      </ul>
    </>
  );
}
