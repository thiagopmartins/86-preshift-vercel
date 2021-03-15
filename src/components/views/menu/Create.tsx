import React, { ChangeEventHandler, useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Chip,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { Controller, useForm, useWatch } from "react-hook-form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 30,
      marginInline: 20,
      boxShadow: "none",
      borderRadius: 0,
    },
    tabs: {
      display: "flex",
      flex: "1",
      paddingInline: 20,
      marginTop: 25,
    },
    box: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
    input: {
      margin: "15px 0",
      display: "flex",
      flex: 1,
      flexDirection: "column",
      width: "100%",
      minHeight: 56,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color: "rgba(0, 0, 0, 0.54)",
    },
    dialog: {
      minWidth: "500px",
    },
    dialogContent: {
      display: "flex",
      flexDirection: "column",
    },
    chips: {
      marginInline: 5,
    },
  })
);

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

type MenuTypes = {
  id: string;
  name: string;
  isActive: boolean;
};

type MenuInput = {
  name: string;
  menuType: {};
  headerText: string;
  footerText: string;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function CreateMenu() {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const [menuType, setMenuType] = useState([
    {
      id: "food",
      name: "Food",
      isActive: false,
    },
    {
      id: "wine",
      name: "Wine",
      isActive: false,
    },
    {
      id: "cocktails",
      name: "Cocktails",
      isActive: false,
    },
    {
      id: "beer",
      name: "Beer",
      isActive: false,
    },
    {
      id: "liquor",
      name: "Liquor",
      isActive: false,
    },
    {
      id: "others",
      name: "Coffee/ Tea/ N/A Beverages",
      isActive: false,
    },
  ]);
  const [valueText, setValueText] = useState(0);

  const [open, setOpen] = useState(false);

  const [headerText, setValueHeaderText] = useState("");

  const {
    control,
    errors: fieldsErrors,
    handleSubmit,
    getValues,
  } = useForm<MenuInput>();

  const onSubmit = (data: MenuInput) => {
    console.log(data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleDialogConfirm = () => {
    const formValues = getValues();
    console.log(formValues);
    Object.entries<boolean>(formValues.menuType).forEach(([key, value]) => {
      menuType.map((m) => {
        if (m.id === key) {
          m.isActive = value;
        }

        return m;
      });
    });

    setMenuType(menuType);

    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeText = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValueText(newValue);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        className={classes.tabs}
      >
        <Tab label="A La Carte" tabIndex={2} />
        <Tab label="Tasting" tabIndex={3} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Box className={classes.box}>
            <Controller
              name="name"
              as={
                <TextField
                  id="outlined-basic"
                  label="Menu name"
                  variant="outlined"
                  name="name"
                  className={classes.input}
                />
              }
              control={control}
              rules={{ required: "This is required" }}
              defaultValue=""
            />

            <div>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
                className={classes.input}
              >
                What's On It?
              </Button>
              <Dialog
                open={open}
                onClose={handleClickClose}
                aria-labelledby="form-dialog-title"
                className={classes.dialog}
              >
                <DialogTitle id="form-dialog-title">What's On It?</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                  <DialogContentText>
                    <Button color="primary">Select All</Button>
                  </DialogContentText>

                  {menuType.map(({ id, name, isActive }, index) => (
                    <Controller
                      control={control}
                      name={`menuType.${id}`}
                      render={({ onChange, onBlur, value, ref }) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              color="primary"
                              name={`menuType.${id}`}
                              onChange={(e) => {
                                onChange(e.target.checked);
                              }}
                              checked={value}
                            />
                          }
                          label={name}
                        />
                      )}
                      defaultValue={isActive}
                    />
                  ))}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClickClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleDialogConfirm} color="primary">
                    Confirm
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Box>
          <Box>
            <Chip
              label="Food"
              variant="outlined"
              clickable
              color="primary"
              onDelete={handleDelete}
              className={classes.chips}
            />
            <Chip
              label="Wine"
              variant="outlined"
              clickable
              color="primary"
              onDelete={handleDelete}
              className={classes.chips}
            />
            <Chip
              label="Beer"
              variant="outlined"
              clickable
              color="primary"
              onDelete={handleDelete}
              className={classes.chips}
            />
          </Box>
          <Box className={classes.box}>
            <Tabs
              value={valueText}
              onChange={handleChangeText}
              indicatorColor="primary"
              textColor="primary"
              centered
              className={classes.tabs}
            >
              <Tab label="Header" />
              <Tab label="Footer" />
            </Tabs>
            <TabPanel value={valueText} index={0}>
              <Controller
                name="headerText"
                as={
                  <TextField
                    id="outlined-multiline-static"
                    label="Header text"
                    multiline
                    rows={4}
                    variant="outlined"
                    className={classes.input}
                  />
                }
                control={control}
                rules={{ required: "This is required" }}
                defaultValue={headerText}                          
              />
            </TabPanel>

            <TabPanel value={valueText} index={1}>
              <TextField
                id="outlined-multiline-static"
                label="Footer text"
                multiline
                rows={4}
                variant="outlined"
                className={classes.input}
              />
            </TabPanel>
          </Box>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Paper>
  );
}
