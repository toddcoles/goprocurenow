import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import PRitems from '../create-purchase-request/PRitems';
import { Link } from 'react-router-dom';
// import { createPurchase } from '../../actions/purchaseActions';

class CreatePurchaseRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFuncApprovals: false,
      displayFinApprovals: false,
      serviceCenter: '',
      program: '',
      title: '',
      status: '',
      commodity: '',
      chargeCode: '',
      costElement: '',
      productService: '',
      purchaseOrderNum: '',
      dateRequired: '',
      requestor: '',
      buyer: '',
      procurementType: '',
      vendor: {},
      deliveryLocation: {},
      terms: '',
      items: [],
      approvals: {},
      comment: '',
      date: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    // const profileData = {
    //   handle: this.state.handle,
    //   company: this.state.company,
    //   website: this.state.website,
    //   location: this.state.location,
    //   status: this.state.status,
    //   skills: this.state.skills,
    //   githubusername: this.state.githubusername,
    //   bio: this.state.bio,
    //   twitter: this.state.twitter,
    //   facebook: this.state.facebook,
    //   linkedin: this.state.linkedin,
    //   youtube: this.state.youtube,
    //   instagram: this.state.instagram
    // };
    // this.props.createProfile(profileData, this.props.history);
    console.log('Submitted');
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displayFuncApprovals, displayFinApprovals } = this.state;

    let funcApprovals;
    if (displayFuncApprovals) {
      funcApprovals = (
        <div>
          OHS Approval:
          <TextFieldGroup
            placeholder="OHS Approver"
            name="ohsApproval"
            value={this.state.ohsApproval}
            onChange={this.onChange}
            error={errors.ohsApproval}
          />
          IT Approval:
          <TextFieldGroup
            placeholder="IT Approver"
            name="itApproval"
            value={this.state.itApproval}
            onChange={this.onChange}
            error={errors.itApproval}
          />
          ITAR Approval:
          <TextFieldGroup
            placeholder="ITAR Approver"
            name="itarApproval"
            value={this.state.itarApproval}
            onChange={this.onChange}
            error={errors.itarApproval}
          />
          HR Approval:
          <TextFieldGroup
            placeholder="HR Approval"
            name="hrApproval"
            value={this.state.hrApproval}
            onChange={this.onChange}
            error={errors.hrApproval}
          />
          QA Approval:
          <TextFieldGroup
            placeholder="QA Approver"
            name="qaApproval"
            value={this.state.qaApproval}
            onChange={this.onChange}
            error={errors.qaApproval}
          />
        </div>
      );
    }

    let finApprovals;
    if (displayFinApprovals) {
      finApprovals = (
        <div>
          Charge Code:
          <TextFieldGroup
            placeholder="Charge Code"
            name="chargeCode"
            value={this.state.chargeCode}
            onChange={this.onChange}
            error={errors.chargeCode}
          />
          Cost Element:
          <TextFieldGroup
            placeholder="Cost Element"
            name="costElement"
            value={this.state.costElement}
            onChange={this.onChange}
            error={errors.costElement}
          />
          Finance Approval:
          <TextFieldGroup
            placeholder="Finance Approver"
            name="fnApproval"
            value={this.state.fnApproval}
            onChange={this.onChange}
            error={errors.fnApproval}
          />
        </div>
      );
    }

    const options = [
      { label: '* Select Service Center', value: 0 },
      { label: 'USA', value: 'USA' },
      { label: 'EUR', value: 'EUR' },
      { label: 'UAE', value: 'UAE' }
    ]; // Select options for status

    const prodOptions = [
      { label: 'PRODUCT', value: 'PRODUCT' },
      { label: 'SERVICE', value: 'SERVICE' }
    ];

    return (
      <div className="create-profile">
        <div className="container-fluid">
          <div className="row" style={{ display: 'block' }}>
            <div className="col-lg-12">
              <h6>
                <strong>STATUS: </strong>
                <span className="badge badge-warning">NOT SUBMITTED</span>
                <h5 className="display-8 text-center">
                  Create your Purchase Request
                </h5>
              </h6>
            </div>
            <div
              style={{
                zIndex: '-1',
                position: 'absolute',
                right: '3em'
              }}
            >
              <div
                className="d-md-block d-sm-none d-xs-none d-lg-block"
                style={{
                  fontSize: '12px',
                  zIndex: '999',
                  position: 'relative',
                  top: '-60px',
                  right: '5em'
                }}
              >
                <div>SUBTOTAL: $450.99</div>
                <div>TAX: $22.99</div>
                <div>FREIGHT: $19.99</div>
                <div>
                  <strong>TOTAL: $585.99</strong>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={this.onSubmit}>
            <div className="row" style={{ display: 'block' }}>
              <div className="col-md-4 m-auto mt-5" style={{ float: 'left' }}>
                {/* <h6 className="display-6 text-center">PR HEADER</h6> */}
                Service Center:
                <SelectListGroup
                  placeholder="Service Center"
                  name="serviceCenter"
                  value={this.state.serviceCenter}
                  onChange={this.onChange}
                  options={options}
                  error={errors.serviceCenter}
                />
                Program:
                <TextFieldGroup
                  placeholder="* Program"
                  name="program"
                  value={this.state.program}
                  onChange={this.onChange}
                  error={errors.program}
                />
                Title:
                <TextFieldGroup
                  placeholder="Title of PR"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                Product or Service:
                <SelectListGroup
                  placeholder="Product or Service"
                  name="productService"
                  value={this.state.productService}
                  onChange={this.onChange}
                  options={prodOptions}
                  error={errors.productService}
                />
                Commodity code:
                <TextFieldGroup
                  placeholder="Commodity code"
                  name="commodity"
                  value={this.state.commodity}
                  onChange={this.onChange}
                  error={errors.commodity}
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displayFuncApprovals: !prevState.displayFuncApprovals
                      }));
                    }}
                    className="btn btn-secondary"
                  >
                    DELIVERY LOCATION:
                  </button>
                </div>
              </div>
              <div className="col-md-4 m-auto" style={{ float: 'left' }}>
                {/* <h6 className="display-6 text-center">PR DATA</h6> */}
                Purchase Order Number:
                <TextFieldGroup
                  placeholder="Purchase Order / Subk Number"
                  name="purchaseOrderNum"
                  value={this.state.purchaseOrderNum}
                  onChange={this.onChange}
                  error={errors.purchaseOrderNum}
                />
                Requestor:
                <TextFieldGroup
                  placeholder="Requestor (does not have to be creator)"
                  name="requestor"
                  value={this.state.requestor}
                  onChange={this.onChange}
                  error={errors.requestor}
                />
                Buyer:
                <TextFieldGroup
                  placeholder="Buyer"
                  name="buyer"
                  value={this.state.buyer}
                  onChange={this.onChange}
                  error={errors.buyer}
                />
                Procurement Type:
                <TextFieldGroup
                  placeholder="Procurement type"
                  name="procurementType"
                  value={this.state.procurementType}
                  onChange={this.onChange}
                  error={errors.procurementType}
                />
                Terms:
                <TextFieldGroup
                  placeholder="Terms"
                  name="terms"
                  value={this.state.terms}
                  onChange={this.onChange}
                  error={errors.terms}
                />
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displayFuncApprovals: !prevState.displayFuncApprovals
                      }));
                    }}
                    className="btn btn-secondary"
                  >
                    VENDOR:
                  </button>
                </div>
              </div>
              <div className="col-md-4 m-auto" style={{ float: 'left' }}>
                {/* <h6 className="display-6 text-center">PR APPROVALS</h6> */}
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displayFuncApprovals: !prevState.displayFuncApprovals
                      }));
                    }}
                    className="btn btn-secondary"
                  >
                    FUNCTIONAL APPROVALS:
                  </button>
                </div>
                {funcApprovals}
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displayFinApprovals: !prevState.displayFinApprovals
                      }));
                    }}
                    className="btn btn-secondary"
                  >
                    FINANCE APPROVALS:
                  </button>
                </div>
                {finApprovals}
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-secondary"
                  >
                    GOVERNMENT APPROVALS:
                  </button>
                </div>
                {/* ACO Approval:
                <TextFieldGroup
                  placeholder="ACO Approver"
                  name="acoApproval"
                  value={this.state.acoApproval}
                  onChange={this.onChange}
                  error={errors.acoApproval}
                />
                KO Approval:
                <TextFieldGroup
                  placeholder="KO Approver"
                  name="koApproval"
                  value={this.state.koApproval}
                  onChange={this.onChange}
                  error={errors.koApproval}
                /> */}
                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-secondary"
                  >
                    PROGRAM APPROVALS:
                  </button>
                </div>
                {/* Program Approval:
                <TextFieldGroup
                  placeholder="PM Approver"
                  name="pmApproval"
                  value={this.state.pmApproval}
                  onChange={this.onChange}
                  error={errors.pmApproval}
                /> */}
              </div>
              <PRitems />
              <Link className="nav-link" to="/create-pr">
                <button type="button" className="btn btn-info rounded btn-sm">
                  NEW LINE ITEM <i className="fa fa-plus" />
                </button>
              </Link>
              <input
                type="submit"
                value="Submit"
                className="btn btn-success btn-lg mt-4 float-right"
              />
              <input
                type="button"
                value="Save"
                className="btn btn-primary btn-lg mt-4 float-right"
              />

              <TextAreaFieldGroup
                placeholder="Short bio"
                name="bio"
                value={this.state.bio}
                onChange={this.onChange}
                error={errors.bio}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

CreatePurchaseRequest.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(CreatePurchaseRequest));
