import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Link, withRouter } from 'react-router-dom'
import shortId from 'shortid'
import {getAllParcels, logout} from '../actions'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allParcels : []
    }
    this.logout = this.logout.bind(this);
  }

   /**
 *
 * @memberof Dashboard
 *
 * @returns {undefined}
 */
componentDidMount() {
  const {pathname } = this.props.history.location
  if (pathname === '/dashboard') {
    $('link[title=maincss]')[0].disabled=true;
  }
  this.props.getAllParcels(this.state.page);
 
}

/**
  *
  * @memberof Dashboard
  *
  * @param {Object} nextProps updated props
  *
  * @return {undefined} sets state to currrent prop
  */
 componentWillReceiveProps(nextProps) {
  this.setState({
    allParcels: nextProps.allParcels
  });
}

/**
   * @param { Object } event
   *
   * @memberof Dashboard
   *
   * @returns { undefined }
   */
  logout(event) {
    console.log('hello there!!!')
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/signin');
  }

  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/">Company name</Link>
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
                <Link className="nav-link active" to="/dashboard">
                  <span data-feather="home"></span>
                  Dashboard <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parcel">
                  <span data-feather="file"></span>
                  Book a parcel
                </Link>
              </li>
            </ul>

            
            {/* <ul className="nav flex-column mb-2">
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
            </ul> */}
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>  
          {this.props.allParcels.length > 0 ? this.props.allParcels.map(parcel => (
                  <Link
                    id="main-bill-detail"
                    to={`/parcel/${parcel.trackingNo}`}
                    className="flexer bill-content"
                    key={shortId.generate()}
                  >
                    <div className="card">
                      <div className="card-body">
                        {parcel.clientName}:  #{ parcel.trackingNo}
                      </div>
                    </div>
                </Link>
                )) : (<h3>Sadly nothing to show :)</h3>)}

        </main>
      </div>
    </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  allParcels: state.parcels.parcels || [],
});

export default connect(mapStateToProps, { getAllParcels, logout })(Dashboard)