import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>
            Ohh!
          </h3>
          <p>Page not found</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    );
  }
  return <Wrapper>
    <div>
      <h3>Something went wrong</h3>
    </div>
  </Wrapper>;
};
export default Error;
