const Login= require('../LoginSchema_Route/Login');
// GET all logins
exports.getAllLogins = async (req, res) => {    
    try {
        const logins = await Login.find({email: req.body.email, password: req.body.password});
        res.status(200).json({
            msg: "All logins fetched successfully",
            data: logins
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching logins', error: error.message });
    }
};
// POST new login
exports.postLogin = async (req, res) => {
    try {
        const newLogin = await Login.create(req.body);
        console.log("✅ Saved:", newLogin);
        res.status(201).json({
            msg: "Login added successfully",
            data: newLogin
        });
    } catch (error) {
        res.status(400).json({ msg: 'Error adding login', error: error.message });
    }   
};