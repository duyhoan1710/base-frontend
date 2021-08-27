import React, { useContext } from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";

import logo from "assets/images/logo.svg";
import logout from "context/actions/auth/logout";
import { GlobalContext } from "context/Provider";
import isAuthenticated from "utils/isAuthenticated";

const Header = () => {
  const history = useHistory();

  const { authDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };

  return (
    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
        Base Frontend
      </Menu.Item>

      {isAuthenticated() && (
        <Menu.Item position="right">
          <Button onClick={handleUserLogout} color="red" basic icon>
            <Icon name="log out"></Icon>
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
