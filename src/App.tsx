import Container from "./components/Layout/Container";
import Logo from "./components/Logo.svg";
import ICPAndPersonas from "./sections/ICPAndPersonas/ICPAndPersonas";
import IdeaSpace from "./sections/IdeaSpace";
import MarketGapAnalysis from "./sections/MarketGapAnalysis/MarketGapAnalysis";
import TheMomTest from "./sections/TheMomTest/TheMomTest";

function App() {
  return (
    <>
      <Container>
        <img src={Logo} style={{ maxWidth: 300 }} />
        <h1>Ideation Framework</h1>
        <p>
          This ideation framework brings together proven tools and
          techniques—from customer interview best practices and persona mapping
          to competitive analysis and prioritization matrices—to guide teams
          through every stage of early-stage discovery. By weaving in The Mom
          Test’s user‐conversation principles, ICP definition, Porter’s Five
          Forces, SWOT, Value Proposition Canvas, market‐sizing and research
          methods, gap analysis, “How Might We” questioning, and impact–effort
          prioritization, the document equips you to reliably surface real
          customer needs, map your position in the market, generate and evaluate
          high-impact ideas, and confidently choose which opportunities to
          pursue next. It’s your one-stop playbook for turning raw insights into
          a focused roadmap for innovation.
        </p>
        <IdeaSpace />
        <ICPAndPersonas />
        <TheMomTest />
        <MarketGapAnalysis />
      </Container>
    </>
  );
}

export default App;
