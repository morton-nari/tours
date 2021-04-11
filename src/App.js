import React, { useState } from "react";
import { connect } from "react-redux";
import { addData } from "./action";
import Loading from "../src/pages/loading";
import Tours from "./Tours";

function App({ addData, data }) {
  const [Show, setShow] = useState(true);
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const loadTours = async () => {
    setLoading(true);
    try {
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  if (Show) {
    return (
      <section>
        <div className="container">
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                setShow(false);
                loadTours();
              }}
            >
              Load tours
            </button>
          </div>
        </div>
      </section>
    );
  }
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
}
// {
//   /* <button onClick={addData}>Add Data</button> */
// }
const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) => {
  return {
    addData: () => dispatch(addData),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
