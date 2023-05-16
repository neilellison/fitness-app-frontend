import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="https://www.pngitem.com/pimgs/m/342-3424195_muscle-icons-png-muscle-clipart-black-and-white.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          ></img>
          Muscler
        </Link>
        <ul className="navbar-nav mr-auto flex-row"></ul>
        {localStorage.jwt === undefined ? (
          <>
            <Link to="/signup"> Signup </Link> |<Link to="/login"> Login </Link>
          </>
        ) : (
          <>
            <Link to="routines/new"> Create Routine </Link> |<Link to="/logout"> Logout </Link>
          </>
        )}
        ;
      </nav>
    </>
  );
}
