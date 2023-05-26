import { Helmet } from "react-helmet";

// eslint-disable-next-line react/prop-types
const Pagetitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Pagetitle;
