const Validate = (Form, Users, setState) => {
  const NewUser = {
    ...Form
  };
  const { Name, Age, About } = Form;
  if (
    Name.trim().length > 0 &&
    Age.trim().length > 0 &&
    About.trim().length > 0
  ) {
    if (!isNaN(Age)) {
      setState({
        Users: [...Users, NewUser],
        Form: {
          Name: "",
          Age: "",
          About: ""
        },
        Error: ""
      });
    } else {
      setState({
        Error: "Please enter only numbers for age."
      });
    }
  } else {
    setState({
      Error: "You need to have all the three fields filled."
    });
  }
};

export default Validate;
