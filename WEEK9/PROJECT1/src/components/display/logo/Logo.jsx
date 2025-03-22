import PropTypes from "prop-types";

// Assets
import LOGO_IMG from "@/assets/images/logo.png";

const Logo = ({ size = 180 }) => {
  return (
    <a href="/">
      <img width={size} src={LOGO_IMG} />
    </a>
  );
};

Logo.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Logo;
