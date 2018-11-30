import React, { Component } from 'react';
import $ from 'jquery';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { getAParcel, logout } from '../actions';


class viewParcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      clientPhone: '',
      clientEmail: '',
      receiverName: '',
      receiverPhone: '',
      receiverAddress: '',
      trackingNo: '',
      type: '',
      weight: '',
      totalFrieght: '',
      bookingDate: '',
      scheduledDate: '',
      fromCity: '',
      toCity: '',
    }
    this.onChange = this.onChange.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    const {pathname } = this.props.history.location;
    const { id } = this.props.match.params;
    if (id) {
      if (pathname === `/parcel/${id}`) {
        $('link[title=maincss]')[0].disabled=true;
      }
      this.props.getAParcel(id)
    }
  }

    /**
   * @param { Object } event
   *
   * @memberof Profile
   *
   * @returns { undefined }
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

/**
   * @param { Object } event
   *
   * @memberof Dashboard
   *
   * @returns { undefined }
   */
  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/signin');
  }

 /**
*
* @param { Function } nextProps updated props
*
* @returns { DOM } DOM object
*/
componentWillReceiveProps(nextProps) {
  this.setState({
    fullName: nextProps.parcel.fullName,
    userName: nextProps.parcel.userName,
    email: nextProps.parcel.email,
    clientName: nextProps.parcel.clientName,
    clientPhone: nextProps.parcel.clientPhone,
    clientEmail: nextProps.parcel.clientEmail,
    receiverName: nextProps.parcel.receiverName,
    receiverPhone: nextProps.parcel.receiverPhone,
    receiverAddress: nextProps.parcel.receiverAddress,
    trackingNo: nextProps.parcel.trackingNo,
    type: nextProps.parcel.type,
    weight: nextProps.parcel.weight,
    totalFrieght: nextProps.parcel.totalFrieght,
    bookingDate: nextProps.parcel.bookingDate,
    scheduledDate: nextProps.parcel.scheduledDate,
    fromCity: nextProps.parcel.fromCity,
    toCity: nextProps.parcel.toCity,
  });
}

  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" onClick={this.logout}>Sign out</a>
        </li>
      </ul>
    </nav>

    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to='/dashboard'>
                  <span data-feather="home"></span>
                  Dashboard 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parcel">
                  <span data-feather="file"></span>
                  Book a parcel
                </Link>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Parcel Details</h1>
          </div>    
          <form>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="clientName">Sender's Name</label>
      <input 
      type="text" 
      name="clientName"
      id="clientName" 
      value={this.state.clientName}
      className="form-control" 
      placeholder="Client's Name" 
      onChange={this.onChange}
      required
    />    
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="clientPhone">Sender's Phone No</label>
      <input 
      type="number" 
      name="clientPhone"
      id="clientPhone" 
      value={this.state.clientPhone}
      className="form-control" 
      placeholder="Client's Phone" 
      onChange={this.onChange}
      required
    />      
    </div>
  <div className="form-group col-md-4">
    <label htmlFor="clientEmail">Sender's Email</label>
    <input 
      type="email" 
      pattern=".+@globex.com"
      name="clientEmail"
      id="clientEmail" 
      value={this.state.clientEmail}
      className="form-control" 
      placeholder="Client's Email" 
      onChange={this.onChange}
      required
    /> 
    </div>
  </div>
  <div className="form-row">
  <div className="form-group col-md-4">
    <label htmlFor="receiverName">Receiver's Name</label>
    <input 
      type="text" 
      name="receiverName"
      id="receiverName" 
      value={this.state.receiverName}
      className="form-control" 
      placeholder="Receiver's Name" 
      onChange={this.onChange}
      required
    />
  </div>
    <div className="form-group col-md-4">
      <label htmlFor="receiverPhone">Receiver's Phone</label>
      <input 
      type="text" 
      name="receiverPhone"
      id="receiverPhone" 
      value={this.state.receiverPhone}
      className="form-control" 
      placeholder="Receiver's Phone No" 
      onChange={this.onChange}
      required
    />    
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="receiverAddress">Receiver's Address</label>
      <input 
      type="text" 
      name="receiverAddress"
      id="receiverAddress" 
      value={this.state.receiverAddress}
      className="form-control" 
      placeholder="Receiver's Address" 
      onChange={this.onChange}
      required
    />    
    </div>
  </div>
  <div className="form-row">
  <div className="form-group col-md-3">
    <label htmlFor="trackingNo">Tracking No</label>
    <input 
      type="number" 
      name="trackingNo"
      id="trackingNo" 
      value={this.state.trackingNo}
      className="form-control" 
      placeholder="Tracking No" 
      onChange={this.onChange}
      required
    />
  </div>
    <div className="form-group col-md-3">
      <label htmlFor="receiverPhone">Type</label>
      <input 
      type="text" 
      name="type"
      id="type" 
      value={this.state.type}
      className="form-control" 
      placeholder="Type" 
      onChange={this.onChange}
      required
    />    
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="weight">Weight</label>
      <input 
      type="number" 
      name="weight"
      id="weight" 
      value={this.state.weight}
      className="form-control" 
      placeholder="Weight" 
      onChange={this.onChange}
      required
    />    
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="totalFrieght">Total Frieght</label>
      <input 
      type="number" 
      name="totalFrieght"
      id="totalFrieght" 
      value={this.state.totalFrieght}
      className="form-control" 
      placeholder="Total Frieght" 
      onChange={this.onChange}
      required
    />    
    </div>
  </div>

  <div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="bookingDate">Booking Date</label>
    <input 
      type="text" 
      name="bookingDate"
      pattern="\d{1,2}/\d{1,2}/\d{2,4}"
      title="e.g. dd/mm/yyyy"
      id="bookingDate" 
      value={this.state.bookingDate}
      className="form-control" 
      placeholder="Booking Date" 
      onChange={this.onChange}
      required
    />
  </div>
    <div className="form-group col-md-6">
      <label htmlFor="scheduledDate">Scheduled Date</label>
      <input 
      type="text" 
      pattern="\d{1,2}/\d{1,2}/\d{2,4}"
      title="e.g. dd/mm/yyyy"
      name="scheduledDate"
      id="scheduledDate" 
      value={this.state.scheduledDate}
      className="form-control" 
      placeholder="Scheduled Date" 
      onChange={this.onChange}
      required
    />    
    </div>
  </div>

  <div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="fromCity">Sender's City</label>
    <input 
      type="text" 
      name="fromCity"
      id="fromCity" 
      value={this.state.fromCity}
      className="form-control" 
      placeholder="Sender's City" 
      onChange={this.onChange}
      required
    />
  </div>
    <div className="form-group col-md-6">
      <label htmlFor="toCity">Delivery City</label>
      <input 
      type="text" 
      name="toCity"
      id="toCity" 
      value={this.state.toCity}
      className="form-control" 
      placeholder="Delivery City" 
      onChange={this.onChange}
      required
    />    
    </div>
  </div>
</form>      
        </main>
      </div>
    </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => ({
  parcel: state.parcel.parcel
});

export default connect(mapStateToProps, {getAParcel, logout})(withRouter(viewParcel))