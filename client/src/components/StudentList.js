import React from "react";
import Card from "./Card";

const StudentList = ({ Users }) => {
  return Users.length > 0 ? (
    <div className="row">
      {Users.map((student, key) => (
        <div className="col-sm-4 mb-3" key={key}>
          <Card
            Title={student.Name}
            SubTitle={`${student.Age}, ${student.About}`}
          />
        </div>
      ))}
    </div>
  ) : (
    <div className="alert alert-danger">Sorry, no students!</div>
  );
};

export default StudentList;
