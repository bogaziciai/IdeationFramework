import {
  CompetitorLandscape,
  MarketGaps,
  PortersFiveForces,
  SWOTAnalysis,
  ValuePropositionCanvas,
} from "./CompetitorLandscape";

export default function MarketGapAnalysis() {
  return (
    <section>
      <h2>Market &amp; Gap Analysis Frameworks</h2>
      <p>
        To pinpoint white‐space opportunities, combine competitive, strategic,
        and customer‐centric lenses. Three essential tools are:
      </p>

      <h3>Porter’s Five Forces</h3>
      <p>
        A model for assessing industry competitiveness by examining:
        <ul>
          <li>
            <strong>Supplier Power</strong> – How much leverage do suppliers
            have?
          </li>
          <li>
            <strong>Buyer Power</strong> – Can customers demand better terms?
          </li>
          <li>
            <strong>Competitive Rivalry</strong> – How intense is rivalry among
            existing players?
          </li>
          <li>
            <strong>Threat of Substitutes</strong> – Are alternative solutions
            readily available?
          </li>
          <li>
            <strong>Threat of New Entrants</strong> – How easy is it for
            newcomers to join?
          </li>
        </ul>
      </p>
      <p>
        <strong>Contribution to Gap Analysis:</strong>
        Identifies areas where competitive pressures are weakest (lower rivalry,
        high barriers to entry) so you can target gaps with less direct
        competition.
      </p>

      <h3>SWOT Analysis</h3>
      <p>
        A 2×2 matrix that contrasts:
        <ul>
          <li>
            <strong>Strengths</strong> – Internal capabilities you can leverage
          </li>
          <li>
            <strong>Weaknesses</strong> – Internal limitations you must address
          </li>
          <li>
            <strong>Opportunities</strong> – External trends or forces you can
            exploit
          </li>
          <li>
            <strong>Threats</strong> – External risks or competitors you must
            mitigate
          </li>
        </ul>
      </p>
      <p>
        <strong>Contribution to Gap Analysis:</strong>
        Aligns your internal strengths against unaddressed market needs, and
        surfaces external opportunities where current solutions (including
        yours) fall short.
      </p>

      <h3>Value Proposition Canvas</h3>
      <p>
        A user‐centered tool that maps:
        <ul>
          <li>
            <strong>Customer Jobs</strong> – Tasks they’re trying to accomplish
          </li>
          <li>
            <strong>Pains</strong> – Frustrations and obstacles they face
          </li>
          <li>
            <strong>Gains</strong> – Desired outcomes and benefits
          </li>
          <li>
            <strong>Pain Relievers</strong> – How your solution eases pains
          </li>
          <li>
            <strong>Gain Creators</strong> – How your solution delivers desired
            gains
          </li>
        </ul>
      </p>
      <p>
        <strong>Contribution to Gap Analysis:</strong>
        Highlights specific customer pains that competitors ignore and ensures
        your MVP directly addresses the highest‐value gaps in user experience.
      </p>
      <br />
      <CompetitorLandscape />
      <br />
      <PortersFiveForces />
      <br />
      <SWOTAnalysis />
      <br />
      <ValuePropositionCanvas />
      <br />
      <MarketGaps />
    </section>
  );
}
