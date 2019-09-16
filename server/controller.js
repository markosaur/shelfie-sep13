module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get("db");
    
        db.getInventory()
          .then(result => {
            res.status(200).send(result);
          })
          .catch(err => {
            res.status(500).send("whoops something is not quite right");
            console.log(err);
          });
      }
};