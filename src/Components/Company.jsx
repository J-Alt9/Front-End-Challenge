import React, { useEffect } from "react";

//Components
import Desc from "./Reusable/Desc";

const Company = () => {
  useEffect(() => {
    document.title = "Company Structure";
  }, []);

  return (
    <div>
      <Desc
        img="C"
        txt="Duis vitae maximus nunc. In ut erat neque. Fusce posuere finibus erat a auctor. Nunc consequat, metus vel hendrerit laoreet, elit sapien convallis urna, eget accumsan turpis massa et mi. Duis at metus porta, feugiat massa non, molestie quam. Nulla varius sagittis sem sed imperdiet. Mauris cursus dui id dolor porta, pharetra maximus nisi laoreet. Nam nec felis et est pretium dignissim. Praesent tincidunt pulvinar felis, nec viverra nisl sodales non. Nulla nec sollicitudin sem, sed vulputate risus. "
        direction="column"
      />
      <Desc
        img="B"
        txt="Duis at metus porta, feugiat massa non, molestie quam. Nulla varius sagittis sem sed imperdiet. Mauris cursus dui id dolor porta, pharetra maximus nisi laoreet. Nam nec felis et est pretium dignissim. Praesent tincidunt pulvinar felis, nec viverra nisl sodales non. Nulla nec sollicitudin sem, sed vulputate risus. "
        direction="column"
      />
      <Desc
        img="A"
        txt="In ut erat neque. Fusce posuere finibus erat a auctor. Nunc consequat, metus vel hendrerit laoreet, elit sapien convallis urna, eget accumsan turpis massa et mi. Mauris cursus dui id dolor porta, pharetra maximus nisi laoreet. Nam nec felis et est pretium dignissim. Praesent tincidunt pulvinar felis, nec viverra nisl sodales non."
        direction="column"
      />
    </div>
  );
};

export default Company;
