import React from 'react';

const Contacts = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Contacts me!</h1>
          </div>
       <form action="https://formsubmit.co/mmajharul400@gmail.com" method="POST">
       <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your Email" className="input input-bordered" required />
                <textarea className='border mt-3'></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
       </form>
        </div>
      </div>
    );
};

export default Contacts;