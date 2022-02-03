import {makeStyles} from "@material-ui/core/styles";

export const useBodyStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100vW",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      minHeight: "100vH",
    },
  }),
  {index: 1}
);

export const useNavStyles = makeStyles(
  (theme) => ({
    leftPortion: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
    },
    logoWrapper: {
      marginRight: "1em",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
      },
    },
    logo: {
      fontFamily: "Montserrat",
      textTransform: "none",
      fontSize: "1.5em",
      padding: "0.1em",
      marginRight: "0.3em",
    },
    contentContainer: {
      display: "flex",
      alignItems: "center",
    },
    appBar: {
      borderBottom: "4px solid #0277bd",
      padding: "0.2em 0",
    },
    searchBar: {
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: theme.palette.type === "dark" ? "#424242" : "#f1f1f4",
      flexGrow: 0.25,
      [theme.breakpoints.down("xs")]: {
        flexGrow: 1,
        marginLeft: "0.6em",
        marginRight: "0.6em",
      },
    },
    searchBtn: {
      padding: "0.1em",
    },
    iconBtn: {
      [theme.breakpoints.down("xs")]: {
        padding: "0.2em",
      },
    },
  }),
  {index: 1}
);

export const useQuesListStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      margin: "2em 1em 0 0",
      [theme.breakpoints.up("sm")]: {
        marginLeft: "1em",
      },
      padding: "0.4em",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "0.3em",
        paddingRight: "0.3em",
      },
    },
    topBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "0.4em",
        paddingRight: "0.4em",
      },
    },
    btnGroupWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      margin: "1em 0",
      [theme.breakpoints.down("xs")]: {
        width: "97%",
        margin: "1em auto",
      },
    },
    loadBtnWrapper: {
      display: "flex",
      justifyContent: "center",
    },
    loadBtn: {
      marginTop: "0.8em",
      marginBottom: "0.4em",
      width: "50%",
      display: "flex",
    },
    noQuesText: {
      textAlign: "center",
      marginTop: "2em",
    },
  }),
  {index: 1}
);

export const useDialogStyles = makeStyles(
  (theme) => ({
    dialogWrapper: {
      padding: 0,
      overflow: "hidden",
      [theme.breakpoints.down("xs")]: {
        padding: 0,
      },
    },
    menuIcon: {
      marginRight: "6px",
      fontSize: "1.3em",
    },
    upDownIcon: {
      color: "#aa9aaa",
      fontSize: 32,
    },
  }),
  {index: 1}
);

export const useAuthFormStyles = makeStyles(
  (theme) => ({
    root: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      [theme.breakpoints.down("xs")]: {
        padding: "0 0 0 0",
      },
    },
    inputField: {
      marginBottom: "1.5em",
    },
    submitButton: {
      marginTop: "1.8em",
    },
    titleLogo: {
      display: "block",
      width: "7.5em",
      height: "6.5em",
      margin: "0 auto",
    },
    title: {
      fontSize: "1.5em",
      marginBottom: "1em",
      textAlign: "center",
    },
    footerText: {
      marginTop: "1em",
      textAlign: "center",
    },
    link: {
      cursor: "pointer",
    },
  }),
  {index: 1}
);

export const useTagsPageStyles = makeStyles(
  (theme) => ({
    root: {
      marginTop: "2em",
      marginLeft: "0",
      [theme.breakpoints.up("sm")]: {
        marginLeft: "2em",
      },
      padding: "0.4em 0.7em",
      width: "100%",
    },
    titleText: {
      marginBottom: "0.9em",
    },
    filterInput: {
      marginTop: "1.2em",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    tagsWrapper: {
      marginTop: "1em",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(157px, 1fr))",
      gridGap: "12px",
    },
    tagBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "0.8em",
      paddingBottom: "0.4em",
      border: "1px solid #d3d3d3",
      borderRadius: 4,
      backgroundColor: theme.palette.type === "dark" ? "#555555" : "#fafafa",
    },
    tag: {
      marginBottom: "0.9em",
    },
  }),
  {index: 1}
);


export const useAskQuesPageStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      marginTop: "1em",
      padding: "0.4em 1em",
    },
    quesForm: {
      paddingTop: "0.8em",
    },
    inputWrapper: {
      marginBottom: "2em",
    },
    inputField: {
      marginTop: "0.4em",
    },
    submitBtn: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    tag: {
      marginRight: "0.5em",
    },
  }),
  {index: 1}
);

export const useVoteBtnsStyles = makeStyles(
  (theme) => ({
    icon: {
      color: "#aa9aaa",
      fontSize: 32,
    },
    checkedIcon: {
      color: "#448aff",
      fontSize: 32,
    },
  }),
  {index: 1}
);

export const useAlertStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
      marginTop: "0.8em",
      marginBottom: "0.8em",
    },
  }),
  {index: 1}
);

export const useNotFoundPageStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      marginTop: "1em",
      padding: "0.4em 1em",
    },
    textWrapper: {
      marginTop: "15%",
      textAlign: "center",
    },
    icon: {
      fontSize: "6em",
      marginBottom: "0.3em",
    },
  }),
  {index: 1}
);
