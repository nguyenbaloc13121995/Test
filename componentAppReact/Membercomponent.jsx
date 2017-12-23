import React, { Component } from 'react';

class Membercomponent extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Name :</label>
                                <input type="text" className="form-control" />
                            </div>
                            <label>NumberPhone :</label>
                            <input type="text" className="form-control" />
                            <br />
                            <label>Project :</label>
                            <input type="text" className="form-control" />
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                 <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Form Project */}
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add Project</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Name :</label>
                                <input type="text" className="form-control" />
                            </div>
                            <label>NumberPhone :</label>
                            <input type="text" className="form-control" />
                            <br />
                            <label>Project :</label>
                            <input type="text" className="form-control" />
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};
export default Membercomponent;