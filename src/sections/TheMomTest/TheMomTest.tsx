import { momTestQuestions } from "../../data/momTest";

function MomTestQuestions() {
  const check = (flag: boolean) => (flag ? "✔️" : "❌");

  return (
    <section>
      <h3>The Mom Test: Questions &amp; Rule Compliance</h3>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
      >
        <thead>
          <tr>
            <th>Question</th>
            <th style={{ textAlign: "center" }}>Life Not Idea</th>
            <th style={{ textAlign: "center" }}>Facts Not Opinions</th>
            <th style={{ textAlign: "center" }}>Talk Less / Listen More</th>
            <th style={{ textAlign: "center" }}>Specific Example</th>
            <th style={{ textAlign: "center" }}>Commitment / Spending</th>
          </tr>
        </thead>
        <tbody>
          {momTestQuestions.map((q, i) => (
            <tr key={i}>
              <td>{q.text}</td>
              <td style={{ textAlign: "center" }}>{check(q.lifeNotIdea)}</td>
              <td style={{ textAlign: "center" }}>
                {check(q.factsNotOpinions)}
              </td>
              <td style={{ textAlign: "center" }}>
                {check(q.talkLessListenMore)}
              </td>
              <td style={{ textAlign: "center" }}>
                {check(q.specificExample)}
              </td>
              <td style={{ textAlign: "center" }}>{check(q.commitment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default function TheMomTest() {
  return (
    <section>
      <h2>The Mom Test</h2>
      <p>
        <em>The Mom Test</em> is a set of simple rules for talking to customers
        so you learn the truth—no matter how nice they are. It prevents you from
        asking biased, leading, or hypothetical questions that produce useless
        feedback.
      </p>
      <ol>
        <li>
          <strong>Talk about their life, not your idea.</strong>
          Ask how they currently solve the problem, what they do day-to-day.
        </li>
        <li>
          <strong>Ask for facts, not opinions.</strong>
          E.g. “How often do you…?” instead of “Would you…?”
        </li>
        <li>
          <strong>Talk less, listen more.</strong>
          Your goal is to uncover real behavior and pain—not to pitch.
        </li>
        <li>
          <strong>Get specific examples.</strong>
          “Can you walk me through the last time this happened?”
        </li>
        <li>
          <strong>Seek commitments or actual past spending.</strong>A signed
          check or active habit beats a vague promise.
        </li>
      </ol>
      <p>
        By following these rules, your discovery conversations yield clear,
        unbiased insights—so you can build a solution people actually want.
      </p>
      <MomTestQuestions />
    </section>
  );
}
