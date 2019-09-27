import React from 'react';

import { withFirebase } from '../Firebase';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import ErrorIcon from '@material-ui/icons/Error';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { withTheme , withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme =>({
  root:{
    position: 'relative'
  },
  backIcon:{
    transform: 'rotate(180deg)',
    position: 'absolute',
    left: '15px',
    color: theme.palette.primary.main,
    fontSize: '33px'
  }
});

const INITIAL_STATE = {
  email: '',
  error: null,
  snackErrorOpen: false,
  snackSuccessOpen: false,
};

class PasswordRecovery extends React.Component {
  state = { ...INITIAL_STATE }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.setState({ snackSuccessOpen: true })
      })
      .catch(error => {
        this.setState({ 
          snackErrorOpen: true,
          errorMessage: error,
        });
      });

    event.preventDefault();
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }
  handleClose = typeSnack => () => {
    this.setState({ [typeSnack]: false });
  };

  render() {

    const styles = this.props.theme.formStyles;
    const {classes} = this.props;
    console.log(this.props);

    const {
      email,
      errorMessage,
      snackErrorOpen,
      snackSuccessOpen,
    } = this.state;
    return (
      <React.Fragment>

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={snackErrorOpen}
          onClose={this.handleClose('snackErrorOpen')}
          ContentProps={{
            'aria-describedby': 'message-id',
            'style': styles.error,
          }}
          message={<span id="message-id">{errorMessage}</span>}
        />

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={snackSuccessOpen}
          onClose={this.handleClose('snackSuccessOpen')}
          ContentProps={{
            'aria-describedby': 'message-id',
            'style': styles.success,
          }}
          message={<span id="message-id">You will receive your password recovery by email</span>}
        />

        <form className={classNames(classes.root)} onSubmit={this.onSubmit} >
          <ArrowRightAltIcon className={classNames(classes.backIcon)} onClick={() => this.props.handlePasswordRecovery(false)} />
          <Typography variant="h6" gutterBottom>
            Password Recovery
              </Typography>

          <TextField
            id="email"
            label="Email Address *"
            type="email"
            value={email}
            onChange={this.handleChange('email')}
            margin="normal"
            fullWidth
          />

          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          style={styles.submit}
          disabled={email===''}
          >
              Send
        </Button>

        </form>
      </React.Fragment>
    )
  }
}

export default withTheme()(withStyles(styles)(withFirebase(PasswordRecovery)));