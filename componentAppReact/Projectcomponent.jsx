import React, { Component } from 'react';

class Projectcomponent extends Component {
    render() {
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Project Name</th>
                                    <th className="text-center">List Member</th>
                                    <th className="text-center">Button Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td className="text-center">Học lập trình</td>
                                    <td className="text-center">
                                    </td>
                                    <td className="text-center">
                                    <button type="button" className="btn btn-warning">
                                        <span className="fa fa-pencil mr-5" />Sửa
                                    </button>
                                    &nbsp;
                                    <button type="button" className="btn btn-danger">
                                        <span className="fa fa-trash mr-5" />Xóa
                                    </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};
export default Projectcomponent;