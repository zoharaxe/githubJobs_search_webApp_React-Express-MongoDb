import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    margin: "auto",
    marginTop: "10px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  sm_column: {
    flexBasis: "15%"
  },
  description: {
    flexBasis: "70%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

function ValidationForLoadingData (props) {
  
  const classes = useStyles();

  return props.length === 0 && props.isClicked === true
    ? ` ---"${props.search}" was not found---`
    : props.filteredJobs.map((job, index) => {
        return (
          <div key={index} className={classes.root}>
            <div className={classes.column}></div>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div className={classes.column}>
                  <Typography className={classes.heading}>
                    {job.title}
                  </Typography>
                  <Typography>{job.location}</Typography>
                  <Typography>{job.type}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>
                    {job.created_at
                      .split(" ")
                      .slice(0, 3)
                      .join(" ")}
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <Divider />
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.sm_column} />
                <div
                  className={classes.description}
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
                {/* <Chip label="Barbados" /> */}

                <div className={clsx(classes.sm_column, classes.helper)}>
                  <Typography variant="caption">
                    <p>Go to job's ad:</p>
                    <a href={job.url} target="_blank">
                      <img
                        alt=""
                        src={job.company_logo}
                        width="auto"
                        height="50px"
                      />
                    </a>
                  </Typography>
                </div>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                {/* <Button size="small">Cancel</Button> */}
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    axios
                      .post("/savedJob", job)
                      .then(function(response) {
                        console.log(response);
                      })
                      .catch(function(error) {
                        console.log(error);
                      });
                  }}
                >
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
          </div>
        );
      });
      
    
    //  return props.setClickedFalse();
};
export default ValidationForLoadingData;
