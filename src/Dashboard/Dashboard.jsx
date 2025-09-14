import * as React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DemoProvider, useDemoRouter } from "@toolpad/core/internal";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Page routing component
import PageRouter from "./PageRouter";

const NAVIGATION = [
  { kind: "header", title: "Main Navigation" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "profile", title: "Profile", icon: <PersonIcon /> },
  { segment: "topup", title: "Top Up", icon: <AccountBalanceWalletIcon /> },
  { segment: "my-team", title: "My Team", icon: <PeopleIcon /> },
  {
    segment: "fund-management",
    title: "Fund Management",
    icon: <MonetizationOnIcon />,
  },
  { segment: "wallet", title: "Wallet", icon: <AccountBalanceIcon /> },
  { segment: "withdraw", title: "Withdraw", icon: <CreditCardIcon /> },
  { kind: "divider" },
  { segment: "more", title: "More", icon: <MoreHorizIcon /> },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  colorSchemes: { light: true, dark: false },
  palette: { mode: "light" },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <DemoProvider window={demoWindow}>
      <AppProvider
        branding={{title:"Metanodes", logo:"", homeUrl:"/"}}
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          <PageRouter pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
