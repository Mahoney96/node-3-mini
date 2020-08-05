 module.exports = {
     getAirplanes: (req, res) => {
         const db = req.app.get("db");
         db.get_planes().then( plnes => {
             res.status(200).send(planes)
         }).catch(err => {
             console.log(err)
             res.sendStatus(500)
         })
     },
     getAirplaneById: (req, res) => {
         const db = req.app.get("db");
         db.get_plane_by_id([req.params.plane_id])
     },
     addAirplane: (req, res) => {
         const db = req.app.get("db");
         const {planeType, passengerCOunt} = req.body
         db
     }
     const db = req.app.get("db");
     coonst{planeType, passengerCount} = req.body
     db.add_plane([])
 }