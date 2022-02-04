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

export const useMenuStyles = makeStyles(
  (theme) => ({
    menuIcon: {
      marginRight: "6px",
      fontSize: "1.5em",
    },
    menuItem: {
      padding: "1em",
    },
    closeIcon: {
      boxSizing: "border-box",
      border: `0.5px solid f1f1f4`,
      borderRadius: 3,
    },
    rootPanel: {
      position: "sticky",
      top: "5.5vH",
      display: "flex",
      minHeight: "94.5vh",
    },
    list: {
      marginTop: "2em",
      minWidth: "10vw",
    },
    madeByItem: {
      padding: "0.4em 0.8em 0.2em 0.8em",
    },
    userBtn: {
      textTransform: "none",
      display: "flex",
    },
    avatar: {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
      marginRight: "0.4em",
      borderRadius: 2,
      [theme.breakpoints.down("xs")]: {
        marginRight: "0.2em",
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    },
    moreBtn: {
      padding: "0.2em",
    },
    userBtnMob: {
      padding: "0.3em",
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

export const useQuesCardStyles = makeStyles(
  (theme) => ({
    root: {
      borderBottom: "1px solid #dfdfdf",
      display: "flex",
      padding: "0.5em 0",
      borderRadius: 0,
    },
    infoWrapper: {
      width: "10%",
      padding: "0.4em",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        width: "22%",
        paddingRight: "0.2em",
      },
    },
    mainText: {
      fontSize: "1.2em",
      fontWeight: 500,
    },
    title: {
      fontSize: "1.2em",
      fontWeight: 500,
      wordWrap: "anywhere",
      textDecoration: "none",
      "&:hover": {
        filter: "brightness(200%)",
      },
      transition: "all 0.4s ease",
    },
    innerInfo: {
      display: "flex",
      flexDirection: "column",
    },
    quesDetails: {
      paddingLeft: "0.2em",
      paddingBottom: "0.7em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
    },
    tagsWrapper: {
      display: "flex",
      flexWrap: "wrap",
    },
    tag: {
      marginRight: "0.5em",
      marginTop: "0.5em",
    },
    bottomWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    byUserWrapper: {
      display: "flex",
      alignItems: "center",
      marginTop: "0.7em",
    },
    filledByUser: {
      display: "flex",
      alignItems: "center",
      marginTop: "0.7em",
      backgroundColor: `${theme.palette.primary.main}10`,
      padding: "0.4em",
      borderRadius: 3,
      border: `1px solid ${theme.palette.primary.main}40`,
    },
    homeAvatar: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      marginRight: "0.4em",
      borderRadius: 2,
    },
    quesAnsAvatar: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginRight: "0.4em",
      borderRadius: 2,
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
