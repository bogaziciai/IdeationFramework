import ideaSpace from "../data/ideaSpace";
import { rateToEmoji } from "../data/types";

export default function IdeaSpace() {
  return (
    <section>
      <h2>Problem/Idea Space</h2>
      <p>
        A <strong>problem/idea space</strong> is the thematic boundary—the
        specific domain of related customer pains or opportunities—you commit to
        explore and solve before any user interviews or surveys begin.
      </p>
      <h3>Five Pre-Research Selection Criteria</h3>
      <ol>
        <li>
          <strong>Strategic Alignment:</strong>
          Choose a space that leverages your team’s core expertise, technology
          strengths, and long-term vision.
        </li>
        <li>
          <strong>Genuine Pain Signal:</strong>
          Verify recurring, acute frustrations among your Ideal Customer Profile
          via forums, support tickets, industry reports, or social media.
        </li>
        <li>
          <strong>Market Viability:</strong>
          Ensure the audience is large enough, growing, and demonstrates a
          willingness to pay (TAM/GTM sketch).
        </li>
        <li>
          <strong>Impact &amp; Scale Potential:</strong>
          Favor root-cause problems whose solutions can transform the
          market—seeking leverage, network effects, or platform potential for
          decacorn aspirations.
        </li>
        <li>
          <strong>Emergent Low-Satisfaction:</strong>
          Prioritize freshly surfaced or fast-evolving pains where existing
          solutions leave users dissatisfied—these gaps often yield breakthrough
          opportunities.
        </li>
      </ol>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem",
        }}
      >
        <thead>
          <tr>
            <th>Suggested Idea Space</th>
            <th style={{ textAlign: "center" }}>Strategic Alignment</th>
            <th style={{ textAlign: "center" }}>Genuine Pain Signal</th>
            <th style={{ textAlign: "center" }}>Market Viability</th>
            <th style={{ textAlign: "center" }}>
              Impact &amp; Scale Potential
            </th>
            <th style={{ textAlign: "center" }}>Emergent Low-Satisfaction</th>
          </tr>
        </thead>
        <tbody>
          {ideaSpace.map((item, i) => (
            <tr key={i}>
              <td>{item.title}</td>
              <td style={{ textAlign: "center" }}>
                {rateToEmoji(item.strategicAlignment)}
              </td>
              <td style={{ textAlign: "center" }}>
                {rateToEmoji(item.genuinePain)}
              </td>
              <td style={{ textAlign: "center" }}>
                {rateToEmoji(item.marketViability)}
              </td>
              <td style={{ textAlign: "center" }}>
                {rateToEmoji(item.impactScale)}
              </td>
              <td style={{ textAlign: "center" }}>
                {rateToEmoji(item.emergent)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
