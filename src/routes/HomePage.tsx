//@ts-ignore
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  useMantineTheme,
  Card,
  Group,
} from "@mantine/core";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: -1,
    fontSize: 40,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },
  subtitle: {
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `${theme.fontFamily}`,
    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

function HomePage() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("make sure you have Metamask installed");
      return;
    } else {
      console.log("wallet exist and we are ready to go");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authoried account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  const connectWalletHandler = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install Metamask");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const connectWalletButton = () => {
    return (
      <Button
        className={classes.control}
        onClick={connectWalletHandler}
        size="lg"
      >
        Connect Wallet
      </Button>
    );
  };

  const getProductsButton = () => {
    return (
      <Button
        className={classes.control}
        onClick={connectWalletHandler}
        size="lg"
        color={"orange"}
      >
        Get Products
      </Button>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, []);

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title} order={1}>
          Credo +
        </Title>
        <Title className={classes.subtitle} order={2}>
          Sell Credo enabled products with{" "}
          <Text component="span" color={theme.primaryColor} inherit>
            Cryptocurrency features
          </Text>{" "}
          easily
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Add new payment gateway to your credo product payment link and allow
            your customers to pay with crypto. We get your products from Credo,
            you connect your wallet and earn!
          </Text>
        </Container>

        <div className={classes.controls}>
          {currentAccount ? getProductsButton() : connectWalletButton()}
        </div>
        <Group position={"center"}>
          {currentAccount ? (
            <Card withBorder p="xl" style={{ width: "min(340px,100%)" }}>
              <Text align={"center"} weight={500} size={"md"}>
                Your wallet is connected! 🎉 click get products button to begin
                the process of fetching your products from Credo
              </Text>
            </Card>
          ) : (
            ""
          )}
        </Group>
      </div>
    </Container>
  );
}

export default HomePage;
