export default function AboutContent() {
  return (
    <>
      <div className="siteInfoContent">
        <h1>About DevScriptStax</h1>
        DevScriptStax is a personal, continually evolving reference for <span className="emphasis">full stack web development</span>. It began as a React refresh of a small HTML project and has grown into structured notes across frontend, backend, testing &amp; tooling, GraphQL &amp; Apollo, styling strategies, databases, and cloud &amp; deployment.
      </div>

      <hr />

      <div className="Note">
        <strong>Current focus:</strong> information architecture and runtime performance. The sites are moving toward deeper category granularity, consistent subpage structure, and lazy-loaded routing for faster, more predictable navigation.
      </div>

      <hr />

      <div className="siteInfoContent">
        <h2>What you'll find</h2>
        <ul>
          <li>
            Topic trees: Front End, Back End, Cloud &amp; Deploy, Testing, Tools,
            Languages, GraphQL &amp; Apollo, Stacks
          </li>
          <li>Granular subpages that keep related notes together</li>
          <li>Patterns, small examples, and references collected over time</li>
        </ul>
      </div>
    </>
  );
}
