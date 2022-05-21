//@ts-ignore
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  useMantineTheme,
} from "@mantine/core";
import { useEffect } from "react";

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

  const checkWalletIsConnected = () => {
    //   const {ethereum} = window;
    //   if(!ethereum){
    //   }
  };

  const connectWalletHandler = () => {};

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
          Buy Credo enabled products with{" "}
          <Text component="span" color={theme.primaryColor} inherit>
            Cryptocurrency
          </Text>{" "}
          easily
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Adds new payment gateway to your credo product payment link. allows
            customers to pay with crypto. We get your products from Credo, you
            connect your wallet and earn!
          </Text>
        </Container>

        <div className={classes.controls}>{connectWalletButton()}</div>
      </div>
    </Container>
  );
}

export default HomePage;
