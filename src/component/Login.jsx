import React from 'react'

export const Login = () => {
    var divStyle = {
        background: "#eee",
        padding: "30px",
        margin: "30px"
    };
    return (
        <div>
            <h1 className="text-center">LOGIN</h1>
            <div className="login" style={divStyle}>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    {/* <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                    <button type="submit" className="btn btn-outline-dark px-4 py-2">Submit</button>
                </form>
            </div>
        </div>
    )
}
