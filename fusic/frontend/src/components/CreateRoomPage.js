import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import { Link } from "react-router-dom";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default class CreateRoomPage extends Component {
    defaultVotes = 2;

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Grid container spacing={1}>
                <Grid item xs={12} align="centre">
                    <Typography component='h4' variant='h4'>
                        Create A Room
                    </Typography>
                </Grid>

                <Grid item xs={12} align="center">
                    <FormControl omponent="fieldset">
                        <FormHelperText>
                            <div align="center">Guest Control of Playback State</div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="True">
                            <FormControlLabel
                              value="true"
                              control={ <Radio color="primary"/> }
                              label="Play/Pause"
                              labelPlacement="bottom"
                            />
                            <FormControlLabel
                              value="false"
                              control={ <Radio color="secondary" /> }
                              label="No Control"
                              labelPlacement="bottom"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="centre">
                    <FormControl>
                        <TextField
                            required={true}
                            type="number"
                            defaultValue={this.defaultVotes}
                            inputProps={{
                                min: 1,
                                style: { textAlign: "centre" }
                            }}
                        />
                        <FormHelperText>
                            <div align="centre">
                                Votes Required To Skip Song
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.handleRoomButtonPressed}
                    >
                      Create A Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }
}