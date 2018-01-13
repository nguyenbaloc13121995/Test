import React, { Component } from 'react';

class ActionContainers extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" id="" placeholder="Input field" />
                    </div>
                    <div class="form-group">
                        <label for="">Price</label>
                        <input type="text" class="form-control" id="" placeholder="Input field" />
                    </div>
                    <div class="form-group">
                        <label for="">Status :
                             <input type="checkbox" />
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
};
export default ActionContainers;