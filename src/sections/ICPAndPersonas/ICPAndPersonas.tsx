import ICPArtifacts from "./ICPArtifacts";

export default function ICPAndPersonas() {
  return (
    <section>
      <h2>Ideal Customer Profile &amp; Persona Mapping</h2>

      <h3>1. How to Identify Your Ideal Customer Profile (ICP)</h3>
      <p>
        Your <strong>ICP</strong> is the specific type of company or user who
        gains the most value from your solution and is most likely to pay.
        Defining it sharply focuses your go-to-market, product roadmap, and
        research.
      </p>
      <ol>
        <li>
          <strong>Gather data:</strong> Analyze your best existing customers—
          revenue, retention, engagement—and look for common firmographics
          (industry, size, region) or behaviors.
        </li>
        <li>
          <strong>Segment &amp; score:</strong> Group by attributes (e.g.
          enterprise vs. SMB, verticals) and assign fit &amp; intent scores.
        </li>
        <li>
          <strong>Validate pain:</strong> Cross-check against usage or support
          tickets to ensure high-fit segments experience acute, recurring pain.
        </li>
        <li>
          <strong>Sketch the ICP:</strong> Document target industry, company
          profile, decision-maker roles, and key metrics they care about.
        </li>
        <li>
          <strong>Iterate:</strong> Continuously refine with new data and
          research as you onboard more customers.
        </li>
      </ol>

      <h3>2. Persona Mapping 101</h3>
      <p>
        Personas humanize your ICP—bringing to life the motivations, goals, and
        frustrations of the individuals who make or influence purchase
        decisions.
      </p>
      <ol>
        <li>
          <strong>Collect qualitative &amp; quantitative inputs:</strong>{" "}
          Interviews, surveys, analytics, support logs.
        </li>
        <li>
          <strong>Define segments:</strong> Identify 2–3 archetypes (e.g.
          “Technical Lead,” “Finance Manager,” “End-User”).
        </li>
        <li>
          <strong>Build persona cards:</strong> For each archetype, include:
          <ul>
            <li>Name &amp; role</li>
            <li>Demographics &amp; firmographics</li>
            <li>Goals &amp; success metrics</li>
            <li>Pains &amp; blockers</li>
            <li>Preferred channels &amp; content</li>
          </ul>
        </li>
        <li>
          <strong>Map journeys:</strong> Sketch their key workflows, decision
          triggers, and hand-offs.
        </li>
        <li>
          <strong>Use &amp; update:</strong> Reference personas in all product,
          marketing, and sales activities—and refine them as you learn more.
        </li>
      </ol>
      <ICPArtifacts />
    </section>
  );
}
