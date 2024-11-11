import React from "react";

function Login() {
  return (
    <div className="p-20">
      <UserComponent ages={16} user={"Eric Nkurunziza"}>
        <h1>Developed by Incharge Leirbag</h1>
      </UserComponent>
    </div>
  );
}

export default Login;

// user component
function UserComponent({ ages, user, children }) {
  return (
    <>
      <h1>
        {user} is logged in <br />
        and is {ages} years old
        <br />
        <br />
        <button className="px-7 py-3 rounded bg-sky-600 text-white">
          {children}
        </button>
      </h1>
    </>
  );
}
