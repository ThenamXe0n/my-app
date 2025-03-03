import React from "react";
function UserForm() {
  return (
    <>
      <h1>user form</h1>
      <form>
        <label>Username:</label>
        <input type="text" placeholder="enter user name" />
        <button>send</button>
      </form>
    </>
  );
}
export default UserForm;
