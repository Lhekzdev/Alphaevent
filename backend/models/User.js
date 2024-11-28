app.post('/new&User', async (req, res) => {
  const { name, email, passWd, confirmPassword } = req.body;
  
  // Check if passwords match
  if (passWd !== confirmPassword) {
    return res.status(400).send({ msg: 'Passwords do not match.' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: 'User with this email already exists.' });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password: passWd, // You should hash the password here
    });

    await newUser.save();
    return res.status(201).send({ msg: 'User created successfully!' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
});