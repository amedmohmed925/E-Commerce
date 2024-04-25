import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const openModal = createContext({
  currentUser: null,
  addUser: () => {},
  removeUser : () => {},
  addToken:()=>{},
});

export function ModalProvider({ children }) {
  const [user, setUser] = useState();
  const [token, settoken] = useState();

  function addUser({id}) {
    setUser({id:id});
  }
  function addToken({token}) {
    settoken({token:token});
  }
  function removeUser() {
    setUser(null);
  }

  const currentUser = {
    curUser: user,
    curToken:token,
    addUser,
    removeUser,
    addToken
  };

  return (
    <openModal.Provider value={currentUser}>{children}</openModal.Provider>
  );
}

export default openModal;
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
};