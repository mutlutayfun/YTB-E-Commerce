import Login from "../components/accounts/Login";
import Register from "../components/accounts/Register";

const AccauntPage = () => {
  return (
    <>
      <section className="account-page">
        <div className="container">
          <div className="account-wrapper">
            <Login />
            <Register />
          </div>
        </div>
      </section>
    </>
  );
};

export default AccauntPage;
