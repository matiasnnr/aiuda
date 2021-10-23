import React from "react";

const hola = {
  name: "lalalla",
  rep: "lololo",
};

const Code = () => {
  return (
    <code className="code">
      {JSON.stringify(hola, null, 2)}
      <style jsx>{`
        .code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </code>
  );
};

export default Code;
